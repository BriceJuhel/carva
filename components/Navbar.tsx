import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll/modules"

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

        <Link to="presentation" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={600}>
          <div className="flex lg:flex-1 max-w-xs lg:absolute lg:inset-x-12 lg:top-0 lg:z-10 md:mx-8">
            <div className="flex flex-col items-center">
              <img
                className="sm:h-16 h-16 w-auto sm:mt-2 mt-3 ml-3 cursor-pointer focus:outline-none" style={{ WebkitTapHighlightColor: 'transparent' }}
                src="/images/logo.png"
                alt="Logo"
              />
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p> : 06.06.06.06.06</p>
              </div>
            </div>
          </div>
        </Link>
          
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none" style={{ WebkitTapHighlightColor: 'transparent' }}
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
                  offset={-120}
                  duration={600}
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 w-2 h-1 bg-gradient-to-r from-amber-500 to-orange-400 transform -translate-x-1/2 group-hover:w-full group-hover:transition-all transition-all"></span>
                </Link>
              );
            })}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={navbar} onClose={() => setNavbar(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-50 bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-1/2 shadow text-center">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 focus:outline-none" style={{ WebkitTapHighlightColor: 'transparent' }} 
              onClick={closeMenu}>
                
                <img
                  className="h-16 w-auto mt-3 ml-3"
                  src="/images/logo.png"
                  alt="Logo"
                />
                <div className='flex ml-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p> : 06.06.06.06.06</p>
              </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none" style={{ WebkitTapHighlightColor: 'transparent' }}
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
                      spy={true}
                      smooth={true}
                      offset={-140}
                      duration={600}
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
