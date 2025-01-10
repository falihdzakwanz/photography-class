"use client";

import authServices from "../../../services/auth/index";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import React from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;

    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    try {
    const response = await authServices.registerAccount(data);
    const result = response.data;
      console.log(result);
    if (result.statusCode === 200) {
      form.reset();
      setIsLoading(false);
      router.push("/");
    } else {
      setIsLoading(false);
    }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <AuthLayout title="SignUp">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
        />
        <Input label="Fullname" name="fullname" type="text" />
        <Input label="Phone" name="phone" type="number" />
        <Input label="Password" name="password" type="password" />

        <Button
          className={"w-full bg-black text-white p-1 mt-2 rounded-sm"}
          type="submit"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
      <p className="text-xs mt-1">
        Have an account ? Sign In{" "}
        <Link className="text-blue-600" href={"/auth/login"}>
          here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterView;