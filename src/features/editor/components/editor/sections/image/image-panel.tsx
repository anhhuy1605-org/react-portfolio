import { AlignInput } from '../../inputs/align'
import { H4 } from '@/components/ui/typography'
import { WidthInput } from '../../inputs/width'
import { Input } from '@/components/ui/input'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { IImageSection } from '@/features/editor/types/template.types'
import { AlignOption } from '@/features/editor/constants'
import { useCallback } from 'react'
import { useShallow } from 'zustand/shallow'

export function ImagePanel() {
  const selectedSectionId = useEditorStore(state => state.selectedSectionId)
  const [url, align, width] = useEditorStore(useShallow((state) => {
    const section = state.sections.find(section => section.id === state.selectedSectionId) as IImageSection
    return [section?.url, section?.align, section?.width]
  }))
  const setUpdateSection = useEditorStore(state => state.setUpdateSection)

  const updateUrl = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('asdasda')
    setUpdateSection(selectedSectionId, { url: event.target.value })
  }, [])
  const updateAlign = useCallback((value: AlignOption) => {
    console.log('asdasda')
    setUpdateSection(selectedSectionId, { align: value })
  }, [])
  const updateWidth = useCallback((value: number) => {
    console.log('asdasda')
    setUpdateSection(selectedSectionId, { width: value })
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Image</H4>
        <Input value={url} onChange={updateUrl} />
      </div>

      <div className="space-y-2">
        <H4>Align</H4>
        <AlignInput value={align} onValueChange={updateAlign} />
      </div>

      <div className="space-y-2">
        <H4>Width</H4>
        <WidthInput value={width} onValueChange={updateWidth} />
      </div>
    </div>
  )
}
