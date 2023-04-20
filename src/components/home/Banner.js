import React from 'react'
import styles from '@/styles/Banner.module.scss'

export default function Banner() {
  return (
    <section className={`${styles.banner}`}>
        <div className="wrap sm:text-center">
            <h1 className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full pb-16 sm:pb-8'>Somos expertos en Gestión del Capital Humano</h1>
            <p className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full'>Tu socio estratégico para el éxito empresarial</p>
        </div>
    </section>
  )
}
