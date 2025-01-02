import { auth } from "../auth"
 
export default async function UserName() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
      {session.user.name}
    </div>
  )
}