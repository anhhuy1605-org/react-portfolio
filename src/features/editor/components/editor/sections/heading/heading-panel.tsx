import { useEditor } from '@/features/editor/hooks/editor.hooks'
import { IHeadingSection } from '../../../../types/template.types'
import { AlignInput } from '../../inputs/align'
import { H4 } from '@/components/ui/typography'
import { ColorInput } from '../../inputs/color'
import { Input } from '@/components/ui/input'

interface Props {
  section: IHeadingSection
}

export function HeadingPanel({ section }: Props) {
  const { updateSection } = useEditor()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Content</H4>
        <Input value={section.content} onChange={(event) => { updateSection(section.id, { content: event.target.value }) }} />
      </div>

      <div className="space-y-2">
        <H4>Align</H4>
        <AlignInput value={section.align} onValueChange={(value) => { updateSection(section.id, { align: value }) }} />
      </div>

      <div className="space-y-2">
        <H4>Color</H4>
        <ColorInput value={section.color} onValueChange={(value) => { updateSection(section.id, { color: value }) }} />
      </div>
    </div>
  )
}
