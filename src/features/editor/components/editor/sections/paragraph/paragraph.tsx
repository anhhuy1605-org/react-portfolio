import { IParagraphSection } from '@/features/editor/types/template.types'
import { ReactNode } from 'react'

interface Props {
  section: IParagraphSection
  children?: ReactNode
}

export function ParagraphSection({ children, section }: Props) {
  const content = children ?? section.content
  return <p>{content}</p>
}
