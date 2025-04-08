import { Card } from '@/components/ui/card'
import { useEditor } from '../hooks/editor.hooks'
import { GenericSection } from './editor/generic'
import { IFrame } from '@/components/ui/iframe'

export function Editor() {
  const { sections } = useEditor()

  const rendered = sections.map(section => <GenericSection section={section} key={section.id}></GenericSection>)

  return (
    <>
      <div className="w-[600px] h-[800px]">
        <Card className="w-full h-full px-8 py-4">
          <IFrame>
            {rendered}
          </IFrame>
        </Card>
      </div>
    </>
  )
}
