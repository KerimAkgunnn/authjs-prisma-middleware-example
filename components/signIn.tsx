
import { signIn } from "@/auth"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa"
 
export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/" })
      }}
    >
      <Button  type="submit" className="h-16 w-64 text-xl"><FaGithub/>Sign in using GitHub</Button>
    </form>
    </div>
  )
} 