import ProfileSelector from './ProfileSelector'
import SidebarItem from './SidebarItem'
import vaultIcon from '@renderer/assets/icons/home.svg'
import favouriteIcon from '@renderer/assets/icons/favourite.svg'
import { SidebarItemProps } from '@renderer/components/interface/sidebar'

const sidebarItemIcon: SidebarItemProps[] = [
  { icon: vaultIcon, name: 'All Items' },
  { icon: favouriteIcon, name: 'Favorites' }
]

export default function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col border-r p-2 items-center w-60 h-auto py-8 space-y-2 bg-violet-600">
      <ProfileSelector />
      {sidebarItemIcon.map((item, key) => (
        <SidebarItem key={key} icon={item.icon} name={item.name} />
      ))}
    </div>
  )
}
