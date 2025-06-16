"use client";
import NoSession from "@/components/PageComponents/NoSession";
import SignOutPage from "@/components/PageComponents/Session";

import { authClient } from "@/lib/auth-client";

export default function HomeView() {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <NoSession />;
  }

  return <SignOutPage session={session} />;
}
