import { AlignOption, SectionType } from '../constants'
import { ITemplate, ITemplateListItem } from '../types/template.types'

const sampleTemplates: ITemplate[] = [
  {
    id: '1',
    name: 'Template 1',
    cover: 'https://picsum.photos/id/237/500/200',
    sections: [
      {
        id: '11',
        type: SectionType.IMAGE,
        url: 'https://picsum.photos/id/111/300/200',
        align: AlignOption.CENTER,
        width: 50,
      },
      {
        id: '12',
        type: SectionType.HEADING,
        content: 'Lorem heading',
        align: AlignOption.LEFT,
        color: '#000000',
      },
      {
        id: '13',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
        align: AlignOption.LEFT,
        color: '#000000',
      },
    ],
    configuration: {
      backgroundColor: '#ffffff',
    },
  },
  {
    id: '2',
    name: 'Template 2',
    cover: 'https://picsum.photos/id/238/400/800',
    sections: [
      {
        id: '22',
        type: SectionType.HEADING,
        content: 'Lorem heading',
        align: AlignOption.LEFT,
        color: '#000000',
      },
      {
        id: '23',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
        align: AlignOption.LEFT,
        color: '#000000',
      },
      {
        id: '24',
        type: SectionType.HEADING,
        content: 'Lorem heading',
        align: AlignOption.LEFT,
        color: '#000000',
      },
      {
        id: '25',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
        align: AlignOption.LEFT,
        color: '#000000',
      },
    ],
    configuration: {
      backgroundColor: '#ffffff',
    },
  },
  {
    id: '3',
    name: 'Template 3',
    cover: 'https://picsum.photos/id/140/500',
    sections: [
      {
        id: '31',
        type: SectionType.IMAGE,
        url: 'https://picsum.photos/id/111/300/200',
        align: AlignOption.CENTER,
        width: 100,
      },
      {
        id: '32',
        type: SectionType.HEADING,
        content: 'Lorem heading',
        align: AlignOption.LEFT,
        color: '#7e22ce',
      },
      {
        id: '33',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
        align: AlignOption.LEFT,
        color: '#7e22ce',
      },
      {
        id: '34',
        type: SectionType.PARAGRAPH,
        content: 'Lorem paragraph',
        align: AlignOption.LEFT,
        color: '#7e22ce',
      },
    ],
    configuration: {
      backgroundColor: '#fdf2f8',
    },
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
