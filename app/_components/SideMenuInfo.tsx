import { BookUser, Mail, PhoneCall } from 'lucide-react'

export default function SideMenuInfo() {
  return (
    <>
      <div className="mt-6 rounded-md border px-3 py-3">
        <h3 className="rounded-tpy-2 text-lg font-semibold">Contact</h3>
        <p className="text-sm text-muted-foreground">please contact us below.</p>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-2.5">
            <div>
              <span className="flex items-center gap-1">
                <BookUser size={14} strokeWidth={2} />
                Address
              </span>
              <span className="block pl-1 pt-1 text-sm text-muted-foreground">
                xxxx-xxxxxx, xxxx-1xxx-2xxx3x
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <PhoneCall size={14} strokeWidth={2} />
                Tel
              </span>
              <a
                href="tel:000-0000-0000"
                className="block pl-1 pt-1 text-sm text-primary underline"
              >
                000-0000-0000
              </a>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <Mail size={14} strokeWidth={2} />
                Email
              </span>
              <a
                href="mailto:xxxx@xxxx.jp"
                className="block pl-1 pt-1 text-sm text-primary underline"
              >
                xxxx5555@xxxx.jp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
