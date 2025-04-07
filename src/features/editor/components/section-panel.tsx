import { useEditor } from '../hooks/editor.hooks'

export function SectionPanel() {
  const { selectedSection } = useEditor()

  return (
    <div>{JSON.stringify(selectedSection)}</div>
  )
}
