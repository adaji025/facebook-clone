import React from 'react'
import { useSession } from 'next-auth/react'
import {
    
    ShoppingBagIcon,
    UserGroupIcon

} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    ChevronDownIcon,
    UserIcon
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
    // const [session, loading] = useSession()
    const { data: session } = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src={session.user.image} title={session.user.name} />
        <SidebarRow Icon={UserIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Group" />
        <SidebarRow Icon={ShoppingBagIcon} title="Markeplace" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalendarIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar  