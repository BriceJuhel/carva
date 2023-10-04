"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"

const Activities = () => {
    return (
      <section id="activities">
        <h2 className="text-center font-bold text-3xl underline mb-10 mt-4">
          Activités
        </h2>

        <div className="sm:flex bg-orange-50 p-4 rounded-xl">
          <div className="flex justify-center">
            <img src="/images/cle.png" alt="Clé anglaise" className="w-24 h-24 sm:w-32" />
          </div>
          <div>
            <p className="text-center mt-4">
            <span className="font-bold">Entretien et réparations  </span>de votre véhicule selon les préconisations
            constructeurs à votre domicile ou en atelier avec possibilité d&apos;un
            véhicule de prêt (selon les prestations à effectuer)
            </p>
          </div>          
        </div>

        <div className="sm:flex sm:flex-row-reverse sm:justify-between p-4">
          
          <div className="flex justify-center">
            <img src="/images/diagnostique.png" alt="Diagnostique" className="w-32 min-w-32 h-24 pl-4"/>
          </div>
                  
          <div>
            <p className="text-center mt-4">
            <span className="font-bold">Diagnostique</span> de votre véhicule chez vous et
            possibilité de vous déposer un véhicule de prêt pendant les réparations
            </p>
          </div>  

        </div>

        <div className="sm:flex bg-orange-50 p-4 rounded-xl justify-between">
        <div className="flex justify-center">
            <img src="/images/vente.png" alt="Vente" className="w-24 h-24"/>
          </div>
          <div>
            <p className="text-center mt-4">
            <span className="font-bold">Accompagnement</span> dans la <span className="font-bold">vente</span> de votre véhicule à particulier {" "}
            <Link to="prices" className="underline cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>(consulter mes prestations)
            </Link>
            </p>
          </div>          
        </div>

        <div className="sm:flex sm:flex-row-reverse sm:justify-between p-4">
          <div className="flex justify-center">
            <img src="/images/loupe.png" alt="Loupe" className="w-24 h-24"/>
          </div>
          <div>
            <p className="text-center mt-4">
            <span className="font-bold">Accompagnement</span> personnalisés dans la
            <span className="font-bold"> recherche</span> d&apos;un véhicule {" "}
            <Link to="prices" className="underline cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={600}>(consulter mes prestations)
            </Link>
            </p>
          </div>          
        </div>


      <div className="sm:flex bg-orange-50 p-4 rounded-xl justify-between">
        <div className="flex justify-center">
            <img src="/images/voiture.png" alt="Voiture" className="w-24 h-24 sm:w-32"/>
        </div>
        <div>
            <p className="text-center">
            Préparation et pose de <span className="font-bold">pièces spécifiques pour véhicule sportif </span> 
             (pose de ligne d&apos;échappement - combinés filetés -
            manomètres - préparation moteur/boite - etc) -
            Sur devis
            </p>
        </div>          
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:max-w-none md:grid-cols-2"></div>

      </section>

      
    )
  }
  
  export default Activities