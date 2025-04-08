import { SectionType } from '../../constants'
import { useEditor } from '../../hooks/editor.hooks'
import { ISection } from '../../types/template.types'
import { HeadingSection } from '../editor/sections/heading/heading-panel'
import { ImageSection } from '../editor/sections/image/image-panel'
import { ParagraphSection } from '../editor/sections/paragraph/paragraph-panel'

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
