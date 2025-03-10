"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { axiosClient } from "../../api/axios"
import {useNavigate} from "react-router-dom";
import { STUDENT_DASHBOARD_ROUTE } from "../../router/router"
import { Loader } from "lucide-react"

const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(20),
})

export default function StudentLogin() {

  const navigate = useNavigate();
      // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@gmail.com",
      password:'12345678'
    },
  })

  const {setError , formState : {isSubmitting}} = form

// 2. Define a submit handler.
async function onSubmit(values) {
  try {
    // Get CSRF cookie
    await axiosClient.get("/sanctum/csrf-cookie");

    // Send login request
    const response = await axiosClient.post("/login", values);

    console.log("Login Success:", response.data);
    if(response.status === 204){
      window.localStorage.setItem("ACCESS_TOKEN", 'test');
      navigate(STUDENT_DASHBOARD_ROUTE);
    }
} catch (error) {
    console.error("Login Error:", error.response.data.errors );
    setError('email',{
      message: error.response.data.errors.email
    })
    
}
    }

  return (
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">Login
          {isSubmitting && <Loader className=" animate-spin"/>}
        </Button>
      </form>
    </Form>
  )
}
