import { AlignOption, SectionType } from './constants'

interface BaseSection {
  id: string
  type: SectionType
}

interface ImageSection extends BaseSection {
  type: SectionType.IMAGE
  url: string
  backgroundColor: string
  align: AlignOption
  width: string
  alt?: string

}

interface ParagraphSection extends BaseSection {
  type: SectionType.PARAGRAPH
  content: string
  backgroundColor: string
  align: AlignOption
  fontSize: string
  fontWeight: string
  color: string
}

interface HeadingSection extends BaseSection {
  type: SectionType.HEADING
  content: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  backgroundColor: string
  align: AlignOption
  color: string
}

type Section = ImageSection | ParagraphSection | HeadingSection

interface Configuration {
  backgroundColor: string
}

export interface Template {
  id: string
  name: string
  cover: string
  sections: Section[]
  configuration: Configuration
}

export type TemplateListItem = Pick<Template, 'id' | 'name' | 'cover'>
