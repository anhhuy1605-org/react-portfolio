import { Card } from '@/components/ui/card'
import { useEditor } from '../hooks/editor.hooks'

import { SectionList } from './editor/section-list'

export function Editor() {
  const { globalSection } = useEditor()

  // Set background for iframe wrapper
  const style = {
    backgroundColor: globalSection?.backgroundColor,
  }
  return (
    <>
      <div className="w-[600px] h-[800px]">
        <Card className="w-full h-full p-0" style={style}>
          <SectionList />
        </Card>
      </div>
    </>
  )
}
