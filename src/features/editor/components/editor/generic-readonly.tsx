import { SectionType } from '../../constants'
import { ISection } from '../../types/template.types'
import { HeadingSection } from './sections/heading/heading'
import { ImageSection } from './sections/image/image'
import { ParagraphSection } from './sections/paragraph/paragraph'

interface Props {
  section: ISection
}

function getComponent(section: ISection) {
  if (section.type === SectionType.HEADING) {
    return (
      <HeadingSection section={section} />
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphSection section={section} />
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImageSection section={section} />
    )
  }

  return null
}

export function GenericReadonlySection({ section }: Props) {
  const component = getComponent(section)

  return component
}
