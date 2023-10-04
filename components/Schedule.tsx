export default function Schedule() {
  return (
    <section className="mt-8" id="schedule">
        <h2 className="text-center font-bold text-3xl underline mb-10 mt-4">
          Horaires
        </h2>
        <div className="flex justify-center">
            <img className="w-auto h-auto max-h-24 mb-8" src="images/calendrier.png" alt="Horaires" />
        </div>   
      <div className="px-4 sm:px-0 text-center">
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Lundi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 19h00</span></h4>
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Mardi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 19h00</span></h4>
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Mercredi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 19h00</span></h4>
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Jeudi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 19h00</span></h4>
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Vendredi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 18h00</span></h4>
      </div>
        <div className="mt-16 border-t border-gray-200">        
      </div>
      
    </section>
  )
}
