import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

      

        <a href="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
            <Zap size={20} className="fill-white text-white" />
          </div>

          <span className="text-2xl font-bold text-gray-900">
            LeadFlow
          </span>

        </a>

  

        <ul className="hidden items-center gap-10 font-semibold md:flex">

          {navLinks.map((link) => (

            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className={`relative text-lg transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 ${
                  activeSection === link.id
                    ? "text-blue-600 after:w-full"
                    : "text-gray-700 after:w-0 hover:text-blue-600 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>

            </li>

          ))}

        </ul>



        <div className="hidden items-center gap-4 md:flex">

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Contact Sales
          </a>

        </div>


        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
           
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition ${
                  activeSection === link.id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
            >
              Contact Sales
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;