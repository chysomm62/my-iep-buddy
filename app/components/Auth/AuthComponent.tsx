"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import Logo from "@/public/images/auth_logo.png";
import GeneratorImage from "@/public/images/generator_image.png";

const AuthComponent = () => {
  const router = useRouter();
  const currentPage = usePathname().split("/", 3)[2];

  const isRegister = currentPage.toLowerCase() === "register";
  const isLogin = currentPage.toLowerCase() === "login";

  console.log(isRegister, isLogin);

  const submitForm = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div>
      <div className="flex min-h-screen items-center justify-between  max-w-screen-xl mx-auto md:p-5 ">
        <div className="flex-1">
          <div className="m-6 sm:w-[420px]">
            <Link href="/">
              <Image src={Logo} alt="My IEP Buddy logo" />
            </Link>
            <div className="mt-6 md:mt-16">
              <h2 className="mb-3 text-black-1">
                <span className="text-pink-1 text-base block font-normal mb-2">
                  Welcome to
                </span>{" "}
                MyIEP Buddy
              </h2>
              <form className="space-y-7" onSubmit={submitForm}>
                {isRegister && (
                  <div>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="Full Name*"
                    />
                  </div>
                )}
                <div>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="Email*"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    type="password"
                    className="form-input"
                    placeholder="Password*"
                  />
                </div>
                {isRegister && (
                  <div>
                    <input
                      id="confirm_password"
                      type="password"
                      className="form-input"
                      placeholder="Confirm Password*"
                    />
                  </div>
                )}
                {isRegister && (
                  <div>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-black-2 text-sm font-normal">
                        &nbsp;I agree to the
                        <Link
                          href="/terms-of-service"
                          type="button"
                          className="text-blue-1 hover:underline"
                        >
                          Terms of Service&nbsp;
                        </Link>
                        and&nbsp;
                        <Link
                          href="/privacy-policy"
                          type="button"
                          className="text-blue-1 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>
                )}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-black-2 text-sm font-normal">
                          &nbsp;Remember me
                        </span>
                      </label>
                    </div>
                    <div>
                      <Link href="/forgot-password" className="text-blue-1">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                )}
                <button type="submit" className="btn-contained w-full mt-5">
                  {isRegister ? "Sign Up" : "Sign In"}
                </button>
              </form>
              {isRegister ? (
                <p className="text-base font-normal text-center my-3 text-black-1">
                  Already have an account?&nbsp;
                  <Link
                    href="/auth/login"
                    className=" text-blue-1 hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              ) : (
                <p className="text-base font-normal text-center my-3 text-black-1">
                  Dont have an account?&nbsp;
                  <Link
                    href="/auth/register"
                    className=" text-blue-1 hover:underline font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 md:flex items-center justify-end">
          <Image
            src={GeneratorImage}
            alt="man and woman with laptop and tablet"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;