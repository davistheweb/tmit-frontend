import * as React from "react";
// import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  registerFormSchema,
  type RegisterFormSchema,
} from "@/lib/validators/registerFormSchema";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthFormLayout } from "@/components/layouts";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm: React.FC = () => {
  const [isVisibe, setIsVisible] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  function SubmitForm(data: RegisterFormSchema) {
    console.log(data);
  }
  return (
    <form action="" onSubmit={handleSubmit(SubmitForm)}>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="username" className="mb-1">
            Registration Number
          </Label>
          <Input
            className={`border ${
              errors.regNum ? "border-red-300" : "border-gray-300"
            } focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none`}
            type="text"
            {...register("regNum")}
            placeholder="Enter username"
            id="username"
          />
          {errors.regNum && (
            <span className="text-red-600 text-xs">
              {errors.regNum.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="username" className="mb-1">
            Name
          </Label>
          <Input
            className={`border ${
              errors.name ? "border-red-300" : "border-gray-300"
            } focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none`}
            type="text"
            {...register("name")}
            placeholder="Enter fullname"
            id="username"
          />
          {errors.name && (
            <span className="text-red-600 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="username" className="mb-1">
            Email
          </Label>
          <Input
            className={`border ${
              errors.email ? "border-red-300" : "border-gray-300"
            } focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none`}
            type="email"
            {...register("email")}
            placeholder="Enter email"
            id="username"
          />
          {errors.email && (
            <span className="text-red-600 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="passoword" className="mb-1">
            Password
          </Label>
          <div className="relative flex">
            <Input
              className={`border ${
                errors.password ? "border-red-300" : "border-gray-300"
              } focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none`}
              type={isVisibe ? "text" : "password"}
              {...register("password")}
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
          {errors.password && (
            <span className="text-red-600 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="confirm passoword" className="mb-1">
            Confirm Password
          </Label>
          <div className="relative flex">
            <Input
              className={`border ${
                errors.confirmPassword ? "border-red-300" : "border-gray-300"
              } focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none`}
              type={isVisibe ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm password"
              id="confirm password"
            />
            <span
              className="absolute right-2 top-2.5 cursor-pointer"
              onClick={(): void => setIsVisible((prev) => !prev)}
            >
              {isVisibe ? <EyeOff size={17} /> : <Eye size={17} />}
            </span>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-600 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
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
