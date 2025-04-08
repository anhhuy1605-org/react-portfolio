import { IFrame } from '@/components/ui/iframe'
import { useEditor } from '../../hooks/editor.hooks'
import { GenericSection } from '../editor/generic'
import { useCallback, useState } from 'react'

export function SectionList() {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const { sections, globalSection } = useEditor()
  const rendered = sections.map(section => <GenericSection section={section} key={section.id}></GenericSection>)

  const style = {
    padding: '16px',
    backgroundColor: globalSection?.backgroundColor,
  }

  const onIframeRef = useCallback((iframe: HTMLIFrameElement | null) => {
    if (!iframeRef) {
      setIframeRef(iframe)
    }
  }, [])

  return (
    <IFrame onIframeRef={onIframeRef}>
      <div style={style}>
        {rendered}
      </div>
    </IFrame>
  )
}
