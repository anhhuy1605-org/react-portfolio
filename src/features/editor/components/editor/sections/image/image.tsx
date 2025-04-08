import { AlignOption } from '@/features/editor/constants'
import { IImageSection } from '@/features/editor/types/template.types'

interface Props {
  section: IImageSection
}

export function ImageSection({ section }: Props) {
  const containerStyle = {
    display: 'flex',
    justifyContent: section.align === AlignOption.LEFT ? 'flex-start' : section.align === AlignOption.CENTER ? 'center' : 'flex-end',
    width: '100%',
  }

  const imgStyle = {
    width: section.width ? `${section.width}%` : '50%',
  }

  return (
    <div style={containerStyle}>
      <img src={section.url} style={imgStyle} />
    </div>
  )
}
