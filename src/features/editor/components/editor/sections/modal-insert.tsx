import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SectionType } from '@/features/editor/constants'
import { ReactNode } from '@tanstack/react-router'
import { Heading, Image, LetterText } from 'lucide-react'
import { useState } from 'react'

interface Props {
  children: ReactNode
  onInsert: (type: SectionType) => void
}
export function ModalInsert({ children, onInsert }: Props) {
  const [open, setOpen] = useState(false)

  const onClick = (type: SectionType) => {
    onInsert(type)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] max-h-[200px]">
        <DialogHeader>
          <DialogTitle>Please select the element you want to insert</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 w-full">
          <Button variant="outline" onClick={() => onClick(SectionType.IMAGE)}>
            <Image />
          </Button>
          <Button variant="outline" onClick={() => onClick(SectionType.HEADING)}>
            <Heading />
          </Button>
          <Button variant="outline" onClick={() => onClick(SectionType.PARAGRAPH)}>
            <LetterText />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
