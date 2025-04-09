import { create } from 'zustand'
import { IGlobalSection, IHeadingSection, IImageSection, IParagraphSection, ISection } from '../types/template.types'
import { SectionType } from '../constants'

interface EditorState {
  sections: ISection[]
  globalSection: IGlobalSection | null
  selectedSectionId: string
}

interface EditorActions {
  setInitialize: (sections: ISection[], globalSection: IGlobalSection) => void
  setInsertBeforeSection: (sectionId: string, newSection: ISection) => void
  setInsertAfterSection: (sectionId: string, newSection: ISection) => void
  setUpdateSection: (sectionId: string, newSectionData: Partial<ISection>) => void
  setUpdateGlobalSection: (newGlobalSectionData: Partial<IGlobalSection>) => void
  setDeleteSection: (sectionId: string) => void
  setSelectedSectionId: (sectionId: string) => void
  setMoveUp: (sectionId: string) => void
  setMoveDown: (sectionId: string) => void
}

// TODO: refactor actions
export const useEditorStore = create<EditorState & EditorActions>(set => ({
  sections: [],
  globalSection: null,
  selectedSectionId: SectionType.GLOBAL,

  setInitialize: (sections, globalSection) => set(() => ({
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
    const section = newSections[index]

    if (section.type === SectionType.IMAGE) {
      newSections[index] = { ...section, ...newSectionData } as IImageSection
    } else if (section.type === SectionType.PARAGRAPH) {
      newSections[index] = { ...section, ...newSectionData } as IParagraphSection
    } else {
      newSections[index] = { ...section, ...newSectionData } as IHeadingSection
    }

    return {
      sections: newSections,
    }
  }),

  setUpdateGlobalSection: newGlobalSectionData => set(state => ({
    globalSection: {
      ...state.globalSection,
      ...newGlobalSectionData,
    } as IGlobalSection,
  })),

  setDeleteSection: sectionId => set((state) => {
    const newSections = state.sections.filter(section => section.id !== sectionId)
    return {
      sections: newSections,
    }
  }),

  setSelectedSectionId: sectionId => set(() => ({ selectedSectionId: sectionId })),

  setMoveUp: sectionId => set((state) => {
    const index = state.sections.findIndex(section => section.id === sectionId)

    if (index <= 0) return state

    const newSections = [...state.sections]

    const temp = newSections[index]
    newSections[index] = newSections[index - 1]
    newSections[index - 1] = temp

    return {
      sections: newSections,
    }
  }),

  setMoveDown: sectionId => set((state) => {
    const index = state.sections.findIndex(section => section.id === sectionId)

    if (index === -1 || index >= state.sections.length - 1) return state

    const newSections = [...state.sections]

    const temp = newSections[index]
    newSections[index] = newSections[index + 1]
    newSections[index + 1] = temp

    return {
      sections: newSections,
    }
  }),
}))
