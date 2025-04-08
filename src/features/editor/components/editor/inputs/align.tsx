import { AlignOption } from '@/features/editor/constants'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useCallback } from 'react'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'

interface Props {
  value: AlignOption
  onValueChange: (value: AlignOption) => void
}

export function AlignInput({ value, onValueChange }: Props) {
  const toggleOnValueChange = useCallback((value: AlignOption) => {
    if (value) {
      onValueChange(value)
    }
  }, [])
  return (
    <div className="flex gap-2">
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={toggleOnValueChange}
      >
        <ToggleGroupItem value={AlignOption.LEFT}>
          <AlignLeft className="h-8 w-8" />
        </ToggleGroupItem>
        <ToggleGroupItem value={AlignOption.CENTER}>
          <AlignCenter className="h-8 w-8" />
        </ToggleGroupItem>
        <ToggleGroupItem value={AlignOption.RIGHT}>
          <AlignRight className="h-8 w-8" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
