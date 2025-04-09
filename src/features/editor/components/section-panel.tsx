import { useEditor } from '../hooks/editor.hooks'
import { GenericPanel } from './editor/generic-panel'

export function SectionPanel() {
  const { selectedSection } = useEditor()

  return (
    <div className="px-6 py-4">
      { selectedSection && <GenericPanel section={selectedSection} /> }
    </div>
  )
}
