import VaultItem from './VaultItem'

const appName = ['Amazon', 'Disney Plus', 'Netflix', 'Github']

export default function SubMenu(): JSX.Element {
  return (
    <div className="h-screen py-8 overflow-y-auto p-2 bg-white border-r">
      {appName.map((value, key) => (
        <VaultItem appName={value} key={key} username="titanabrian@fortisfortuna.dev" />
      ))}
    </div>
  )
}
