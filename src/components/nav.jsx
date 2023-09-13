let Boton = document.getElementById('btn')
        Boton.addEventListener('click',()=>{
        const menu = document.getElementById('menu')
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden')
            menu.classList.add('block')
        } else {
            menu.classList.remove('block')
            menu.classList.add('hidden')
        }
    })
function NavBar(){
    return (
        <nav className="h-24 w-48  flex justify-center items-center relative">
            <button id="btn" className="text-white text-3xl bg-slate-700 px-6 py-2">=</button>
            <div id="menu" className="bg-slate-700 h-24 absolute top-24 left-0 w-full hidden">
                <ul>
                    <li className="bg-slate-800 m-2 p-2"><a className="text-white" href="">Inicio</a></li>
                    <li className="bg-slate-800 m-2 p-2"><a className="text-white" href="">Contenido</a></li>
                    <li className="bg-slate-800 m-2 p-2"><a className="text-white" href="">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;