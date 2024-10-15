import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_abilities')({
  component: Abilities,
})

export default function Abilities() {
  return (
  <div>
    abilities layout
    <div>
      <Outlet/>
    </div>
    </div>
)
}
