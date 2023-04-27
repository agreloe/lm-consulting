import React, {Fragment, useRef, useLayoutEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/helpers/IsomorphicLayoutEffect';


export default function About() {
  const nosotrosRef = useRef()
  const q = gsap.utils.selector(nosotrosRef);
  gsap.registerPlugin(ScrollTrigger);
  const tl = useRef()
  const ctx = useRef()

  useIsomorphicLayoutEffect(()=>{
    ctx.current = gsap.context(()=>{
      tl.current = gsap
      .timeline()
      .to(nosotrosRef.current,{
        opacity: 1,
        ease: Expo.easeOut
      })
      .to(q('.nosotros-title'),{
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
      .to(q('.nosotros-text'),{
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
      },
      '-=0.25')
    }, nosotrosRef)

    ScrollTrigger.create({
      trigger: nosotrosRef.current,
      start: "top 50%",
      end: "bottom top",
      animation: tl.current,
      onEnter: () => {
        return ()=> ctx.current.revert()
      },
    });

  },[])

  return (
    <Fragment>
        <section ref={nosotrosRef} id='nosotros' className={`${styles.about}`}>
            <div className="wrap flex flex-col items-end sm:items-start py-16">
                <h2 className='text-white pb-16 sm:pb-8 nosotros-title'>Nosotros</h2>
                <span className={`${styles.line} mb-16 sm:mb-8 line`}></span>
                <div className={`nosotros-text w-[55%] sm:w-full ${styles['about-text']}`}>
                  <p className='text-white text-right sm:text-left pb-4'>Somos una consultora especializada en asesoramiento experto integral en Recursos Humanos, ofrecemos servicios centrados en lograr expandir la estrategia de negocio de las empresas con equipos motivados y satisfechos.</p>
                  <p className='text-white text-right sm:text-left pb-4'>Trabajamos en conjunto y de manera colaborativa. Somos profesionales con un gran recorrido académico y laboral, nos especializamos en Recursos Humanos, Psicología, Coaching Ejecutivo, Life Coaching, Seguridad e Higiene, Derecho Laboral entre otras.</p>
                  <p className='text-white text-right sm:text-left pb-4'>Creemos que el crecimiento de las organizaciones está directamente relacionado con el factor humano, es decir que las personas sean protagonistas, se sientan parte de los objetivos de la empresa, satisfechos y comprometidos con las tareas que desempeñan.</p>
                  <p className='text-white text-right pb-4 sm:text-left'>Nuestros valores hacen que marquemos la diferencia en nuestro trabajo día a día, son nuestra esencia y razón de ser. Nos guían el Compromiso, Profesionalismo, Transparencia, Dedicación, Integridad y Empatía</p>
                </div>
            </div>
        </section>
    </Fragment>

  )
}
