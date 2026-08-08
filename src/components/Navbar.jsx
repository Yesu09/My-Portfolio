import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav
        className={`
          fixed
          left-1/2
          z-[100]
          flex
          -translate-x-1/2
          items-center
          justify-between
          bg-sky-100/90
          backdrop-blur-xl
          transition-[width,margin,padding,border-radius,box-shadow]
          duration-300
          ease-in-out

          ${
            scrolled
              ? `
                top-3
                w-[92%]
                max-w-5xl
                rounded-2xl
                border
                border-white/40
                px-5
                py-2.5
                shadow-xl
              `
              : `
                top-0
                w-full
                rounded-none
                border-b
                border-white/10
                px-4
                py-4
                shadow-sm
              `
          }
        `}
      >
        {/* Logo */}
        <a
          href="#Profile"
          onClick={closeMenu}
          className={`
            font-bold
            transition-[font-size]
            duration-300
            ${scrolled ? "text-lg" : "text-xl"}
          `}
        >
          Yesubabu
        </a>

        {/* Desktop Navbar */}
        <ul
          className={`
            hidden
            items-center
            sm:flex
            ${scrolled ? "gap-4 text-sm" : "gap-5 text-lg"}
          `}
        >
          <li>
            <a
              href="#Profile"
              className="transition-colors hover:text-blue-600"
            >
              Profile
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition-colors hover:text-blue-600"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition-colors hover:text-blue-600"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition-colors hover:text-blue-600"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="transition-colors hover:text-blue-600"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div
          className={`
            fixed
            left-1/2
            z-[90]
            w-[92%]
            -translate-x-1/2
            rounded-2xl
            border
            border-white/40
            bg-sky-100/95
            py-5
            shadow-xl
            backdrop-blur-xl
            sm:hidden
            ${scrolled ? "top-[70px]" : "top-[65px]"}
          `}
        >
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a href="#Profile" onClick={closeMenu}>
                Profile
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#certificates" onClick={closeMenu}>
                Certifications
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
