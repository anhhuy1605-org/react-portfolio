import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="w-full border-b flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/editor" className="flex items-center gap-2">
          <img src="/vite.svg" className="h-6 w-6" />
          <span className="text-lg font-semibold">WebSite</span>
        </Link>

        <div id="header-actions-portal" />
      </div>
    </header>
  )
}
