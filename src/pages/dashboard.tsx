import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"

export default function Dashboard() {
  const { user } = useContext(AuthContext)
  return (
    <section className="bg-shape2 flex items-center justify-center h-screen w-screen p-4">
      {user?.name}
    </section>
  )
}
