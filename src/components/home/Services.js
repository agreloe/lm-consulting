import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Services.module.scss'

export default function Services() {

    const servicios = [
        {
            'title': 'Búsqueda y Selección de personal ',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#busqueda'
        },
        {
            'title': 'Análisis y Diagnóstico de Estructuras y Puestos',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#analisis'
        },
        {
            'title': 'Asesoría Experta Integral en Recursos Humanos',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#asesoria'
        },
        {
            'title': 'Planificación de Políticas y Procesos de Recursos Humanos',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#planificacion'
        },
        {
            'title': 'Coaching Ejecutivo y Life Coaching',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#coaching'
        },
        {
            'title': 'Gestión del desempeño por competencias',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#gestion'
        },
        {
            'title': 'Desarrollo y retención de Talento',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#retencion'
        },
        {
            'title': 'Desarrollo de procesos para una Comunicación Efectiva',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png',
            'url': '/servicios#desarrollo'
        },
    ]

  return (
    <section id='servicios' className={`wrap py-32 sm:text-center sm:pt-32 sm:pb-16 ${styles.servicios}`}>
        <h2 className='pb-16 sm:pb-8'>Nuestros Servicios</h2>
        <span className={`${styles.line} mb-16 sm:mb-8`}></span>
        <div className={`${styles.cards}`}>
            {
                servicios.map((item,index)=>(
                    <Link key={index} href={item.url} className={`${styles.card} min-h-[220px] sm:min-h-[180px]`}>


                            <div className='flex gap-4 flex-col sm:flex-row'>
                                <Image src={item.icon} width={50} height={50} alt='/' />
                                <h4>{item.title}</h4>
                            </div>

                            {/* <Link className={`${styles['see-more']}`} href={item.url}>Ver más</Link> */}

                    </Link>

                ))
            }
        </div>
    </section>
  )
}
