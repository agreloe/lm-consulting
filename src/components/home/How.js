import React, { useState } from 'react'
import styles from '@/styles/How.module.scss'

export default function How() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(undefined);
    const onSelectedRow = (index) => {
        setSelectedRow(index);
        setOpen(true)
        if(selectedRow === index) {
            setOpen(!open)
        }
    };
    const items = [
        {
            'title':'Somos un equipo de profesionales expertos.',
            'description':'Contamos con amplia experiencia, conocimientos y trayectoria en nuestro ámbito laboral. Elegir una consultora de recursos humanos facilita a las empresas a mejorar sus prácticas y políticas de Recursos Humanos.',
        },
        {
            'title':'Facilitamos el ahorro del tiempo y de recursos',
            'description':'Obtener una asesoría en ciertas funciones permite a los equipos internos de recursos humanos enfocarse en actividades estratégicas y de valor agregado, mientras que otras tareas pueden ser manejadas por la consultora. Además, proveemos diferentes herramientas especializadas que pueden ayudar a optimizar los procesos de recursos humanos, mejorar su eficiencia y aumentar la rentabilidad de las organizaciones.',
        },
        {
            'title':'Ofrecemos flexibilidad y adaptabilidad.',
            'description':'Nos adaptamos a las necesidades fluctuantes de la empresa y proporcionamos soluciones a medida según sus requisitos específicos. Ya sea la necesidad de un apoyo temporal para un proyecto específico o una solución a largo plazo para el desarrollo de su departamento de recursos humanos. Proporcionamos servicios flexibles que se ajusten a las necesidades de la empresa en diferentes momentos.',
        },
        {
            'title':'Conocimiento actualizado de las mejores prácticas del mercado.',
            'description':'Nos mantenemos actualizados como asesoría experta integral en las últimas tendencias y prácticas para la gestión de recursos humanos. Esto puede ser valioso para las empresas, ya que les permite estar al tanto de las últimas tendencias en el ámbito laboral y las prácticas de gestión del talento. Asesoramos a las empresas sobre cómo implementar prácticas innovadoras a los efectos de poder ayudarlas a ser más competitivas.',
        },
        {
            'title':'Acompañamos a las empresas en la toma de decisiones y abordaje de posibles dificultades.',
            'description':'Lo hacemos basándonos en nuestra experiencia y conocimientos de manera efectiva y que resulten beneficiosas para las empresas y sus empleados. Estos escenarios pueden darse sobre su estructura organizacional, adquisición de nuevos talentos, conflictos laborales, contractuales, cuestiones de compensación y beneficios, desafíos en la gestión del talento entre otros posibles escenarios.',
        },
        {
            'title':'Trabajamos con confidencialidad y ofrecemos una mirada objetiva.',
            'description':'La confidencialidad y el compromiso de las partes que intervienen en la relación comercial, sea cual fuere el servicio que nos vincule, es un aspecto clave a la hora del éxito en nuestro vínculo a largo plazo.',
        },
    ]


  return (
    <section id='elegirnos' className={`${styles.how}`}>
        <div className="wrap">
            <h2 className='pb-16 sm:pb-8'>¿Por qué elegirnos?</h2>
            <span className={`${styles.line} mb-16 sm:mb-8`}></span>
            <p>Elegir un asesoramiento experto integral en Recursos Humanos es una decisión estratégica y beneficiosa para las empresas. Podemos afirmar que optimizaremos tu negocio porque:</p>

            <div className={`${styles.cards}`}>
                {
                    items.map((item, index)=>(
                        <div key={index} className={`${styles.card}`}>
                            <h5>{item.title}</h5>
                            <div className={open === true && selectedRow === index ? `${styles.description} ${styles.active}` : `${styles.description}`}>
                                <p>{item.description}</p>
                            </div>
                            <button className={`${styles.button}`} onClick={() => onSelectedRow(index)}>{open === true && selectedRow === index ? 'Leer menos' : 'Leer más'}</button>
                        </div>
                    ))
                }


            </div>
        </div>
    </section>
  )
}
