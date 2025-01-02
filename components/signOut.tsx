import { signOut } from "@/auth"
import { Button } from "./ui/button"
 
export function SignOut() {
  return (
    <div className="">
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
    </div>
  )
}