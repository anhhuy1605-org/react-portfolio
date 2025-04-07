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

type ISection = ImageSection | ParagraphSection | HeadingSection

interface IConfiguration {
  backgroundColor: string
}

export interface ITemplate {
  id: string
  name: string
  cover: string
  sections: ISection[]
  configuration: IConfiguration
}

export type ITemplateListItem = Pick<ITemplate, 'id' | 'name' | 'cover'>
