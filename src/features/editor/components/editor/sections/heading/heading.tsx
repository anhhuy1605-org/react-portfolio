import { IHeadingSection } from '@/features/editor/types/template.types'
import { ReactNode } from 'react'

interface Props {
  section: IHeadingSection
  children?: ReactNode
}

export function HeadingSection({ section, children }: Props) {
  const content = children ?? section.content
  return (
    <h1 style={{ color: section.color }}>{content}</h1>
  )
}
