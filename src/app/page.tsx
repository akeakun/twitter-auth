import { Button } from "@/components/ui/button";
import { SignOutButton, currentUser, useUser } from "@clerk/nextjs";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Protected Route',
  description: 'This route is supposed to be protected and not accessible by anyone who is not loggged in.',
}
const Home = async () => {
  const user = await currentUser();

  return (
    <div
      style={{
        background: "#222",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1 className="text-center">Welcome {user?.username}&nbsp;!</h1>
      <p className="text-center">You are currently logged in.</p>
      <SignOutButton>
        <div className="flex justify-center p-4">
          <Button className="w-fit">Sign Out</Button>
        </div>
      </SignOutButton>
    </div>
  );
};

export default Home;
