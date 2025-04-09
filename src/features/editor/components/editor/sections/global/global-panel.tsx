import { H4 } from '@/components/ui/typography'
import { ColorInput } from '../../inputs/color'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { useCallback } from 'react'

export function GlobalPanel() {
  const backgroundColor = useEditorStore(state => state.globalSection?.backgroundColor)!
  const setUpdateGlobalSection = useEditorStore(state => state.setUpdateGlobalSection)

  const updateBackgroundColor = useCallback((value: string) => {
    setUpdateGlobalSection({ backgroundColor: value })
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Background color</H4>
        <ColorInput value={backgroundColor} onValueChange={updateBackgroundColor} />
      </div>
    </div>
  )
}
