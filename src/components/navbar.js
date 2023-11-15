import logo from '../images/logo.svg'
import menuOpen from '../images/icon-menu.svg'

const navigation = [
    { name: "Home", href: "#"},
    { name: "New", href: "#"},
    { name: "Popular", href: "#"},
    { name: "Trending", href: "#"},
    { name: "Categories", href: "#"}
];

export default function Navbar({openmenu}) {
    // const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className="grid grid-cols-2 items-center font-inter text-secondary-drblue py-10">
            <div className="col-span-1"><img src={logo} alt="logo" /></div>
            <div className="col-span-1 justify-self-end space-x-7 hidden md:block">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="hover:text-primary-red transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="col-span-1 justify-self-end space-x-7 md:hidden hover:cursor-pointer"><img src={menuOpen} alt='menu' onClick={openmenu} /></div>
        </div>
    )  
}