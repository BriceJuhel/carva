import React from "react"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="p-4">
        <div className="flex justify-between sm:justify-center text-neutral-500">
            <div className="flex items-center justify-center"> 
                <img      className="sm:h-16 h-16 w-auto sm:px-16"
                        src="/images/logo.png"
                        alt="Logo"
                />
            </div>  
            <div>
                <p>Mr TESSIER Maxime</p>
                <p>L&apos;Aubrais</p>
                <p>44118 La Chevrolière</p>
                <p>email@exemple.com</p>
                <p>00 00 00 00 00</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
