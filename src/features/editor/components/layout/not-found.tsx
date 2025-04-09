import { H2 } from '@/components/ui/typography'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <H2>Template not found!</H2>
      <Link to="/editor" className="flex">
        <ArrowLeft className="w-4" />
        {' '}
        Back to template list
      </Link>
    </div>
  )
}
