import React from 'react'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'

export default function About() {
  return (
    <section id='nosotros' className={`${styles.about}`}>
        <div className="wrap flex flex-col items-end py-16">
            <h2 className='text-white pb-16 sm:pb-8'>Sobre nosotros</h2>
            <span className={`${styles.line} mb-16 sm:mb-8`}></span>
            <p className='text-white w-[50%] sm:w-full text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum. Adipisci error quos quam odio. Esse tempora nihil minus incidunt provident officia maxime quidem qui facilis, consequatur sit facere illum!</p>
            <p className='text-white w-[50%] sm:w-full text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum. Adipisci error quos quam odio. Esse tempora nihil minus incidunt provident officia maxime quidem qui facilis, consequatur sit facere illum!</p>
        </div>

    </section>
  )
}
