import { AlignOption, SectionType } from '../constants'

interface BaseSection {
  id: string
  type: SectionType
}

export interface IGlobalSection extends BaseSection {
  type: SectionType.GLOBAL
  backgroundColor: string
}

interface IImageSection extends BaseSection {
  type: SectionType.IMAGE
  url: string
  backgroundColor: string
  align: AlignOption
  width: string
  alt?: string
}

interface IParagraphSection extends BaseSection {
  type: SectionType.PARAGRAPH
  content: string
  backgroundColor: string
  align: AlignOption
  fontSize: string
  fontWeight: string
  color: string
}

interface IHeadingSection extends BaseSection {
  type: SectionType.HEADING
  content: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  backgroundColor: string
  align: AlignOption
  color: string
}

export type ISection = IImageSection | IParagraphSection | IHeadingSection

type IConfiguration = Pick<IGlobalSection, 'backgroundColor'>

export interface ITemplate {
  id: string
  name: string
  cover: string
  sections: ISection[]
  configuration: IConfiguration
}

export type ITemplateListItem = Pick<ITemplate, 'id' | 'name' | 'cover'>
