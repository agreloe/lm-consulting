import React, {useRef, useLayoutEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Services.module.scss'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Services() {
    const servicesRef = useRef()
    const q = gsap.utils.selector(servicesRef);
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef()

    const servicios = [
        {
            'title': 'Búsqueda y Selección',
            'icon': 'https://img.icons8.com/external-edtim-outline-edtim/50/b6d6a9/external-headhunting-hr-edtim-outline-edtim-3.png',
            'url': '/servicios#busqueda'
        },
        {
            'title': 'Análisis y Diagnóstico de Estructuras y Puestos',
            'icon': 'https://img.icons8.com/external-outline-geotatah/64/b6d6a9/external-employment-recruitment-outline-geotatah-2.png',
            'url': '/servicios#analisis'
        },
        {
            'title': 'Asesoría Experta Integral en Recursos Humanos',
            'icon': 'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-consulting-business-motivation-smashingstocks-mixed-smashing-stocks.png',
            'url': '/servicios#asesoria'
        },
        {
            'title': 'Políticas y Procesos de Recursos Humanos',
            'icon': 'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-human-resources-fintech-smashingstocks-mixed-smashing-stocks.png',
            'url': '/servicios#planificacion'
        },
        {
            'title': 'Coaching Ejecutivo & Life Coaching',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#coaching'
        },
        {
            'title': 'Gestión del Desempeño',
            'icon': 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/b6d6a9/external-consulting-business-flatart-icons-outline-flatarticons.png',
            'url': '/servicios#gestion'
        },
        {
            'title': 'Desarrollo y Retención de Talento',
            'icon': 'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-human-resources-marketing-and-business-management-smashingstocks-mixed-smashing-stocks.png',
            'url': '/servicios#retencion'
        }
    ]

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            tl.current = gsap
            .timeline()
            .to(servicesRef.current,{
              opacity: 1,
              ease: Expo.easeOut
            })
            .to(q('.services-title'),{
              opacity: 1,
              x: 0,
              ease: Expo.easeOut
            },
            '-=0.25')
            .to(q('.line'),{
              width: 100,
              ease: Expo.easeOut
            },
            '-=0.25')
            .to(q('.card'), {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: Expo.easeOut
            }, '-=0.25')

          }, servicesRef)

          ScrollTrigger.create({
            trigger: servicesRef.current,
            start: "top 50%",
            end: "bottom top",
            animation: tl.current,
            onEnter: () => {
              return ()=> ctx.revert()
            },
          });
    },[])

  return (
    <section ref={servicesRef} id='servicios' className={`wrap py-16 sm:pt-32 sm:pb-16 ${styles.servicios}`}>
        <h2 className={`pb-16 sm:pb-8 services-title ${styles['servicios-title']}`}>Nuestros Servicios</h2>
        <span className={`${styles.line} mb-16 sm:mb-8 line`}></span>
        <div className={`${styles.cards}`}>
            {
                servicios.map((item,index)=>(
                    <Link key={index} href={item.url} className={`${styles.card} min-h-[220px] sm:min-h-[180px] card`}>

                            <div className='flex gap-4 flex-col sm:flex-row'>
                                <Image src={item.icon} width={50} height={50} alt='/' />
                                <h4>{item.title}</h4>
                            </div>

                    </Link>

                ))
            }
        </div>
    </section>
  )
}
