import { useEditor } from '../hooks/editor.hooks'
import { GenericPanel } from './editor/generic-panel'

export function SectionPanel() {
  const { selectedSection } = useEditor()

  return (
    <>
      { selectedSection && <GenericPanel section={selectedSection} /> }
    </>
  )
}
