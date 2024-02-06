import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold">Hello</h1>
      <Link href="/">home</Link>
    </div>
  )
}
