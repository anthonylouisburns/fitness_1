import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

export default function App() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();

  return (
    <div className="App">
      <li>
        <ul>{JSON.stringify(useConvexAuth())}</ul>
        <ul>{JSON.stringify(user?.emailAddresses[0].emailAddress)}</ul>
      </li>
     
    <SignInButton/>
      <UserButton/>
      {isAuthenticated ? "Logged in" : "Logged out or still loading"}
    </div>
  );
}