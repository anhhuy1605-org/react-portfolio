import { NotFound } from '@/components/layout/not-found'
import { Toaster } from '@/components/ui/sonner'
import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <Outlet />

      <Toaster />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
})
