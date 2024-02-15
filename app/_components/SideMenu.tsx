'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SideMenuInfo from './SideMenuInfo'
import { globalNavMenu } from '@/constants'
import sideMenuImage from '@/public/image_sidelink.jpg'

export default function SideMenu() {
  const pathname = usePathname()

  return (
    <aside className="w-full max-w-72 max-lg:hidden">
      <ul className="flex flex-col gap-1 pb-5">
        {globalNavMenu.map((menu) => (
          <li key={menu.label}>
            <Link
              href={menu.route}
              className={`block w-full rounded-lg px-4 py-3 transition-all hover:bg-muted ${pathname === menu.route ? 'bg-primary/70 hover:bg-primary/70' : ''}`}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>

      <Image
        src={sideMenuImage}
        width="200"
        height="300"
        alt=""
        className="rounded-md backdrop-blur-[0.7px]"
        placeholder="blur"
      />

      <SideMenuInfo />
    </aside>
  )
}
