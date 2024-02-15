interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <div className="mx-auto max-w-[1000px] px-7 py-4 md:flex">{children}</div>
}
