"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/route";

import { Button } from "../ui/button";

// Update the import path to the correct relative location, for example:

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-2 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // throw new Error("Sign in not implemented yet");
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        // redirect: false,
      });
    } catch (error) {
      toast.error("Sign in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured while signing in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
