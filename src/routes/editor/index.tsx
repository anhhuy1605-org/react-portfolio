import { H2 } from '@/components/ui/typography'
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
    <div className="w-full h-full flex justify-center items-center p-4 md:p-12 xl:p-24">
      <div className="container flex flex-col gap-4 items-center">
        <H2 className="text-center">Choose a template to start</H2>
        <TemplateList templates={templates} />
      </div>
    </div>
  )
}
