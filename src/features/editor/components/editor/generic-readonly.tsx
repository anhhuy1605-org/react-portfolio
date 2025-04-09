import { SectionType } from '../../constants'
import { useEditorStore } from '../../hooks/editor.store'
import { ISection } from '../../types/template.types'
import { HeadingSection } from './sections/heading/heading'
import { ImageSection } from './sections/image/image'
import { ParagraphSection } from './sections/paragraph/paragraph'

interface Props {
  sectionId: string
}

function getComponent(section: ISection) {
  if (section.type === SectionType.HEADING) {
    return (
      <HeadingSection sectionId={section.id} />
    )
  }

  if (section.type === SectionType.PARAGRAPH) {
    return (
      <ParagraphSection sectionId={section.id} />
    )
  }

  if (section.type === SectionType.IMAGE) {
    return (
      <ImageSection sectionId={section.id} />
    )
  }

  return null
}

export function GenericReadonlySection({ sectionId }: Props) {
  const section = useEditorStore((state) => {
    return state.sections.find(section => section.id === sectionId)
  })

  const component = getComponent(section!)
  return (
    <>
      {component}
    </>
  )
}
