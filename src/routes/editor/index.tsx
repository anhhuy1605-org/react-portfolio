import { TemplateList } from '@/features/editor/components/template-list'
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
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-4 items-center">
        <h1>Choose a template to start</h1>
        <TemplateList templates={templates} />
      </div>
    </div>
  )
}
