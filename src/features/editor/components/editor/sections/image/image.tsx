import { AlignOption } from '@/features/editor/constants'
import { useEditorStore } from '@/features/editor/hooks/editor.store'
import { IImageSection } from '@/features/editor/types/template.types'
import { useShallow } from 'zustand/shallow'

interface Props {
  sectionId: string
}

export function ImageSection({ sectionId }: Props) {
  const [url, align, width] = useEditorStore(useShallow((state) => {
    const currentSection = state.sections.find(section => section.id === sectionId) as IImageSection
    return [currentSection?.url, currentSection?.align, currentSection?.width]
  }))

  const containerStyle = {
    display: 'flex',
    justifyContent: align === AlignOption.LEFT ? 'flex-start' : align === AlignOption.CENTER ? 'center' : 'flex-end',
    width: '100%',
  }

  const imgStyle = {
    width: width ? `${width}%` : '50%',
  }

  return (
    <div style={containerStyle}>
      <img src={url} style={imgStyle} />
    </div>
  )
}
