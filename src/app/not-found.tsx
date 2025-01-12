import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center lg:pb-[10vh]">
      <h1 className="font-display text-8xl font-bold text-primary">404</h1>
      <h2 className="mb-8 mt-4 text-2xl tracking-wider">
        Oops! This page does not exist.
      </h2>
      <Link href="/" className="button">
        Go to home page
      </Link>
    </div>
  )
}
