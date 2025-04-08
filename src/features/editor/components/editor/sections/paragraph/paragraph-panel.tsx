import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ParagraphPanel({ children }: Props) {
  return <p>{children}</p>
}
