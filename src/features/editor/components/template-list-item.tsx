import { Card, CardFooter } from '@/components/ui/card'
import { ITemplateListItem } from '../types'
import { Link } from '@tanstack/react-router'

interface Props {
  template: ITemplateListItem
}

export function TemplateListItem({ template }: Props) {
  return (
    <Link to="/editor/$templateId" params={{ templateId: template.id }} className="w-full">
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img src={template.cover || '/placeholder.svg'} alt={template.name} className="object-cover transition-transform hover:scale-105 duration-500" />
        </div>
        <CardFooter className="flex flex-col items-start p-4">
          <h3 className="text-lg font-medium">{template.name}</h3>
        </CardFooter>
      </Card>
    </Link>
  )
}
