import Link from "next/link";
import { auth } from "@/auth";
// import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";

import SignOutForm from "./sign-out";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="relative w-8 h-8 rounded-full
            ml-2 flex items-center justify-center bg-grey-200"
          >
            {firstInitial}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium leading-none">
              {session.user?.name}
            </div>
            <div className="text-sm text-muted-foreground leading-none">
              {session.user?.email}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="p-0 mb-1" asChild>
          <SignOutForm />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
