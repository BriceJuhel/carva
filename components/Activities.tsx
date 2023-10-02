"use client" // this is a client component
import React from "react"

const Activities = () => {
    return (
      <div>
        <h2 className="text-center font-bold text-3xl underline mb-4">
          Activités
        </h2>

        <div className="">
          <div className="flex justify-center">
            <img src="/images/cle.png" alt="Clé anglaise" className="w-24 h-24" />
          </div>
          <div>
            <p className="text-center mt-4">
            Entretien et réparations de votre véhicule selon les préconisations
            constructeurs à votre domicile ou en atelier avec possibilité d’un
            véhicule de prêt (Selon les prestations à effectuer)
            </p>
          </div>          
        </div>

        <div className="mx-auto mt-4 grid w-12 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

        <div className="">
        <div className="flex justify-center">
            <img src="/images/diagnostique.png" alt="Diagnostique" className="w-24 h-24"/>
          </div>
          <div>
            <p className="text-center mt-4">
            Diagnostique de votre véhicule chez vous et
            possibilité de vous déposer un véhicule de prêt
            pendant les réparations
            </p>
          </div>          
        </div>

        <div className="mx-auto mt-4 grid w-12 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

        <div className="">
        <div className="flex justify-center">
            <img src="/images/vente.png" alt="Vente" className="w-24 h-24"/>
          </div>
          <div>
            <p className="text-center mt-4">
            Accompagnement dans la vente de votre véhicule à particulier
            (consulter mes prestations)
            </p>
          </div>          
        </div>

        <div className="mx-auto mt-4 grid w-12 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

        <div className="">
          <div className="flex justify-center">
            <img src="/images/loupe.png" alt="Loupe" className="w-24 h-24"/>
          </div>
          <div>
            <p className="text-center mt-4">
            Accompagnement personnalisés dans la
            recherche d’un véhicule (consulter mes
            prestations)
            </p>
          </div>          
        </div>

        <div className="mx-auto mt-4 grid w-12 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

      <div className="">
        <div className="flex justify-center">
            <img src="/images/voiture.png" alt="Voiture" className="w-24 h-24"/>
        </div>
        <div>
            <p className="text-center">
            Préparation et pose de pièces spécifiques pour véhicule sportif.
            (Pose de ligne d’échappement - combinés filetés -
            manomètres - préparation moteur/boite - etc)
            (Sur devis)
            </p>
        </div>          
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2"></div>

      </div>

      
    )
  }
  
  export default Activities