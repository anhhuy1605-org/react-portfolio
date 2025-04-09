import { H2 } from '@/components/ui/typography'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <H2>Encountered error!</H2>
      <Link to="/" className="flex">
        <ArrowLeft className="w-4" />
        {' '}
        Return
      </Link>
    </div>
  )
}
