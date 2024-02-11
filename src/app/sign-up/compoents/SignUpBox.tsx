"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignUpForm() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  type formValue = {
    email: string;
    password: string;
    username: string;
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { handleSubmit, register, formState } = form;

  const { errors } = formState;

  const onsubmit = async (data: formValue) => {
    if (!isLoaded) {
      return;
    }

    try {
      setIsProcessing((prev) => !prev);
      const result = await signUp.create({
        username: data.username,
        password: data.password,
        emailAddress: data.email,
      });

      console.log(result);
      if (result.status === "complete") {
        setActive({ session: result.createdSessionId });
      }
    } catch (err: any) {
      setIsProcessing((prev) => !prev);
      toast.error(err.errors[0].message);
    }
  };

  return (
    <div className="max-w-sm">
      <Card className="bg-black border-none pt-5">
        <FaTwitter size={80} style={{ color: "#1d9bf0" }} className="ml-5" />
        <CardHeader className="space-y-1">
          <CardTitle className="text-5xl text-white mb-10">
            Happening Now
          </CardTitle>
          <CardDescription className="text-xl">
            Join Twitter today
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col space-y-5">
            <Button
              variant="default"
              className="rounded-full bg-white hover:bg-gray-200"
            >
              <FcGoogle size={25} className="mr-2" />
              <p className="text-black">Sign up with Google</p>
            </Button>
            <Button
              variant="default"
              className="rounded-full bg-white hover:bg-gray-200"
              // onClick={}
            >
              <FaFacebook
                size={25}
                style={{ color: "#1d9bf0" }}
                className="mr-2"
              />
              <p className="text-black">Sign up with FaceBook</p>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-2 text-muted-foreground text-md">
                or
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onsubmit)} noValidate>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="text-white pl-3 text-xs">
                Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="bg-black text-white"
                {...register("username", {
                  required: "Choose an unique username",
                })}
              />
              <p className="mt-1 mb-2 text-xs text-red-500">
                {errors.username?.message}
              </p>
              <Label htmlFor="email" className="text-white pl-3 text-xs">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-black text-white"
                {...register("email", {
                  required: "Enter a valid Email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="mt-1 mb-2 text-xs text-red-500">
                {errors.email?.message}
              </p>
              <Label htmlFor="password" className="text-white pl-3 text-xs">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-black text-white"
                {...register("password", {
                  required: "Enter a valid password",
                })}
              />
              <p className="mt-1 mb-2 text-xs text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <Button
              type="submit"
              disabled={isProcessing}
              className="bg-white text-black text-sm w-full rounded-full mt-5 hover:bg-gray-200"
            >
              Sign in
            </Button>
          </form>

          <p className="text-white text-sm">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-400">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
