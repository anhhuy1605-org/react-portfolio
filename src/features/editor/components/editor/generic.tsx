import { SectionType } from '../../constants'
import { useEditorStore } from '../../hooks/editor.store'
import { ISection } from '../../types/template.types'
import { HeadingSection } from './sections/heading/heading'
import { ImageSection } from './sections/image/image'
import { ParagraphSection } from './sections/paragraph/paragraph'

interface Props {
  sectionId: string
}

// TODO: add inline editor
function getComponent(section: ISection) {
  if (section.type === SectionType.HEADING) {
    return (
      <HeadingSection sectionId={section.id}>
        {section.content}
      </HeadingSection>
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphSection sectionId={section.id}>
        {section.content}
      </ParagraphSection>
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImageSection sectionId={section.id} />
    )
  }
}

export function GenericSection({ sectionId }: Props) {
  const section = useEditorStore((state) => {
    return state.sections.find(section => section.id === sectionId)
  })
  const setSelectedSectionId = useEditorStore(state => state.setSelectedSectionId)
  const onClick = () => {
    setSelectedSectionId(sectionId)
  }
  const component = getComponent(section!)
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      {component}
    </div>
  )
}
