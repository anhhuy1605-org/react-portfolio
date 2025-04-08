import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function HeadingPanel({ children }: Props) {
  return <h1>{children}</h1>
}
