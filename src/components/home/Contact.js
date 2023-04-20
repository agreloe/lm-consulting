import React, { useState, useRef, useEffect } from 'react'
import styles from '@/styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [mensaje, setMensaje] = useState("")

  return (
    <section id="contacto" className={`${styles.contacto} wrap flex sm:flex-wrap gap-8 py-16`}>
        <div className="flex flex-col w-full lg:w-[50%] xl:w-[50%]">
            <h2 className='pb-16 sm:pb-8'>Contactános</h2>
            <span className={`${styles.line} mb-16 sm:mb-8`}></span>
            <p>¿Tienes preguntas o comentarios? ¿Necesitas más información sobre nuestros servicios? No dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte. Puedes llenar el formulario de contacto a continuación y te responderemos en breve. Estamos disponibles para atender tus consultas y brindarte el mejor servicio posible.</p>
            <ul className={`${styles.socials}`}>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </div>

        <form className='flex flex-col gap-4 w-full lg:w-[50%] xl:w-[50%]'>

        <div className="inline-flex flex-wrap w-full">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

            >
              Nombre y Apellido
            </label>
            <input
              className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
              name="nombreApellido"
              type="text"
              placeholder="Nombre y Apellido"
              value={name}
              onChange={e=>setName(e.target.value)}

            />
          </div>
        </div>

        <div className="inline-flex flex-wrap w-full">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

            >
              Email
            </label>
            <input
              className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="inline-flex flex-wrap w-full">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

            >
              Teléfono
            </label>
            <input
              className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
              name="telefono"
              type="text"
              placeholder="Teléfono"
              value={tel}
              onChange={e=>setTel(e.target.value)}
            />
          </div>
        </div>


        <div className="inline-flex flex-wrap w-full">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

            >
              Mensaje
            </label>
            <textarea
              className="w-full appearance-none block bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#5193ed]"
              name="mensaje"
              type="text"
              placeholder="Escriba aquí su mensaje."
              value={mensaje}
              onChange={e=>setMensaje(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full justify-end">
            <input type="submit" value="Enviar" className='button' />
        </div>




        </form>
    </section>
  )
}
