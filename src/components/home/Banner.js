import React from 'react'
import styles from '@/styles/Banner.module.scss'

export default function Banner() {
  return (
    <section className={`${styles.banner}`}>
        <div className="wrap sm:text-center">
            <h1 className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full pb-16 sm:pb-8'>Soluciones para tu negocio</h1>
            <p className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae modi unde error, deserunt iste ut dicta, nesciunt tenetur obcaecati possimus assumenda numquam, cum magnam reprehenderit.</p>
        </div>
    </section>
  )
}
