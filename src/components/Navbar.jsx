import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
    <>
        {/* Navbar */ }
    < div className = "sticky top-0 left-0 flex w-full items-center justify-between border-b border-white/10 bg-sky-100 p-4 backdrop-blur-xl" >
            <div className="text-3xl font-bold">Yesubabu</div>

    {/* Desktop Navbar */ }
    <ul className="hidden gap-3 text-lg sm:flex">
        <li>
            <a href="">Profile</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="">Projects</a>
        </li>
        <li>
            <a href="">Skills</a>
        </li>
        <li>
            <a href="">Certifications</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
    </ul>

    {/* Mobile Menu Button */ }
    <button
        className="text-2xl font-bold sm:hidden"
        onClick={() => setOpen(!open)}
    >
        ☰
    </button>
      </div >

        {/* Mobile Navbar */ }
    {
        open && (
            <ul className="flex w-full flex-col items-center gap-3 border-b bg-sky-100 p-4 backdrop-blur-xl py-2 text-lg backdrop-blur-md">
                <li>
                    <a href="">Profile</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Certifications</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        )
    }
    </>
    )
}

export default Navbar;