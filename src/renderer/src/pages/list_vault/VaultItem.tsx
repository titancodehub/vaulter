import defaultImage from '@renderer/assets/icons/image-100.png'

import { useState } from 'react'

export default function VaultItem({
  appName,
  username
}: {
  appName: string
  username: string
}): JSX.Element {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center w-full px-5 py-2 transition-colors duration-20 gap-x-2 hover:bg-violet-500 focus:outline-none rounded-lg"
    >
      <img className="object-cover bg-yellow-400 w-8 h-8 rounded-md" src={defaultImage} alt="" />
      {!hover ? (
        <div className="text-left rtl:text-right">
          <h1 className="text-sm font-medium text-gray-700 capitalize">{appName}</h1>
          <p className="text-xs text-gray-500 ">{username}</p>
        </div>
      ) : (
        <div className="text-left rtl:text-right">
          <h1 className="text-sm font-medium text-white capitalize">{appName}</h1>
          <p className="text-xs text-gray-50 ">{username}</p>
        </div>
      )}
    </button>
  )
}
