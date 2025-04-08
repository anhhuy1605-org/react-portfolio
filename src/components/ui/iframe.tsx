import { ReactEventHandler, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  onIframeRef?: (iframe: HTMLIFrameElement | null) => void
}

export function IFrame({ children, onIframeRef }: Props) {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const mountNode = iframeRef?.contentWindow?.document?.body
  const setIframeRefIfNotExisted = (iframe: HTMLIFrameElement) => {
    if (iframe?.contentWindow?.document?.body && !isLoaded) {
      setIframeRef(iframe)
    }
  }

  // Firefox
  const onLoad: ReactEventHandler<HTMLIFrameElement> = (event) => {
    const iframe = event.target as HTMLIFrameElement
    if (!iframe?.contentWindow?.document?.body || isLoaded) {
      return
    }
    setIsLoaded(true)
    setIframeRef(iframe)
  }

  useEffect(() => {
    if (iframeRef) {
      if (onIframeRef) {
        onIframeRef(iframeRef)
      }
    }

    return () => {
      if (onIframeRef) {
        onIframeRef(null)
      }
    }
  }, [iframeRef])

  return (
    <>
      <iframe className="w-full h-full" ref={setIframeRefIfNotExisted} onLoad={onLoad}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </>
  )
}
