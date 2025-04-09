import { useEditor } from '@/features/editor/hooks/editor.hooks'
import { IImageSection } from '../../../../types/template.types'
import { AlignInput } from '../../inputs/align'
import { H4 } from '@/components/ui/typography'
import { WidthInput } from '../../inputs/width'
import { Input } from '@/components/ui/input'

interface Props {
  section: IImageSection
}

export function ImagePanel({ section }: Props) {
  const { updateSection } = useEditor()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Image</H4>
        <Input value={section.url} onChange={(event) => { updateSection(section.id, { url: event.target.value }) }} />
      </div>

      <div className="space-y-2">
        <H4>Align</H4>
        <AlignInput value={section.align} onValueChange={(value) => { updateSection(section.id, { align: value }) }} />
      </div>

      <div className="space-y-2">
        <H4>Width</H4>
        <WidthInput value={section.width} onValueChange={(value) => { updateSection(section.id, { width: value }) }} />
      </div>
    </div>
  )
}
