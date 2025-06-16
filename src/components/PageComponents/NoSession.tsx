import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NoSession = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground space-y-6">
      <div className="bg-muted p-4 rounded-full">
        <LogIn className="h-10 w-10 text-primary" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          You&apos;re not signed in
        </h2>
        <p className="mt-1 text-sm">
          Please log in to access this page and manage your account.
        </p>
      </div>
      <Link href="/sign-in">
        <Button className="px-6">Sign In</Button>
      </Link>
    </div>
  );
};

export default NoSession;
