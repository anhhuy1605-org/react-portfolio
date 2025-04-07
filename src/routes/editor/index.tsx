import { fetchTemplates } from '@/features/editor/lib/api'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

const fetchTemplatesOptions = queryOptions({
  queryKey: ['templates'],
  queryFn: () => fetchTemplates(),
})

export const Route = createFileRoute('/editor/')({
  loader: async ({ context }) => {
    const queryClient = context.queryClient
    await queryClient.ensureQueryData(fetchTemplatesOptions)
  },
  component: RouteComponent,
})

function RouteComponent() {
  // TODO: compare useLoaderData
  const { data: templates } = useSuspenseQuery(fetchTemplatesOptions)
  return (
    <div>
      Hello "/editor/"! sssss
    </div>
  )
}
