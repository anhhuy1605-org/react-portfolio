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
      <HeadingSection>
        {section.content}
      </HeadingSection>
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphSection>
        {section.content}
      </ParagraphSection>
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImageSection url={section.url} />
    )
  }

  return null
}

export function GenericSection({ section }: Props) {
  const component = getComponent(section)

  return (
    <div>
      {component}
    </div>
  )
}
