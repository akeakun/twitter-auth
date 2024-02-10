import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div
      style={{
        background: "#222",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1 className="text-center">Welcome Back!</h1>
      <p className="text-center">You are currently logged in.</p>
      <SignOutButton>
        <div className="flex justify-center p-4">
        <Button className="w-fit">Sign Out</Button>
        </div>
      </SignOutButton>
    </div>
  );
}
