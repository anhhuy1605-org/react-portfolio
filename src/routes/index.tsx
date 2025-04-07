import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <div className="p-2 flex gap-2">
        <Link to="/editor" className="[&.active]:font-bold">
          Editor
        </Link>
      </div>
    </div>
  )
}
