import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'

interface Props {
  onDelete: () => void
}
export function ModalDelete({ onDelete }: Props) {
  const [open, setOpen] = useState(false)

  const onClickConfirm = () => {
    onDelete()
    setOpen(false)
  }
  const onClickCancel = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] max-h-[200px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this element?</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant="destructive" onClick={onClickConfirm}>Confirm</Button>
          <Button variant="outline" onClick={onClickCancel}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
