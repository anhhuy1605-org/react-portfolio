import { IFrame } from '@/components/ui/iframe'
import { useEditor } from '../../hooks/editor.hooks'
import { Ref, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { tidyHTML } from '../../lib/utils'
import { GenericReadonlySection } from './generic-readonly'

export interface Handle {
  getHTMLContent(): string
}

interface Props {
  ref: Ref<Handle>
  onHtmlChange?: (html: string) => void
}

// TODO: combine with SectionList
export function SectionListReadOnly({ ref, onHtmlChange }: Props) {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const { sections, globalSection } = useEditor()
  const list = sections.map(section => <GenericReadonlySection section={section} key={section.id}></GenericReadonlySection>)
  const htmlContent = iframeRef?.contentWindow?.document?.documentElement?.outerHTML

  const style = {
    padding: '16px',
    backgroundColor: globalSection?.backgroundColor,
  }

  useImperativeHandle(ref, () => ({
    getHTMLContent() {
      return tidyHTML(iframeRef?.contentWindow?.document?.documentElement?.outerHTML ?? '')
    },
  }), [iframeRef])

  useEffect(() => {
    if (onHtmlChange) {
      onHtmlChange(tidyHTML(htmlContent ?? ''))
    }
  }, [htmlContent])

  const onIframeRef = useCallback((iframe: HTMLIFrameElement | null) => {
    if (!iframeRef) {
      setIframeRef(iframe)
    }
  }, [])

  return (
    <IFrame onIframeRef={onIframeRef}>
      <div style={style}>
        {list}
      </div>
    </IFrame>
  )
}
