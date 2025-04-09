import { Card } from '@/components/ui/card'
import { SectionList } from './editor/section-list'
import { useEditorStore } from '../hooks/editor.store'

export function Editor() {
  const backgroundColor = useEditorStore(state => state.globalSection?.backgroundColor)

  // Set background for iframe wrapper
  const style = {
    backgroundColor,
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
