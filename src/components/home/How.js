import React, { useState } from 'react'
import styles from '@/styles/How.module.scss'

export default function How() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(undefined);
    const onSelectedRow = (index) => {
        setSelectedRow(index);
        setOpen(true)
        if(selectedRow === index) {
            setOpen(false)
        }
    };
    const items = [
        {
            'title':'Somos un equipo de profesionales expertos',
            'description':'Con amplia experiencia y trayectoria en el campo de la gestión de recursos humanos. Somos profesionales con amplios conocimientos y experiencias en áreas como la contratación, la gestión del talento, la administración de nóminas, la capacitación y desarrollo de empleados, la gestión del desempeño y más. Al elegir una consultora de recursos humanos, las empresas mejorar sus prácticas y políticas de recursos humanos.',
        },
        {
            'title':'Ahorro de tiempo y recursos',
            'description':'La gestión de recursos humanos puede ser compleja y consumir mucho tiempo y recursos. Al externalizar ciertas funciones de recursos humanos a una consultora, las empresas pueden ahorrar tiempo y recursos internos. Esto permite a los equipos internos de recursos humanos enfocarse en actividades estratégicas y de valor agregado, mientras que las tareas más operativas y administrativas son manejadas por la consultora. Además, las consultoras de recursos humanos suelen tener acceso a tecnologías y herramientas especializadas que pueden ayudar a optimizar los procesos de recursos humanos y mejorar su eficiencia.',
        },
        {
            'title':'Flexibilidad y adaptabilidad',
            'description':'Las consultoras de recursos humanos ofrecen flexibilidad y adaptabilidad a las empresas. Pueden adaptarse a las necesidades cambiantes de la empresa y proporcionar soluciones a medida según sus requisitos específicos. Ya sea que una empresa necesite apoyo temporal para un proyecto específico, o una solución a largo plazo para el desarrollo de su departamento de recursos humanos, una consultora puede proporcionar servicios flexibles que se ajusten a las necesidades de la empresa en diferentes momentos.',
        },
        {
            'title':'Conocimiento actualizado de las mejores prácticas del mercado',
            'description':'Las consultoras de recursos humanos se mantienen actualizadas con las últimas tendencias y mejores prácticas del mercado en el campo de la gestión de recursos humanos. Esto puede ser valioso para las empresas, ya que les permite estar al tanto de las últimas tendencias en el ámbito laboral, las regulaciones gubernamentales y las prácticas de gestión del talento. Una consultora puede asesorar a la empresa sobre cómo implementar prácticas innovadoras y cumplir con las regulaciones laborales vigentes, lo que puede ayudar a mantener a la empresa en línea con las mejores prácticas del mercado y a ser más competitiva.',
        },
        {
            'title':'Solución de problemas y toma de decisiones informada',
            'description':'Las consultoras de recursos humanos pueden ayudar a las empresas a solucionar problemas y tomar decisiones informadas en relación con los recursos humanos. Ya sea que se trate de conflictos laborales, cuestiones de compensación y beneficios, o desafíos en la gestión del talento, una consultora puede brindar orientación y asesoramiento basado en su experiencia y conocimientos. Esto puede ayudar a las empresas a abordar problemas de manera efectiva y tomar decisiones informadas que sean beneficiosas para la empresa y sus empleados.',
        },
        {
            'title':'Confidencialidad y objetividad',
            'description':'Las consultoras de recursos humanos pueden ayudar a las empresas a solucionar problemas y tomar decisiones informadas en relación con los recursos humanos. Ya sea que se trate de conflictos laborales, cuestiones de compensación y beneficios, o desafíos en la gestión del talento, una consultora puede brindar orientación y asesoramiento basado en su experiencia y conocimientos. Esto puede ayudar a las empresas a abordar problemas de manera efectiva y tomar decisiones informadas que sean beneficiosas para la empresa y sus empleados.',
        },
    ]


  return (
    <section id='elegirnos' className={`${styles.how}`}>
        <div className="wrap">
            <h2 className='pb-16 sm:pb-8'>¿Por qué elegirnos?</h2>
            <span className={`${styles.line} mb-16 sm:mb-8`}></span>
            <p>Elegir una Asesoría experta en gestión integral de recursos humanos es una decisión estratégica y beneficiosa para las empresas en muchos aspectos. Desde LM Consulting te garantizamos que optimizaremos tu negocio por varias razones, te contamos algunas a continuación:</p>

            <div className={`${styles.cards}`}>
                {
                    items.map((item, index)=>(
                        <div key={index} className={`${styles.card}`}>
                            <h5>{item.title}</h5>
                            <div className={open === true && selectedRow === index ? `${styles.description} ${styles.active}` : `${styles.description}`}>
                                <p>{item.description}</p>
                            </div>
                            <button className={`${styles.button}`} onClick={() => onSelectedRow(index)}>{open === true && selectedRow === index ? 'Mostrar menos' : 'Mostrar más'}</button>
                        </div>
                    ))
                }


            </div>
        </div>
    </section>
  )
}
