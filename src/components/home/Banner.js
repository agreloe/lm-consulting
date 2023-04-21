import React from 'react'
import styles from '@/styles/Banner.module.scss'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className={`${styles.banner}`}>
        <div className="wrap sm:text-center flex flex-col gap-4 sm:items-center">
            <h1 className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full'>Somos expertos en Gestión del Capital Humano</h1>
            <p className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full'>Tu socio estratégico para el éxito empresarial</p>
            <Link className={`${styles.button}`} href={'/servicios'}>Conocer más</Link>
        </div>
    </section>
  )
}
