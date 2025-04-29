export default function Navbar() {

    return (
        <nav className="bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
            <div className="flex  transform transition duration-400 hover:scale-105">
                <span className="ml-4 text-xl font-semibold  flex-1">Anthonius Hendhy Wirawan</span>
            </div>
            <ul className="flex space-x-4 text-white text-xl">
                <a className="text-white hover:text-[#525869] hover:scale-105 w-32 flex-1" >Home</a>
                <a className="text-white hover:text-[#525869] hover:scale-105 w-32 flex-1" >About Me</a>
                <a className="text-white hover:text-[#525869] hover:scale-105 w-32 flex-1" >Contact Me</a>
            </ul>
        </nav>
    );
}
