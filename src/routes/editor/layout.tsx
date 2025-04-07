import { Header } from '@features/editor/components/layout/header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="grow-1">
        <Outlet />
      </main>
    </div>
  )
}
