import { useShallow } from 'zustand/shallow'
import { IHeadingSection } from '../../../../types/template.types'
import { AlignInput } from '../../inputs/align'
import { H4 } from '@/components/ui/typography'
import { ColorInput } from '../../inputs/color'
import { Input } from '@/components/ui/input'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { AlignOption } from '@/features/editor/constants'

export function HeadingPanel() {
  const selectedSectionId = useEditorStore(state => state.selectedSectionId)
  const [content, align, color] = useEditorStore(useShallow((state) => {
    const section = state.sections.find(section => section.id === state.selectedSectionId) as IHeadingSection
    return [section?.content, section?.align, section?.color]
  }))
  const setUpdateSection = useEditorStore(state => state.setUpdateSection)

  const updateContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateSection(selectedSectionId, { content: event.target.value })
  }
  const updateAlign = (value: AlignOption) => {
    setUpdateSection(selectedSectionId, { align: value })
  }
  const updateColor = (value: string) => {
    setUpdateSection(selectedSectionId, { color: value })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Content</H4>
        <Input value={content} onChange={updateContent} />
      </div>

      <div className="space-y-2">
        <H4>Align</H4>
        <AlignInput value={align} onValueChange={updateAlign} />
      </div>

      <div className="space-y-2">
        <H4>Color</H4>
        <ColorInput value={color} onValueChange={updateColor} />
      </div>
    </div>
  )
}
