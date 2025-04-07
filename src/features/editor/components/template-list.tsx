import { ITemplateListItem } from '../types'
import { TemplateListItem } from './template-list-item'

interface Props {
  templates: ITemplateListItem[]
}

export function TemplateList({ templates }: Props) {
  const templateList = templates.map(template => <TemplateListItem key={template.id} template={template} />)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {templateList}
    </div>
  )
}
