import { SectionType } from '../../constants'
import { ISection } from '../../types/template.types'
import { GlobalPanel } from './sections/global/global-panel'
import { HeadingPanel } from './sections/heading/heading-panel'
import { ImagePanel } from './sections/image/image-panel'
import { ParagraphPanel } from './sections/paragraph/paragraph-panel'

interface Props {
  section: ISection
}

function getComponent(section: ISection) {
  if (section.type === SectionType.HEADING) {
    return (
      <HeadingPanel section={section} />
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphPanel section={section} />
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImagePanel section={section} />
    )
  }

  if (section.type === SectionType.GLOBAL) {
    return (
      <GlobalPanel section={section} />
    )
  }
}

export function GenericPanel({ section }: Props) {
  const component = getComponent(section)

  return (
    <>
      {component}
    </>
  )
}
