import { create } from 'zustand'
import { IEditorSection } from '../types/editor.types'
import { IGlobalSection } from '../types/template.types'
import { SectionType } from '../constants'

interface EditorState {
  sections: IEditorSection[]
  globalSection: IGlobalSection | null
  selectedSectionId: string
}

interface EditorActions {
  setInitialize: (sections: IEditorSection[], globalSection: IGlobalSection) => void
  setInsertBeforeSection: (sectionId: string, newSection: IEditorSection) => void
  setInsertAfterSection: (sectionId: string, newSection: IEditorSection) => void
  setUpdateSection: (sectionId: string, newSectionData: Omit<IEditorSection, 'id'>) => void
  setUpdateGlobalSection: (newGlobalSectionData: Omit<IGlobalSection, 'id'>) => void
  setDeleteSection: (sectionId: string) => void
  setSelectedSectionId: (sectionId: string) => void
}

export const useEditorStore = create<EditorState & EditorActions>(set => ({
  sections: [],
  globalSection: null,
  selectedSectionId: SectionType.GLOBAL,

  setInitialize: (sections, globalSection) => set(state => ({
    sections,
    globalSection,
    selectedSectionId: SectionType.GLOBAL,
  })),

  setInsertBeforeSection: (sectionId, newSection) => set((state) => {
    const index = state.sections.findIndex(section => section.id === sectionId)
    if (index === -1) return state // Section not found

    const newSections = [...state.sections]
    newSections.splice(index, 0, newSection)

    return {
      sections: newSections,
    }
  }),

  setInsertAfterSection: (sectionId, newSection) => set((state) => {
    const index = state.sections.findIndex(section => section.id === sectionId)
    if (index === -1) return state // Section not found

    const newSections = [...state.sections]
    newSections.splice(index + 1, 0, newSection)

    return {
      sections: newSections,
    }
  }),

  setUpdateSection: (sectionId, newSectionData) => set((state) => {
    const index = state.sections.findIndex(section => section.id === sectionId)
    if (index === -1) return state // Section not found

    const newSections = [...state.sections]
    newSections[index] = {
      ...newSections[index],
      ...newSectionData,
    }

    return {
      sections: newSections,
    }
  }),

  setUpdateGlobalSection: newGlobalSectionData => set(state => ({
    globalSection: {
      ...state.globalSection,
      ...newGlobalSectionData,
    },
  })),

  setDeleteSection: sectionId => set((state) => {
    const newSections = state.sections.filter(section => section.id !== sectionId)
    return {
      sections: newSections,
    }
  }),

  setSelectedSectionId: sectionId => set(state => ({ selectedSectionId: sectionId })),
}))
