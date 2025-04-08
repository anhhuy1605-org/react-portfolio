import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
}

export function IFrame({ children }: Props) {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const mountNode = iframeRef?.contentWindow?.document?.body
  const setIframeRefIfNotExisted = (iframe: HTMLIFrameElement) => {
    if (iframe?.contentWindow?.document?.body && !isLoaded) {
      setIframeRef(iframe)
    }
  }

  const onLoad = (event) => {
    const iframe = event.target as HTMLIFrameElement
    if (!iframe?.contentWindow?.document?.body || isLoaded) {
      return
    }
    setIsLoaded(true)
    setIframeRef(iframe)
  }

  return (
    <>
      <iframe className="w-full h-full" ref={setIframeRefIfNotExisted} onLoad={onLoad}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </>
  )
}
