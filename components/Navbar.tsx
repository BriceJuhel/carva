import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Activités",
    page: "activities",
  },
  {
    label: "Tarifs/Prestations",
    page: "prices",
  },
  {
    label: "Horaires",
    page: "schedule",
  },
  {
    label: "Contact",
    page: "contact",
  },
]

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)

  const closeMenu = () => {
    setNavbar(false);
  };

  return (
    <div className="bg-white">
      <header className="inset-x-0 fixed top-0 bg-white sm:shadow z-50 2xl:w-2/3 2xl:mx-auto ">
        <nav className="flex items-center md:justify-center justify-between p-2 lg:p-8 lg:px-8" aria-label="Global">
          <Link to="presentation" className="hover:cursor-pointer">
            <div className="flex lg:flex-1 max-w-xs lg:absolute lg:inset-x-12 lg:top-0 lg:z-10 md:mx-8 ">
              <a href="/" className="-m-1.5 p-6">
                <img
                  className="sm:h-16 h-16 w-auto"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </a>
            </div>
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setNavbar(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12 z-20">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  key={idx}
                  to={item.page}
                  className="text-sm lg:text-lg font-semibold leading-6 text-gray-600 hover:text-gray-900 relative group cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 w-2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-1/2 group-hover:w-full group-hover:transition-all transition-all"></span>
                </Link>
              );
            })}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={navbar} onClose={() => setNavbar(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-50 bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-1/2 shadow text-center">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5" onClick={closeMenu}>
                <img
                  className="h-16 w-auto"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setNavbar(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-12 w-12" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className=" divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.page}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
