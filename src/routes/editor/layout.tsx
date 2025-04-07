import { Header } from '@features/editor/components/layout/header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
