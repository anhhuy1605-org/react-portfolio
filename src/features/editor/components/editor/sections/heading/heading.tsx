import { AlignOption } from '@/features/editor/constants'
import { IHeadingSection } from '@/features/editor/types/template.types'
import { ReactNode } from 'react'

interface Props {
  section: IHeadingSection
  children?: ReactNode
}

export function HeadingSection({ children, section }: Props) {
  const content = children ?? section.content

  const containerStyle = {
    display: 'flex',
    justifyContent: section.align === AlignOption.LEFT ? 'flex-start' : section.align === AlignOption.CENTER ? 'center' : 'flex-end',
    color: section.color,
  }

  return (
    <div style={containerStyle}>
      <h2>{content}</h2>
    </div>
  )
}
