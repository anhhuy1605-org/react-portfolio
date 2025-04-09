import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ChangeEvent } from 'react'

const colors = [
  '#ffffff', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#374151', '#000000', // gray
  '#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', // red
  '#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', // orange
  '#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', // yellow
  '#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', // green
  '#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', // blue
  '#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', // purple
  '#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', // pink
]

interface ColorDisplayProps {
  size?: string
  value: string
  isActive?: boolean
  onSelect?: (value: string) => void
}

function ColorDisplay({ size, value, isActive = false, onSelect }: ColorDisplayProps) {
  const style = {
    backgroundColor: value,
  }

  const onClick = () => onSelect && onSelect(value)

  return (
    <div
      className={cn(
        'border border-gray-400 cursor-pointer rounded-full',
        isActive && 'border-blue-500',
        size === 'sm' ? 'w-4 h-4' : 'w-8 h-8',
      )}
      style={style}
      onClick={onClick}
    />
  )
}

interface Props {
  value: string
  onValueChange: (value: string) => void
}

function ColorGrid({ value, onValueChange }: Props) {
  const colorList = colors.map(color => (
    <ColorDisplay key={color} size="sm" value={color} isActive={color === value} onSelect={onValueChange} />
  ))

  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-2">
      {colorList}
    </div>
  )
}

export function ColorInput({ value, onValueChange }: Props) {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <ColorDisplay value={value} />
        </PopoverTrigger>
        <PopoverContent align="start">
          <div>
            <ColorGrid value={value} onValueChange={onValueChange} />

            <Input className="mt-4" value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value)} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
