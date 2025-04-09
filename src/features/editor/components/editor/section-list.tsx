import { IFrame } from '@/components/ui/iframe'
import { GenericSection } from '../editor/generic'
import { useCallback, useState } from 'react'
import { useEditorStore } from '../../hooks/editor.store'

export function SectionList() {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
  const sections = useEditorStore(state => state.sections)
  const globalBackgroundColor = useEditorStore(state => state.globalSection?.backgroundColor)
  const rendered = sections.map(section => <GenericSection sectionId={section.id} key={section.id}></GenericSection>)

  const style = {
    padding: '16px',
    backgroundColor: globalBackgroundColor,
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
