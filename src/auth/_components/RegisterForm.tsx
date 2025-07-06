import * as React from "react";
// import { Link } from "react-router";
// import { z } from "zod";
// import {useForm }from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthFormLayout } from "@/components/layouts";

const RegisterForm: React.FC = () => {
  // const { resister } = useForm();
  // const formSchema = z.object({
  //   email: z.string().email("Please input a valid email"),
  // });
  const [isVisibe, setIsVisible] = React.useState<boolean>(false);
  return (
    <form action="" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="username" className="mb-2">
            Registration Number
          </Label>
          <Input
            className="borde border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            type="text"
            placeholder="Enter username"
            id="username"
          />
          <span className="text-red-600 text-xs">Pls!</span>
        </div>
        <div>
          <Label htmlFor="username" className="mb-2">
            Name
          </Label>
          <Input
            className="borde border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            type="text"
            placeholder="Enter fullname"
            id="username"
          />
          <span className="text-red-600 text-xs">Pls!</span>
        </div>
        <div>
          <Label htmlFor="username" className="mb-2">
            Email
          </Label>
          <Input
            className="borde border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            type="email"
            placeholder="Enter email"
            id="username"
          />
          <span className="text-red-600 text-xs">Pls!</span>
        </div>
        <div>
          <Label htmlFor="passoword" className="mb-2">
            Password
          </Label>
          <div className="">
            <div className="relative flex">
              <Input
                className="border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
                type={isVisibe ? "text" : "password"}
                placeholder="Enter passowrd"
                id="password"
              />
              <span
                className="absolute right-2 top-2.5 cursor-pointer"
                onClick={(): void => setIsVisible((prev) => !prev)}
              >
                {isVisibe ? <EyeOff size={17} /> : <Eye size={17} />}
              </span>
            </div>
            <span className="text-red-600 text-xs">Pls!</span>
          </div>
        </div>
        {/* <div className="w-full h-[0.3px] bg-gray-400 z-10" /> */}
      </div>
      <button
        className="rounded-sm text-white text-[15px] font-semibold mt-2 cursor-pointer w-24 h-10 bg-green-500"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export const RegisterBody: React.FC = () => {
  return (
    <div className="flex items-center max-h-[600px]">
      <AuthFormLayout
        heading="Welcome to TMIT"
        subtitle="Register with your details"
      >
        <RegisterForm />
      </AuthFormLayout>
    </div>
  );
};
