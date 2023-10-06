"use client" // this is a client component
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from "react-scroll/modules"
import React from "react"

const includedOne = [
  'Vidange huile moteur',
  'Remplacement filtre à huile',
  'Niveaux - Pression - Eclairage',
  'Lecture - Effacement défaut calculateur',
  'Essai routier (dans la limite de 5L d’huile - hors Adblue)',
]

const includedTwo = [
  'Inspection du véhicule',
  'Nettoyage',
  'Photos du véhicule',
  'Mise en ligne de l\'annonce',
  'Réponse aux appels et aux mails',
  'Accompagnement lors des visites',
]

const includedThree = [
  'Recherche de véhicule',
  'Visite et inspection du véhicule',
  'Négociation du tarif',
  'Rapport du véhicule',
  'Dossier photo',
]


export default function Prices() {
  return (
    <section id='prices' className="bg-white py-4 sm:py-6">
      
      <div className="mx-auto max-w-7xl px- lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl underline">Tarifs & Prestations</h2>
          <p className="mt-6 text-sm leading-8 text-gray-800 font-semibold">
          Tarifs horaire : <br />
          M1 : 60€ TTC (50€ HT)<br />
          M2 : 66€ TTC (55€ HT)<br />
          M3 : 72€ TTC (60€ HT)<br />
          </p>
        </div>
      </div>

       <div className='sm:flex sm:justify-center'>
         <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-6 mt-4">
              <div className="mx-auto max-w-xs px-4">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Diagnostique à domicile</h3>
                <p className="text-base font-semibold text-gray-600 mt-2">Dans la limite de 25km autour de la Chevrolière</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">70€ TTC</span>
                  <span className="font-semibold leading-6 tracking-wide text-gray-600">(58,33€ HT)</span>
                </p>
                <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
                  <button className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prendre rendez-vous</button>
                </Link>
              </div>
            </div>
          </div>



          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-6 mt-4">
              <div className="mx-auto max-w-xs px-4">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Dépannage</h3>
                <p className="text-base font-semibold text-gray-600 mt-2">Véhicule de moins de 1200kg</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">1,80€ TTC/km</span>
                </p>
                <p className="text-base font-semibold text-gray-600 mt-2">Minimum de 90€ TTC, soit 50km</p>
                <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
                  <button className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contactez-moi</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Forfait révision</h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-orange-500">Inclus</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedOne.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-10 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:items-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">149€ TTC</span>
                </p>
                <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
                  <button className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prendre rendez-vous</button>
                </Link>
              </div>
            </div>
          </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Accompagnement vente de véhicule</h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-orange-500">Inclus</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedTwo.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-2 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:items-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">4%</span>
                  </p>
                  <p className="text-base font-semibold text-gray-600 mt-2">du prix de vente du véhicule une fois la vente conclue (minimum 390€ TTC)</p>
                  <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
                  <button className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contactez-moi</button>
                </Link>
              </div>
            </div>
          </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Accompagnement recherche d&apos;un véhicule</h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-orange-500">Inclus</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedThree.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-2 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:items-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600 mt-2">Sur devis suivant le type de recherche du véhicule et de la localisation (exemple : 349€ TTC pour une recherche et inspection d&apos;un véhicule à 50km maximum autour de La Chevrolière)</p>
                  <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
                  <button className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Demandez un devis</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
      <div className='text-center text-xl sm:text-2xl underline font-semibold mt-14'>
        <p>Règlement par virement - carte bancaire ou espèces.</p>
      </div>
      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:max-w-none md:grid-cols-2"></div>
    </section>

    
  )
}
