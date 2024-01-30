import Layout from '@renderer/components/layout/Index'
import ListVault from '@renderer/pages/list_vault/Index'
import AddVault from '@renderer/pages/add_vault/Index'

import { createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListVault />
  },
  {
    path: '/add',
    element: <AddVault />
  }
])

function App(): JSX.Element {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto">
        <Layout router={router} />
      </div>
    </QueryClientProvider>
  )
}

export default App
