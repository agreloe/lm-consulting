import React, {Fragment} from 'react'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'


export default function About() {
  return (
    <Fragment>
        <section id='nosotros' className={`${styles.about}`}>
            <div className="wrap flex flex-col items-end sm:items-start py-16">
                <h2 className='text-white pb-16 sm:pb-8'>Quienes somos</h2>
                <span className={`${styles.line} mb-16 sm:mb-8`}></span>
                <p className='text-white w-[55%] sm:w-full text-right sm:text-left pb-4'>Somos una consultora especializada en asesoramiento experto integral en Recursos Humanos, ofrecemos servicios centrados en lograr expandir la estrategia de negocio de las empresas con equipos motivados y satisfechos.</p>
                <p className='text-white w-[55%] sm:w-full text-right sm:text-left pb-4'>Trabajamos en equipo y de manera colaborativa. Somos profesionales con un gran recorrido académico y laboral, nos especializamos en Recursos Humanos, Psicología, Coaching Ejecutivo, Life Coaching, Seguridad e Higiene, Derecho Laboral entre otras.</p>
                <p className='text-white w-[55%] sm:w-full text-right sm:text-left pb-4'>Creemos que el crecimiento de las organizaciones está directamente relacionado con el factor humano, es decir que las personas sean protagonistas, se sientan parte de los objetivos de la empresa, motivados y comprometidos con las tareas que desempeñan.</p>
                <p className='text-white w-[55%] sm:w-full text-right pb-4 sm:text-left'>Nuestros valores son los que hacen que marquemos la diferencia en nuestro trabajo día a día, son nuestra esencia y razón de ser. Nos guían el Compromiso, Profesionalismo, Transparencia, Dedicación, Integridad y Empatía.</p>



            </div>



        </section>

    </Fragment>
  )
}
