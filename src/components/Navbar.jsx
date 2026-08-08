import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
    <>
        {/* Navbar */ }
    < div className = "z-50 top-0 left-0 flex w-full items-center justify-between border-b border-white/10 bg-sky-100 p-4 backdrop-blur-xl" >
            <div className="text-3xl font-bold">Yesubabu</div>

    {/* Desktop Navbar */ }
    <ul className="hidden gap-3 text-lg sm:flex">
        <li>
            <a href="#Profile">Profile</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#skills">Skills</a>
        </li>
        <li>
            <a href="#certificates">Certifications</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
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
            <ul className="fixed top-16 left-0 z-40 w-full bg-sky-100 flex flex-col items-center gap-4 py-4 border-b shadow-lg sm:hidden">
                <li>
                    <a href="#Profile">Profile</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#certificates">Certifications</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        )
    }
    </>
    )
}

export default Navbar;