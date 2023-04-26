import React, {useRef, useLayoutEffect} from 'react'
import styles from '@/styles/Banner.module.scss'
import Link from 'next/link'
import { gsap, Expo } from "gsap/dist/gsap";


export default function Banner() {
  const bannerRef = useRef()
  const q = gsap.utils.selector(bannerRef);
  const tl = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      tl.current = gsap
      .timeline()
      .to(q('.banner-title'),{
        opacity: 1,
        x: 0,
        ease: Expo.easeOut
      })
      .to(q('.banner-subtitle'),{
        opacity: 1,
        x: 0,
        ease: Expo.easeOut
      },
      '-=0.25')
      .to(q('.banner-button'),{
        opacity: 1,
        x: 0,
        ease: Expo.easeOut
      },
      '-=0.25')
    }, bannerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={bannerRef} className={`${styles.banner}`}>
        <div className="wrap sm:text-center flex flex-col gap-4 sm:items-center">
            <h1 className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full banner-title'>Somos expertos en Gestión del Capital Humano</h1>
            <p className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full banner-subtitle'>Tu socio estratégico para el éxito empresarial</p>
            <Link className={`${styles.button} banner-button`} href={'/#servicios'}>Conocer más</Link>
        </div>
    </section>
  )
}
