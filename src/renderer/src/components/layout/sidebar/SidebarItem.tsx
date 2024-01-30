import { SidebarItemProps } from '@renderer/components/interface/sidebar'

export default function SidebarItem({ icon, name }: SidebarItemProps): JSX.Element {
  return (
    <a
      href="#"
      className="p-1.5 w-full  transition-colors duration-200 rounded-sm flex text-white hover:text-black hover:bg-yellow-400"
    >
      <img src={icon} className="object-scale-down w-30 h-30" />
      <span className="ml-1 text-left"> {name || 'Menu Name'}</span>
    </a>
  )
}
