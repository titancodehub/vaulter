import Navbar from './Navbar'
export default function Content({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  )
}
