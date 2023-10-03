export default function Schedule() {
  return (
    <section className="my-8" id="schedule">
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
        <h4 className="text-base font-semibold leading-7 text-gray-900 sm:text-2xl">Samedi : <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-2xl">9h00 - 12h00 sur rendez-vous</span></h4>
      </div>
        <div className="mt-16 border-t border-gray-200">        
      </div>
      <h3 className='my-16 text-center font-semibold text-2xl'>Les partenaires de l'entreprise</h3>
      <div className='flex justify-center'>
        <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-12">
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24 " src="/images/orange-bank.png" alt="Logo Orange Bank" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24" src="/images/tunap.svg" alt="Logo Tunap" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24" src="/images/wmn.jpg" alt="Logo Win Motor Next" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24 sm:max-h-48" src="/images/chimirec.png" alt="Logo Chimirec" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-16" src="/images/icarsoft.png" alt="Logo iCarSoft" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-16" src="/images/kstools.jpg" alt="Logo Ks Tools" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-16" src="/images/mecatechnic.png" alt="Logo Mecatechnic" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24 sm:max-h-32" src="/images/image-associes.jpg" alt="Logo Images Associées" /></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24 sm:max-h-48" src="/images/steima.png" alt="Logo Steima PLSN" /></li>
            <li className="text-center font-bold sm:text-3xl"><p>SOCODEP OPAL</p></li>
            <li className="flex items-center justify-center"><img className="w-auto h-auto max-h-24" src="/images/aliapur.png" alt="Logo Aliapur" /></li>         
        </ul>
      </div>
    </section>
  )
}
