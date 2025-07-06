export default function Footer() {
  return (
    <footer className=" text-blue-800 text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-white">Dr. Serena Blake</h3>
          <p className="text-sm italic mb-2">Licensed Clinical Psychologist (PsyD)</p>
          <p className="text-sm max-w-xs">
            Helping you heal, grow, and thrive—one step at a time.
          </p>
        </div>

        <div className="text-center sm:text-left space-y-1">
          <p>(323) 555-0192</p>
          <a
            href="mailto:serena@blakepsychology.com"
            className="text-blue-400 hover:underline"
          >
            serena@blakepsychology.com
          </a>
          <p>287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
        </nav>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © 2025 Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  )
}
