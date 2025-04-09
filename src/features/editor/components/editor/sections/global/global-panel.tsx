import { H4 } from '@/components/ui/typography'
import { useEditor } from '@/features/editor/hooks/editor.hooks'
import { ColorInput } from '../../inputs/color'
import { IGlobalSection } from '@/features/editor/types/template.types'

interface Props {
  section: IGlobalSection
}

export function GlobalPanel({ section }: Props) {
  const { updateGlobalSection } = useEditor()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <H4>Background color</H4>
        <ColorInput value={section.backgroundColor} onValueChange={(value) => { updateGlobalSection({ backgroundColor: value }) }} />
      </div>
    </div>
  )
}
