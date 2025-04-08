import { useEditor } from '@/features/editor/hooks/editor.hooks'
import { IImageSection } from '../../../../types/template.types'
import { AlignInput } from '../../inputs/align'

interface Props {
  section: IImageSection
}

export function ImagePanel({ section }: Props) {
  const { updateSection } = useEditor()

  return (
    <>
      <h3>Align</h3>
      <AlignInput value={section.align} onValueChange={(value) => { updateSection(section.id, { align: value }) }} />
    </>
  )
}
