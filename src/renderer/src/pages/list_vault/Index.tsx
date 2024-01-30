import VaultItem from './VaultItem'
import Content from '@renderer/components/layout/Content'
import { useQuery } from '@tanstack/react-query'
import { PasswordVault } from '@main/model/password_vault'

const getVaults = async (): Promise<PasswordVault[]> => {
  return window.api.getVaults()
}

export default function ListVault(): JSX.Element {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getVaults'],
    queryFn: getVaults
  })

  if (isLoading) {
    console.log('Loading')
  }

  if (error) {
    console.log('Error')
  }

  return (
    <Content>
      <div className="flex">
        <div className="lg:w-1/3 sm:w-1/2">
          <div className="h-screen py-8 overflow-y-auto p-2 bg-white border-r">
            {data?.map((v, key) => {
              return <VaultItem appName={v.name} key={key} username={v.username} />
            })}
          </div>
        </div>
      </div>
    </Content>
  )
}
