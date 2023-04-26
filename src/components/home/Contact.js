import React, { useState, useRef, useLayoutEffect } from 'react'
import styles from '@/styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/helpers/IsomorphicLayoutEffect';


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [mensaje, setMensaje] = useState("")

    const contactoRef = useRef()
    const q = gsap.utils.selector(contactoRef);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()
    const ctx = useRef()

    useIsomorphicLayoutEffect(()=>{
      ctx.current = gsap.context(()=>{
        tl.current = gsap
        .timeline()
        .to(contactoRef.current,{
          opacity: 1,
          ease: Expo.easeOut
        })
        .to(q('.contacto-title'),{
          opacity: 1,
          y: 0,
          ease: Expo.easeOut
        },
        '-=0.25')
        .to(q('.line'),{
          width: 100,
          ease: Expo.easeOut
        },
        '-=0.25')
        .to(q('.contacto-text'),{
          opacity: 1,
          y: 0,
          ease: Expo.easeOut
        },
        '-=0.25')
        .to(q('.form'),{
          opacity: 1,
          y: 0,
          ease: Expo.easeOut
        },
        '-=0.25')
      }, contactoRef)

      ScrollTrigger.create({
        trigger: contactoRef.current,
        start: "top 50%",
        end: "bottom top",
        animation: tl.current,
        onEnter: () => {
          return ()=> ctx.current.revert()
        },
      });
    },[])

  return (
    <section ref={contactoRef} id="contacto" className={`${styles.contacto} wrap flex sm:flex-wrap gap-8 py-16`}>
        <div className="flex flex-col w-full lg:w-[50%] xl:w-[50%]">
            <h2 className='pb-16 sm:pb-8 contacto-title'>Contactános</h2>
            <span className={`${styles.line} mb-16 sm:mb-8 line`}></span>
            <div className={`contacto-text ${styles['contacto-text']}`}>
              <p>Gracias por contactarte con nosotros. ¿Necesitas más información sobre nuestros servicios? Por favor completa el formulario y a la brevedad te conectaremos por el medio que nos hayas indicado, y si estás de acuerdo, podemos agendar una reunión para conocernos mejor.</p>
              <h5>Estamos a disposición para brindarte el servicio que mejor se ajuste a tus necesidades.</h5>
              <ul className={`${styles.socials}`}>
                  <li>
                      <Link href="https://www.linkedin.com/company/lmconsulting-rh/" target='_blank' rel='noopener noreferrer'>
                          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                      </Link>
                  </li>
                  <li>
                      <Link href="https://wa.link/yqfolk" target='_blank' rel='noopener noreferrer'>
                          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                      </Link>
                  </li>
                  <li>
                      <Link href="mailto:hola@lmconsulting-rh.com" target='_blank' rel='noopener noreferrer'>
                          <FontAwesomeIcon icon={faEnvelope} size="xl" />
                      </Link>
                  </li>
              </ul>
            </div>
        </div>

        <form className={`flex flex-col gap-4 w-full lg:w-[50%] xl:w-[50%] form ${styles.form}`}>

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
