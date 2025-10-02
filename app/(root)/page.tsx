import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Home = async () => {
  const session = await auth();
  console.log("Session in Home page:", session);
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-500">
        Welcome to Next JS
      </h2>
      {session && (
        <div className="mt-4">
          <p className="mb-2">
            Welcome, {session.user?.name || session.user?.email}!
          </p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit" variant="outline">
              Sign Out
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
