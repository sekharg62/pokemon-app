import { createFileRoute } from '@tanstack/react-router'

// Ensure this path exists in your `FileRoutesByPath` declaration
export const Route = createFileRoute('/_layout1/user')({
  component: User,
})

export default function User() {
  return <div>user route</div>
}

