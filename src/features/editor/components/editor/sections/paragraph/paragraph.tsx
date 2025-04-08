import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ParagraphSection({ children }: Props) {
  return <p>{children}</p>
}
