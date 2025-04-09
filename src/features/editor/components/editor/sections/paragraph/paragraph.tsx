import { AlignOption } from '@/features/editor/constants'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { IParagraphSection } from '@/features/editor/types/template.types'
import { ReactNode } from 'react'
import { useShallow } from 'zustand/shallow'

interface Props {
  sectionId: string
  children?: ReactNode
}

export function ParagraphSection({ children, sectionId }: Props) {
  const [content, align, color] = useEditorStore(useShallow((state) => {
    const currentSection = state.sections.find(section => section.id === sectionId) as IParagraphSection
    return [currentSection?.content, currentSection?.align, currentSection?.color]
  }))
  const renderContent = children ?? content

  const containerStyle = {
    display: 'flex',
    justifyContent: align === AlignOption.LEFT ? 'flex-start' : align === AlignOption.CENTER ? 'center' : 'flex-end',
    color: color,
  }

  return (
    <div style={containerStyle}>
      <p>{renderContent}</p>
    </div>
  )
}
