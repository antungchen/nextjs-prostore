"use client";

import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

// 提交按钮组件
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full py-4 px-2 h-4 justify-start"
      variant="ghost"
      type="submit"
      disabled={pending}
    >
      {pending ? "Signing out..." : "Sign Out"}
    </Button>
  );
}

const SignOutForm = () => {
  return (
    <form action={signOutUser} className="w-full">
      <SubmitButton />
    </form>
  );
};

export default SignOutForm;
