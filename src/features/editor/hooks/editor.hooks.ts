import { SectionType } from '../constants'
import { IEditorSection } from '../types/editor.types'
import { ITemplate } from '../types/template.types'
import { useEditorStore } from './editor.store'

export function useEditor() {
  // const {  } = useEditorStore()
  const sections = useEditorStore(state => state.sections)
  const globalSection = useEditorStore(state => state.globalSection)
  const selectedSection: IEditorSection = useEditorStore((state) => {
    if (state.selectedSectionId === SectionType.GLOBAL) {
      return state.globalSection
    }
    return state.sections.find(section => section.id === state.selectedSectionId)
  })
  const setInitialize = useEditorStore(state => state.setInitialize)
  const setSelectedSectionId = useEditorStore(state => state.setSelectedSectionId)
  const setUpdateSection = useEditorStore(state => state.setUpdateSection)

  const initialize = (template: ITemplate) => {
    const globalConfig = { ...template.configuration, id: SectionType.GLOBAL, type: SectionType.GLOBAL }
    setInitialize(template.sections, globalConfig)
  }

  const selectSection = (section: IEditorSection) => {
    setSelectedSectionId(section.id)
  }

  const updateSection = (sectionId: string, newSectionData: Omit<IEditorSection, 'id'>) => {
    setUpdateSection(sectionId, newSectionData)
  }

  return {
    sections,
    globalSection,
    selectedSection,
    initialize,
    selectSection,
    updateSection,
  }
}
