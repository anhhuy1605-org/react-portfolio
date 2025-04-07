import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function HeadingSection({ children }: Props) {
  return <h1>{children}</h1>
}
