"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface SignOutPageProps {
  session: {
    user: {
      name?: string | null;
      email?: string | null;
    };
  };
}

const SignOutPage = ({ session }: SignOutPageProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <div className="bg-muted p-4 rounded-full">
        <LogOut className="h-10 w-10 text-destructive" />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Ready to Sign Out?
        </h2>
        <p className="text-muted-foreground mt-2">
          Logged in as <span className="font-medium">{session.user.name}</span>
        </p>
      </div>

      <Button
        variant="destructive"
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutPage;
