import { AlignOption, SectionType } from '../constants'

interface BaseSection {
  id: string
  type: SectionType
}

export interface IGlobalSection extends BaseSection {
  type: SectionType.GLOBAL
  backgroundColor: string
}

export interface IImageSection extends BaseSection {
  type: SectionType.IMAGE
  url: string
  align: AlignOption
  width: number
}

export interface IParagraphSection extends BaseSection {
  type: SectionType.PARAGRAPH
  content: string
  align: AlignOption
  color: string
}

export interface IHeadingSection extends BaseSection {
  type: SectionType.HEADING
  content: string
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
