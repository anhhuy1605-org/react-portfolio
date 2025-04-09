import { IFrame } from '@/components/ui/iframe'
import { Ref, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { tidyHTML } from '../../lib/utils'
import { GenericReadonlySection } from './generic-readonly'
import { useEditorStore } from '../../hooks/editor.store'

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
  const sections = useEditorStore(state => state.sections)
  const globalBackgroundColor = useEditorStore(state => state.globalSection?.backgroundColor)
  const list = sections.map(section => <GenericReadonlySection sectionId={section.id} key={section.id}></GenericReadonlySection>)
  const htmlContent = iframeRef?.contentWindow?.document?.documentElement?.outerHTML

  const style = {
    padding: '16px',
    backgroundColor: globalBackgroundColor,
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
