import { SectionType } from '../../constants'
import { useEditorStore } from '../../hooks/editor.store'
import { GlobalPanel } from './sections/global/global-panel'
import { HeadingPanel } from './sections/heading/heading-panel'
import { ImagePanel } from './sections/image/image-panel'
import { ParagraphPanel } from './sections/paragraph/paragraph-panel'

const PANEL_MAP = {
  [SectionType.HEADING]: HeadingPanel,
  [SectionType.PARAGRAPH]: ParagraphPanel,
  [SectionType.IMAGE]: ImagePanel,
  [SectionType.GLOBAL]: GlobalPanel,
} as const

function getComponent(sectionType: SectionType | undefined) {
  if (!sectionType) {
    return <div />
  }

  const PanelComponent = PANEL_MAP[sectionType]
  return PanelComponent ? <PanelComponent /> : <div />
}

export function GenericPanel() {
  const selectedSectionType = useEditorStore((state) => {
    if (state.selectedSectionId === SectionType.GLOBAL) {
      return SectionType.GLOBAL
    }
    return state.sections.find(section => section.id === state.selectedSectionId)?.type
  })
  const component = getComponent(selectedSectionType)

  return (
    <>
      {component}
    </>
  )
}
