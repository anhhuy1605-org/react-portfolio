import { AlignOption } from '@/features/editor/constants'
import { IParagraphSection } from '@/features/editor/types/template.types'
import { ReactNode } from 'react'

interface Props {
  section: IParagraphSection
  children?: ReactNode
}

export function ParagraphSection({ children, section }: Props) {
  const content = children ?? section.content

  const containerStyle = {
    display: 'flex',
    justifyContent: section.align === AlignOption.LEFT ? 'flex-start' : section.align === AlignOption.CENTER ? 'center' : 'flex-end',
    color: section.color,
  }

  return (
    <div style={containerStyle}>
      <p>{content}</p>
    </div>
  )
}
