import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Services.module.scss'

export default function Services() {

    const servicios = [
        {
            'title': 'Lorem Ipsum',
            'body': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae modi unde error, deserunt iste ut dicta',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png'
        },
        {
            'title': 'Lorem Ipsum',
            'body': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae modi unde error, deserunt iste ut dicta',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png'
        },
        {
            'title': 'Lorem Ipsum',
            'body': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae modi unde error, deserunt iste ut dicta',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png'
        },
        {
            'title': 'Lorem Ipsum',
            'body': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae modi unde error, deserunt iste ut dicta',
            'icon': 'https://img.icons8.com/ios/50/b6d6a9/human-resources.png'
        },
    ]

  return (
    <section id='servicios' className={`wrap py-32 sm:text-center sm:pt-32 sm:pb-16 ${styles.servicios}`}>
        <h2 className='pb-16 sm:pb-8'>Nuestros Servicios</h2>
        <span className={`${styles.line} mb-16 sm:mb-8`}></span>
        <div className={`${styles.cards}`}>
            {
                servicios.map((item,index)=>(

                    <div key={index} className={`${styles.card}`}>
                        <Image src={item.icon} width={50} height={50} alt='/' />
                        <div className='pt-8 sm:pt-0'>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
