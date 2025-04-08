import { SectionType } from '../../constants'
import { useEditor } from '../../hooks/editor.hooks'
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
      <HeadingSection section={section}>
        {section.content}
      </HeadingSection>
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphSection section={section}>
        {section.content}
      </ParagraphSection>
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImageSection section={section} />
    )
  }
}

export function GenericSection({ section }: Props) {
  const component = getComponent(section)

  const { selectSection } = useEditor()
  return (
    <div onClick={() => selectSection(section)} style={{ cursor: 'pointer' }}>
      {component}
    </div>
  )
}
