import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Handle, SectionListReadOnly } from './editor/section-list-readonly'
import { highlightElement } from '@speed-highlight/core'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

export function ModalExport() {
  const htmlViewRef = useRef<HTMLPreElement>(null)
  const [htmlContent, setHtmlContent] = useState('')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlContent)
    toast('✅ Copied to clipboard!', {
      position: 'top-right',
    })
  }

  useEffect(() => {
    if (htmlViewRef.current) {
      highlightElement(htmlViewRef.current, 'html')
    }
  }, [htmlContent])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Export</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] max-h-[800px]">
        <DialogHeader>
          <DialogTitle>Export</DialogTitle>
        </DialogHeader>

        <div className="flex">
          <div className="w-1/2">
            <SectionListReadOnly onHtmlChange={setHtmlContent} />
          </div>
          <div className="w-1/2 overflow-auto max-h-[600px]">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/speed-highlight/core/dist/themes/dark.css" />
            <pre ref={htmlViewRef}>{htmlContent}</pre>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={copyToClipboard}>Copy HTML</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
