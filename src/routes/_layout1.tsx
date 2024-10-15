import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1')({
  component: Layout1,
})
export default function Layout1() {
  return (
    <div>
      __laoyout1
      <div>
        <Outlet/>
      </div>

    </div>
  )
}
