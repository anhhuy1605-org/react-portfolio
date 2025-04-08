import { Editor } from '@/features/editor/components/editor'
import { NotFound } from '@/features/editor/components/layout/not-found'
import { SectionPanel } from '@/features/editor/components/section-panel'
import { useEditor } from '@/features/editor/hooks/editor.hooks'
import { fetchTemplate } from '@/features/editor/lib/api'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { useEffect } from 'react'

const fetchTemplateOptions = (id: string) => queryOptions({
  queryKey: ['templates', id],
  queryFn: () => fetchTemplate(id),
})

export const Route = createFileRoute('/editor/$templateId')({
  loader: async ({ context, params }) => {
    const queryClient = context.queryClient
    try {
      await queryClient.ensureQueryData(fetchTemplateOptions(params.templateId))
    } catch (error) {
      throw notFound()
    }
  },
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  const { templateId } = Route.useParams()
  const { data: template } = useSuspenseQuery(fetchTemplateOptions(templateId))

  const { initialize } = useEditor()

  useEffect(() => {
    initialize(template)
  }, [template])

  return (
    <div className="flex h-full">
      <div className="w-2/3 flex justify-center items-center">
        <Editor />
      </div>
      <div className="w-1/3 bg-white shadow-md">
        <SectionPanel />
      </div>
    </div>
  )
}
