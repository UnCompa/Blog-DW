import Nav from './../components/nav'
import Logo from './../assets/1.png'
function Header(){
    console.log(Logo);
    return (
        <header className="h-24 bg-slate-900 w-full flex justify-between">
                <img src={Logo} alt="" className='h-full w-48 object-cover'/>
            <Nav/>
        </header>
    )
}

export default Header;