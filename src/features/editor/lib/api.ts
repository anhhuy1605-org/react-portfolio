import { AlignOption, SectionType } from '../constants'
import { ITemplate, ITemplateListItem } from '../types/template.types'

const sampleTemplates: ITemplate[] = [
  {
    id: '1',
    name: 'Template 1',
    cover: 'https://picsum.photos/500/200',
    sections: [
      {
        id: '1',
        type: SectionType.IMAGE,
        url: 'https://picsum.photos/300/200',
        align: AlignOption.CENTER,
      },
      {
        id: '2',
        type: SectionType.HEADING,
        content: 'Lorem heading',
      },
      {
        id: '3',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
      },
    ],
    configuration: {
      backgroundColor: '#000000',
    },
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

export async function fetchTemplates(): Promise<ITemplateListItem[]> {
  return sampleTemplates.map((template) => {
    const { id, name, cover } = template
    return { id, name, cover }
  })
}

export async function fetchTemplate(id: string): Promise<ITemplate> {
  const template = sampleTemplates.find(template => template.id === id)
  if (!template) {
    throw new Error('404')
  }
  return template
}
