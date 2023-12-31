"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"

const Presentation = () => {
  return (
    <section id="presentation">
      <div className="text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-16 md:pt-16 md:flex-row md:space-x-4 relative">
        <div>
        <img className="my-8 sm:my-8 rounded" src="/images/carva.png" alt="" />
        </div>
        <div>
        <Link to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>
            <button className="bg-orange-400 text-gray-800 p-2 sm:p-2 font-bold rounded sm:text-3xl hover:bg-orange-500">Prendre rendez-vous</button>
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-10 text-center">
        <p>
            Après une dizaine d&apos;années dans différents postes
            du secteur automobile, je vous propose mes services de
            réparations et d&apos;entretien à domicile ou dans mon
            atelier suivant les prestations à effectuer, avec
            possibilité d&apos;un véhicule de prêt. <br />
            Également passionné du sport automobile que je
            pratique en loisirs, je saurai entretenir et préparer vos
            sportives préférées avec soin et rigueur.
        </p>
      </div>
      <div className="flex justify-center">
          <div className="rounded-2xl py-6 px-4 ring-2 ring-inset ring-orange-400 lg:flex lg:flex-col lg:justify-center lg:py-6 mt-4 sm:w-1/2">
            <p className="font-semibold text-center text-xl mb-4 ">
                Choisir CARVA c&apos;est :
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
                              Plus de 10 ans d&apos;expérience
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
      </div>

      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

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
