import Sidebar from './sidebar/Sidebar'

import { RouterProvider } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router'

export default function Index({ router }: { router: RemixRouter }): JSX.Element {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
