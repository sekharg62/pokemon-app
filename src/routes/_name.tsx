import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_name')({
  component: Name,
})
export default function Name() {
  return (
    <div>
      name layout
      <div>
        <Outlet />
      </div>
    </div>
  )
}
