import { ITemplateListItem } from '../types'

const sampleTemplates: ITemplateListItem[] = [
  {
    id: '1',
    name: 'Template 1',
    cover: 'https://picsum.photos/500/200',
  },
  {
    id: '2',
    name: 'Template 2',
    cover: 'https://picsum.photos/400/800',
  },
  {
    id: '3',
    name: 'Template 3',
    cover: 'https://picsum.photos/500',
  },
]

export async function fetchTemplates() {
  return sampleTemplates
}
