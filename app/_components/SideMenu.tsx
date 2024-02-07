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
    <aside className="col-start-1 col-end-4 row-start-1 row-end-auto max-md:hidden">
      <ul className="flex flex-col gap-1 pb-5">
        {globalNavMenu.map((menu) => (
          <li key={menu.label}>
            <Link
              href={menu.route}
              className={`block w-full rounded-lg px-4 py-3 hover:text-primary ${pathname === menu.route ? 'bg-primary/70 hover:text-foreground' : ''}`}
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
