import { useState } from 'react'
import { useEditor } from '../hooks/editor.hooks'
import { GenericSection } from './sections/generic'
import { createPortal } from 'react-dom'

export function Editor() {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const mountNode = iframeRef?.contentWindow?.document?.body

  const { sections } = useEditor()

  const rendered = sections.map(section => <GenericSection section={section} key={section.id}></GenericSection>)

  const onLoad = (event) => {
    const iframe = event.target as HTMLIFrameElement
    if (!iframe?.contentDocument) {
      return
    }

    setIframeRef(iframe)
  }

  return (
    <>
      <iframe className="w-full h-full" onLoad={onLoad}>
        {mountNode && createPortal(rendered, mountNode)}
      </iframe>
    </>
  )
}
