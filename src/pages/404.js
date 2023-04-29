import React, {Fragment} from 'react'
import styles from '@/styles/404.module.scss'
import Link from 'next/link'
import ScrollRestorationDisabler from '@/helpers/scrollRestorationDisabler'

export default function Error() {
  return (
    <Fragment>
        <ScrollRestorationDisabler>
        <title>
          Error | Página no encontrada
        </title>
        <meta
          name="title"
          content="Error | Página no encontrada"
        ></meta>
        <meta
          name="description"
          content="Parece que la pagina que estás buscando no existe o se encuentra bajo mantenimiento. Por favor intente más tarde. Muchas gracias"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lmconsulting-rh.com" />
        <meta property="og:title" content="Error | Página no encontrada" />
        <meta property="og:description" content="Parece que la pagina que estás buscando no existe o se encuentra bajo mantenimiento. Por favor intente más tarde. Muchas gracias" />
        <meta
          property="og:image"
          content="https://i.ibb.co/C1CK47b/Meta-Image-LMConsulting-03.png"
        />
        </ScrollRestorationDisabler>
    <section className={`${styles.error}`}>
        <div className="wrap flex gap-4 flex-col">
            <h2>Disculpá las molestias.</h2>
            <h3>Estamos realizando tareas de mantenimiento</h3>
            <p>Por favor intentalo más tarde. Muchas gracias</p>
            <Link className={`${styles.button}`} href={'/'}>Volver al inicio</Link>
        </div>
    </section>
    </Fragment>
  )
}
