import { nanoid } from 'nanoid'
import { Button } from '@/components/ui/button'
import { ModalInsert } from './modal-insert'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { AlignOption, SectionType } from '@/features/editor/constants'
import { ModalDelete } from './modal-delete'
import { IHeadingSection, IImageSection, IParagraphSection } from '@/features/editor/types/template.types'

const generateNewElement = (type: SectionType) => {
  if (type === SectionType.HEADING) {
    return {
      id: nanoid(),
      type: SectionType.HEADING,
      content: 'Lorem heading',
      align: AlignOption.LEFT,
      color: '#000000',
    } as IHeadingSection
  }
  if (type === SectionType.PARAGRAPH) {
    return {
      id: nanoid(),
      type: SectionType.PARAGRAPH,
      content: 'Lorem paragraph',
      align: AlignOption.LEFT,
      color: '#000000',
    } as IParagraphSection
  }
  if (type === SectionType.IMAGE) {
    return {
      id: nanoid(),
      type: SectionType.IMAGE,
      url: 'https://picsum.photos/id/100/300/200',
      align: AlignOption.CENTER,
      width: 50,
    } as IImageSection
  }
}

export function ElementPanel() {
  const selectedSectionId = useEditorStore(state => state.selectedSectionId)
  const setSelectedSectionId = useEditorStore(state => state.setSelectedSectionId)
  const setInsertBeforeSection = useEditorStore(state => state.setInsertBeforeSection)
  const setInsertAfterSection = useEditorStore(state => state.setInsertAfterSection)
  const setDeleteSection = useEditorStore(state => state.setDeleteSection)
  const setMoveUp = useEditorStore(state => state.setMoveUp)
  const setMoveDown = useEditorStore(state => state.setMoveDown)

  const onInsertBefore = (type: SectionType) => {
    const newElement = generateNewElement(type)
    setInsertBeforeSection(selectedSectionId, newElement!)
  }

  const onInsertAfter = (type: SectionType) => {
    const newElement = generateNewElement(type)
    setInsertAfterSection(selectedSectionId, newElement!)
  }

  const onDelete = () => {
    setSelectedSectionId(SectionType.GLOBAL)
    setDeleteSection(selectedSectionId)
  }

  const onMoveUp = () => {
    setMoveUp(selectedSectionId)
  }

  const onMoveDown = () => {
    setMoveDown(selectedSectionId)
  }

  return (
    <div className="flex flex-col space-y-2">
      <ModalInsert onInsert={onInsertBefore}>
        <Button>Insert before</Button>
      </ModalInsert>
      <ModalInsert onInsert={onInsertAfter}>
        <Button>Insert after</Button>
      </ModalInsert>
      <Button variant="outline" onClick={onMoveUp}>Move Up</Button>
      <Button variant="outline" onClick={onMoveDown}>Move Down</Button>
      <ModalDelete onDelete={onDelete} />
    </div>
  )
}
