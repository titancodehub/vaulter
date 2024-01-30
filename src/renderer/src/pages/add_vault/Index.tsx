import Content from '@renderer/components/layout/Content'
export default function AddPassowrd(): JSX.Element {
  return (
    <Content>
      <div className="h-screen p-10">
        <h2 className="text-center prose">Add New Vault</h2>
        <form className="sm:mx-auto md:mx-auto lg:mx-1 lg:w-1/3 sm:w-2/3 md:w-2/3">
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Vault Name
            </label>
            <input
              type="text"
              id="username-success"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Alright!</span> Username available!
            </p>
          </div>
          <div>
            <label
              htmlFor="username-error"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              Your name
            </label>
            <input
              type="text"
              id="username-error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Bonnie Green"
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
            </p>
          </div>
        </form>
      </div>
    </Content>
  )
}
