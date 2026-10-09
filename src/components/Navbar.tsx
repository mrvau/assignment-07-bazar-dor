import { Menu } from 'lucide-react'
const Navbar = () => {
  return (
    <nav>
      <div className="absolute top-4 left-2 flex md:hidden items-center justify-center border border-primary/70 text-primary/70 w-10 h-10 rounded-lg">
        <Menu />
      </div>
      <ul>
        
      </ul>
    </nav>
  )
}

export default Navbar