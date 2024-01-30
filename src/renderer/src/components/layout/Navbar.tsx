import { useNavigate } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className="flexflex-wrap p-4 border-b">
      <div className="flex space-x-5">
        <div className="text-sm space-x-2">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-violet-500 p-2 rounded hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => navigate(1)}
            className="hover:bg-violet-500 p-2 rounded hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <input
          type="search"
          className="p-2 w-1/2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500"
          placeholder="Search your vault ..."
        />

        <button
          onClick={() => navigate('/add')}
          className="flex w-1/5 justify-center p-2 text-sm bg-violet-500 rounded-lg text-white shadow-md hover:bg-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="">Add Item</span>
        </button>
      </div>
    </div>
  )
}
