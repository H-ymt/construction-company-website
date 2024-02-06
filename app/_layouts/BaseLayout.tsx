interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="mx-auto max-w-[1000px] grid-cols-12 px-7 py-4 md:grid">
      {children}
    </div>
  )
}
