"use client" // this is a client component
import React from "react"

const Prices = () => {
    return (
      <section id="prices">
        <h2 className="text-center font-bold text-3xl underline mb-4 mt-4">
          Tarifs & Prestations
        </h2>

        <h3 className="text-xl mb-4 font-semibold">Entretien et réparations multimarques :</h3>
        <p>Tarifs horaires :</p>
        <ul>
            <li>M1 50€ HT // 60€ TTC</li>
            <li>M2 55€ HT // 66€ TTC</li>
            <li>M3 60€ HT // 72€ TTC</li>
        </ul>
        <br />
        <p>Diagnostique à domicile (limite de 25 Kms autour de la Chevrolière) : 58,33€ HT //
        70€ TTC</p>
        <br />
        <p>
        Forfait révision/Vidange huile moteur - Remplacement filtre a huile - Niveaux/
        pressions/éclairage - Lecture/effacement défaut calculateur - Essai routier
        (dans la limite de 5L d’huile - Hors Adblue) : 149€ TTC
        </p>
        <br />
        <p>
        Dépannage (Véhicule de moins de 1200 Kg) : 1,80€ TTC/Km (minimum de
        90€ TTC)
        </p>

        <h3 className="text-xl mb-4 mt-4 font-semibold">Accompagnement vente de véhicule :</h3>
        <p>
        4% de la vente du véhicule une fois la vente du véhicule conclut (avec un
        minimum de 390€ TTC).
        </p>
        <p className="italic">
        Prestations : Inspection/Nettoyage/Photos du véhicule - Mise en ligne de
        l’annonce - Réponse aux appels/Mails - Accompagnement lors des visites
        </p>

        <h3 className="text-xl mb-4 mt-4 font-semibold">Accompagnement recherche d’un véhicule :</h3>
        <p>
        Sur devis suivant type de recherche du véhicule et localisation (formulaire
        de contact). <br />
        Exemple : 349€ TTC pour la recherche et l'inspection d'un véhicule
        à 50kms maximum autour de La Chevrolière.
        </p>
        <p className="italic">
        Prestations : Recherche de véhicule - Visite/Inspection du véhicule -
        Négociation tarif - Rapport du véhicule - Dossier photos
        </p>
        <br />
        <p className="font-bold underline text-center">Règlement par virement - carte bancaire ou espèces.</p>


      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:max-w-none md:grid-cols-2"></div>

      </section>

      
    )
  }
  
  export default Prices