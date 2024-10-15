import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_species')({
  component: Species,
})
export default function Species() {
  return (
    <div>
      Species layout
      <p>This is the Species layout.</p>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
