import { AlignOption } from '@/features/editor/constants'
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'

interface Props {
  value: AlignOption
  onValueChange: (value: AlignOption) => void
}

export function AlignInput({ value, onValueChange }: Props) {
  // TODO: icon
  return (
    <div className="flex gap-2">
      <ToggleGroup type="single" value={value} onValueChange={onValueChange}>
        <ToggleGroupItem value={AlignOption.LEFT}>Left</ToggleGroupItem>
        <ToggleGroupItem value={AlignOption.CENTER}>Center</ToggleGroupItem>
        <ToggleGroupItem value={AlignOption.RIGHT}>Right</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
