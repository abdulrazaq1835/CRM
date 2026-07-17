import { Zap, Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,

} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <Zap className="fill-white text-white" size={22} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                LeadFlow
              </h2>
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              LeadFlow helps businesses manage leads, automate workflows,
              increase productivity, and grow revenue with one powerful CRM
              platform.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaLinkedinIn size={18} />
              </a>

            

            </div>
          </div>

   
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <a href="#features" className="transition hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#pricing" className="transition hover:text-blue-400">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#testimonials" className="transition hover:text-blue-400">
                  Testimonials
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-blue-400">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>          
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-4">
              <li className="transition hover:text-blue-400">
                Lead Management
              </li>

              <li className="transition hover:text-blue-400">
                Sales Pipeline
              </li>

              <li className="transition hover:text-blue-400">
                Analytics
              </li>

              <li className="transition hover:text-blue-400">
                Automation
              </li>

              <li className="transition hover:text-blue-400">
                Integrations
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-blue-500" size={18} />
                <span>support@leadflow.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-blue-500" size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-500" size={18} />
                <span>New Delhi, India</span>
              </div>

            </div>
          </div>

        </div>

        

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} LeadFlow CRM. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">

              <a href="#" className="transition hover:text-blue-400">
                Privacy Policy
              </a>

              <a href="#" className="transition hover:text-blue-400">
                Terms of Service
              </a>

              <a href="#" className="transition hover:text-blue-400">
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;