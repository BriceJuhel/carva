"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Presentation = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-32 md:pt-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-center text-blue-900 ">CARVA</h1>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>
          <p className="text-lg md:text-2xl text-center">
            <span className="font-bold text-blue-900">
              C
            </span>
            onseil - <span className="font-bold text-blue-900">
            A
            </span>
            chat - <span className="font-bold text-blue-900">
            R
            </span>
            éparations - <span className="font-bold text-blue-900">
            V
            </span>
            ente <span className="font-bold text-blue-900">
            A
            </span>
            utomobile
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mt-20">
        <div className="text-center">
        <p className="text-xl sm:text-4xl font-bold">
            Je me déplace à votre domicile
        </p>
        </div>
        <div>
            <button className="bg-yellow-200 p-2 sm:p-4 font-semibold rounded ml-2 sm:ml-10 sm:text-xl">Prendre rendez-vous</button>
        </div>
      </div>
      <div className="mt-4 sm:mt-10 text-center">
        <p>
            Après une dizaine d’années dans différents postes
            dans l’automobile, je vous propose mes services de
            réparations et d’entretien à domicile ou dans mon
            atelier suivant les prestations à effectuer, avec
            possibilité d’un véhicule de prêt. <br />
            Également passionnée du sport automobile que je
            pratique en loisirs, je saurai entretenir et préparer vos
            sportives préférées avec soins et rigueur.
        </p>
      </div>
      <div className="mt-10 sm:mt-10">
        <p className="underline text-center text-xl mb-4 ">
            Choisir CARVA c'est :
        </p>
        <div className="sm:flex sm:justify-center">
          <div className="pl-4 sm:mr-10">
                  <ul className="list-disc">
                      <li>
                          Un seul interlocuteur
                      </li>
                      <li>
                          Sérieux
                      </li>
                      <li>
                          Réactivité
                      </li>
                      <li>
                          Plus de 10 ans d'expérience
                      </li>
                  </ul>
          </div>
          <div className="pl-4">
                  <ul className="list-disc">
                      <li>
                          Ponctuel
                      </li>
                      <li>
                          Satisfaction clientèle
                      </li>
                      <li>
                          Budget maîtrisé
                      </li>
                      <li>
                          Confiance
                      </li>
                  </ul>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={50} />
        </Link>
      </div> */}
    </section>
  )
}

export default Presentation
