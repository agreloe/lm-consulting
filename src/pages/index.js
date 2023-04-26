import React, { Fragment } from 'react'
import Head from 'next/head'
import Banner from '@/components/home/Banner'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
import How from '@/components/home/How'

export default function Home() {
  return (

      <Fragment>
        <Head>
        <title>
            Mejora tu Gestión de Recursos Humanos con Nuestro Asesoramiento Experto Integral
          </title>
          <meta
            name="title"
            content="Mejora tu Gestión de Recursos Humanos con Nuestro Asesoramiento Experto Integral"
          ></meta>
          <meta
            name="description"
            content="Potencia el rendimiento de tu equipo con nuestro asesoramiento experto integral en recursos humanos. Ofrecemos soluciones especializadas en reclutamiento, selección, evaluación, desarrollo y retención del talento. Descubre cómo optimizar tu gestión de recursos humanos con nuestra experiencia y conocimientos."
          ></meta>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lm-consulting.netlify.app/" />
          <meta property="og:title" content="Mejora tu Gestión de Recursos Humanos con Nuestro Asesoramiento Experto Integral" />
          <meta property="og:description" content="Potencia el rendimiento de tu equipo con nuestro asesoramiento experto integral en recursos humanos. Ofrecemos soluciones especializadas en reclutamiento, selección, evaluación, desarrollo y retención del talento. Descubre cómo optimizar tu gestión de recursos humanos con nuestra experiencia y conocimientos." />
          <meta
            property="og:image"
            content="https://i.ibb.co/C1CK47b/Meta-Image-LMConsulting-03.png"
          />

        </Head>
        <Banner />
        <About />
        <Services />
        <How />
        <Contact />
      </Fragment>
  )
}
