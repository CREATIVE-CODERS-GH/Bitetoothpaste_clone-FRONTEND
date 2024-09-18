import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const Navbar = () => {
  return (
    <nav>
        <div>
            Bite
        </div>
        <div>
            <a href="#shop">SHOP</a>
            <a href="#about">ABOUT</a>
            <a href="#impact">OUR IMPACT</a>
        </div>
        <div>
            <a href="#account" >
            <UserIcon/>
            </a>
            <a href="#cart">
                <ShoppingBagIcon/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar