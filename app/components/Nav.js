import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex gap-8 items-center">
          <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-500">
            Vibe App
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}