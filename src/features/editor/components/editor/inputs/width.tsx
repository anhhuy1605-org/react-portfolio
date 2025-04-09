import { Slider } from '@/components/ui/slider'

interface Props {
  value: number
  onValueChange: (value: number) => void
}

export function WidthInput({ value, onValueChange }: Props) {
  const sliderOnValueChange = (value: number[]) => onValueChange(value[0])
  return (
    <Slider
      value={[value]}
      onValueChange={sliderOnValueChange}
      min={10}
      max={100}
      step={1}
    />
  )
}
