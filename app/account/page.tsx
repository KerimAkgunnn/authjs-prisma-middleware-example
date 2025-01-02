
import { SignOut } from "@/components/signOut";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/userAvatar";
import UserName from "@/components/userName";
import Link from "next/link";
export default  function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen space-x-2 ">
     <UserAvatar />
     <UserName/>
     <SignOut/>
     <Link href="/">
     <Button  >Go to main page</Button>
     </Link>
    </div>
  );
}
