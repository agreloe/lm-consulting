import React, { Fragment, useState } from 'react'
import styles from '@/styles/Servicios.module.scss'
import Head from 'next/head'
import Image from 'next/image'

export default function Servicios() {
  const [open, setOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(undefined);
    const onSelectedRow = (index) => {
        setSelectedRow(index);
        setOpen(true)
        if(selectedRow === index) {
            setOpen(!open)
        }
    };

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <Head>
      <title>
          Conocé nuestros Servicios de Asesoramiento Experto Integral
        </title>
        <meta
          name="title"
          content="Conocé nuestros Servicios de Asesoramiento Experto Integral"
        ></meta>
        <meta
          name="description"
          content="Potencia el rendimiento de tu equipo con nuestro asesoramiento experto integral en recursos humanos. Ofrecemos soluciones especializadas en reclutamiento, selección, evaluación, desarrollo y retención del talento. Descubre cómo optimizar tu gestión de recursos humanos con nuestra experiencia y conocimientos."
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lm-consulting.netlify.app" />
        <meta property="og:title" content="Conocé nuestros Servicios de Asesoramiento Experto Integral" />
        <meta property="og:description" content="Potencia el rendimiento de tu equipo con nuestro asesoramiento experto integral en recursos humanos. Ofrecemos soluciones especializadas en reclutamiento, selección, evaluación, desarrollo y retención del talento. Descubre cómo optimizar tu gestión de recursos humanos con nuestra experiencia y conocimientos." />
        <meta
          property="og:image"
          content="https://i.ibb.co/C1CK47b/Meta-Image-LMConsulting-03.png"
        />

      </Head>
      <section className={`${styles.servicios}`}>
        <div className="wrap sm:text-center flex flex-col gap-4 sm:items-center">
          <h1 className='xl:w-[60%] lg:w-[50%] md:w-[68%] w-full'>Nuestros servicios</h1>
        </div>

      </section>
      <section className={`py-16 ${styles['servicios-boxes']}`}>
        <div className="wrap flex gap-4 flex-col">

          <div id='busqueda' className={`py-8 px-4 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <div className='flex'>
              <Image src="https://img.icons8.com/external-edtim-outline-edtim/50/b6d6a9/external-headhunting-hr-edtim-outline-edtim-3.png" alt='icono de servicio' width={50} height={50} />
              <h4 className={`${styles.title} ${open && selectedRow === 1 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(1)}>Búsqueda y Selección</h4>
            </div>
            <div id='box-content' className={`${styles["box-content"]} ${open && selectedRow === 1 ? `${styles.active}` : ``}`}>
              <h5>Conectamos talentos y oportunidades</h5>
              <p>La búsqueda y selección de personal es un proceso esencial en Recursos Humanos e impacta sobre los talentos de la organización. Con nuestra trayectoria, formación y profesionalismo garantizamos que el proceso sea eficiente, efectivo, dinámico y preciso aplicando diferentes estrategias de reclutamiento y headhunting de acuerdo con la especificidad de los puestos a cubrir.</p>
              <p>Nuestro compromiso es ofrecer nuestra mirada objetiva y sincera sobre la situación del mercado, de la empresa, de los puestos y de sus perfiles, con el fin de poder asegurar la contratación de los talentos más calificados con una resolución rápida y certera.</p>
              <h5 className='pt-4'>¿Porque elegir nuestro servicio?</h5>
              <p>Trabajamos apasionadamente para optimizar tu negocio y el capital humano de tu empresa analizado que los perfiles que desempeñan funciones en el presente sean los más calificados e idóneos para ocupar esos puestos de trabajo repasando que cumplan con las competencias y conocimientos requeridos para dicho puesto. A través de diferentes metodologías y herramientas de recursos humanos podemos alcanzar un ambiente laboral saludable con un máximo de rendimiento.</p>
              <p>Nos comprometemos a ofrecer:</p>
              <ul>
                <li>Garantía de servicio, variando los tiempos dependiendo el rango jerárquico de la persona a contratar.</li>
                <li>Confidencialidad y flexibilidad.</li>
                <li>Tiempo de calidad y dedicación para la detección del perfil correcto e indicado.</li>
                <li>Uso de herramientas de reclutamiento y headhunting más usadas en el mercado laboral.</li>
                <li>Sinceridad y confianza en el criterio con el que trabajamos.</li>
                <li>Amplia base de datos de candidatos/as en diferentes mercados de trabajo</li>
                <li>Buscamos los perfiles necesarios sin límites geográficos</li>
              </ul>
            </div>
          </div>

          <div id='analisis' className={`py-8 px-4 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <div className="flex">
              <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/external-outline-geotatah/64/b6d6a9/external-employment-recruitment-outline-geotatah-2.png' />

              <h4 className={`${styles.title} ${open && selectedRow === 2 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(2)}>Análisis y diagnóstico de Estructuras y Puestos</h4>
            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 2 ? `${styles.active}` : ``}`}>
              <h5>Optimiza tu potencial encontrando tu equilibrio organizacional</h5>
              <p>El análisis de estructuras organizacionales y sus puestos de trabajo es un proceso vital para entender cómo funciona una organización y como fue diseñada y pensada.</p>
              <p>Este análisis implica un estudio detallado y exhaustivo de las jerarquías estructurales dentro de las empresas, la distribución de sus roles y responsabilidades entre los diferentes niveles y departamentos, la definición y descripción de los puestos de trabajo puntualizando en las tareas, responsabilidades, conocimientos y habilidades, nivel de autoridad hasta su nivel de autonomía, conocimientos técnicos específicos y relaciones de reporte, con el fin de poder diagnosticar las necesidades que existen en la organización y qué recursos y herramientas se ejecutarán para cubrirlas.</p>
              <p>El estudio detallado de los puestos de trabajo es un aspecto clave para el continuo crecimiento de las empresas y para entender cómo las problemáticas de las organizaciones muchas veces se encuentran íntimamente relacionadas a su estructura organizacional.</p>
              <h5>¿Por qué hacerlo juntos?</h5>
              <p>Garantizamos con nuestra asesoría experta integral alcanzar los siguientes resultados mejorando la eficiencia y la productividad de las empresas:</p>
              <ul>
                <li>Establecer una clara comprensión de las expectativas y requisitos de cada puesto de trabajo.</li>
                <li>Definir y transmitir a los empleados con claridad y transparencia sus roles y responsabilidades.</li>
                <li>Evitar la duplicación de tareas y la confusión en cuanto a responsabilidades en sus funciones.</li>
                <li>Identificar las brechas existentes y áreas de mejora en la estructura y puestos de trabajo asignando eficientemente los recursos existentes o adquisición de nuevos.</li>
                <li>Distinguir la existencia de roles confusos o áreas sobrecargadas de trabajo, permitiendo distribuir correctamente las tareas y responsabilidades.</li>
                <li>Visualizar oportunidades para la promoción y desarrollo profesional del personal estableciendo un plan de carrera dentro de la organización.</li>
              </ul>

            </div>
          </div>

          <div id='asesoria' className={`py-8 px-4 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <div className="flex">
              <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-consulting-business-motivation-smashingstocks-mixed-smashing-stocks.png' />
              <h4 className={`${styles.title} ${open && selectedRow === 3 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(3)}>Asesoría Experta Integral en Recursos Humanos</h4>
            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 3 ? `${styles.active}` : ``}`}>
              <h5>Personas comprometidas, empresas exitosas</h5>
              <p>La asesoría experta integral requiere una planificación estratégica minuciosa, una ejecución efectiva y una evaluación continua para asegurarse de que las prácticas de recursos humanos estén alineadas con los objetivos y necesidades de las organizaciones. Asimismo, precisa una comprensión profunda de las personas y un enfoque centrado en el desarrollo y retención del talento, lo que contribuye a construir una cultura organizacional saludable y exitosa.</p>

              <p>En LM Consulting trabajamos para:</p>
              <ul>
                <li>Una comprensión profunda de las necesidades y objetivos de la empresa.</li>
                <li>Poder reconocer el valor estratégico del capital humano.</li>
                <li>Aportar apoyo y orientación a las organizaciones en la administración y desarrollo de su capital humano.</li>
                <li>Aplicación de conocimientos especializados y enfoques estratégicos específicos para una gestión de Recursos Humanos efectiva y eficiente.</li>
                <li>Resolución integral de las diferentes problemáticas y su especificidad planteadas por las empresas.</li>
              </ul>
            </div>

          </div>

          <div id='planificacion' className={`py-8 px-4 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <div className="flex">

              <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-human-resources-fintech-smashingstocks-mixed-smashing-stocks.png' />
              <h4 className={`${styles.title} ${open && selectedRow === 4 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(4)}>Políticas y Procesos de Recursos Humanos</h4>
            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 4 ? `${styles.active}` : ``}`}>
              <h5>Construyendo puentes para grandes equipos de trabajo</h5>
              <p>Los procesos y las políticas de recursos humanos nos permiten trabajar de manera ordenada y clara a los efectos de poder llegar a los objetivos y metas que cada área planifica para potenciar su desempeño.</p>
              <p>Implementar políticas de recursos humanos significa contar con normas o medidas para organizar, gestionar y administrar el capital humano. De manera conjunta a esta implementación, tener un registro detallado de los procesos de gestión nos permite coordinar planes de acción y trabajar de manera controlada y ordenada. En todas las empresas seguimos procesos y estos a su vez se van convirtiendo en conocimiento importante que nos permitirá progresar desde un área, departamento e inclusive la empresa en su totalidad.</p>
              <p>Implementar y planificar procesos y políticas de recursos humano ayuda a:</p>
              <ul>
                <li>Garantizar que una organización cuente con el talento adecuado para lograr sus objetivos y metas propuestas.</li>
                <li>Identificar brechas en la fuerza laboral actual y futura en las diferentes áreas de la empresa, pudiendo implicar la contratación de nuevo personal, el desarrollo de los empleados existentes o la promoción interna.</li>
                <li>Mejorar procesos que estén vigentes y que funcionan, revisando o ajustándose a los efectos de potenciar su funcionamiento actual.</li>
                <li>Identificar las problemáticas existentes en las áreas de recursos humanos nos permite revisar los procesos y sus políticas de cada una de ellas. Es allí cuando se logra resolver, implementando diferentes planes de acción, las complicaciones que se consideraban normales y habituales.</li>
              </ul>
            </div>
          </div>

          <div id='coaching' className={`py-8 px-4 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <div className="flex">

              <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/ios/50/b6d6a9/human-resources.png' />
              <h4 className={`${styles.title} ${open && selectedRow === 5 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(5)}>Coaching Ejecutivo & Life Coaching</h4>

            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 5 ? `${styles.active}` : ``}`}>
              <h5>Avanza con confianza y alcanza tus metas. Superá tus desafíos y maximiza tu éxito</h5>
              <p>El Coaching es una práctica profesional que se basa en una relación entre un Coach y el cliente, en la cual el Coach utiliza una variedad de técnicas y herramientas para ayudar al cliente a identificar sus fortalezas y debilidades, establecer metas claras, diseñar un plan de acción y realizar un seguimiento del progreso. El coaching ejecutivo y el coaching de vida son dos modalidades de coaching que tienen como objetivo ayudar a las personas a alcanzar sus metas y mejorar su desempeño en áreas específicas de sus vidas. Aunque comparten algunas similitudes, también hay diferencias importantes en su enfoque y aplicación.</p>
              <p>El coaching ejecutivo se centra en el desarrollo de habilidades y competencias de liderazgo en el entorno empresarial, trabaja con los clientes en áreas como la toma de decisiones, la gestión del tiempo, la comunicación efectiva, el desarrollo de habilidades de liderazgo, la gestión del cambio y la resolución de conflictos. El coaching de vida se enfoca en ayudar a las personas a alcanzar sus metas y mejorar su bienestar en diferentes áreas de sus vidas, como relaciones interpersonales, desarrollo personal, equilibrio trabajo-vida, bienestar, entre otros.</p>
              <p>En LM Consulting brindamos sesiones 1:1 de acompañamiento con quiénes necesiten trabajar temas específicos. Estas sesiones son llevadas adelante por profesionales certificados por la ICF (International Coach Federation) como Programa ACTP (Accredited coach training program). En este proceso es fundamental la responsabilidad y el compromiso de quien desea este acompañamiento, para poder así encontrar la respuesta a las preguntas que va a escuchar y lograr así llevarse acciones para trabajar.</p>
            </div>
          </div>

          <div id='gestion' className={`py-8 px-4 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <div className="flex">

            <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/b6d6a9/external-consulting-business-flatart-icons-outline-flatarticons.png' />
            <h4 className={`${styles.title} ${open && selectedRow === 6 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(6)}>Gestión del Desempeño</h4>
            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 6 ? `${styles.active}` : ``}`}>
              <h5>Potencia tus talentos como camino hacia el éxito.</h5>
              <p>La gestión del desempeño por competencias es una metodología efectiva que se utiliza para evaluar, desarrollar y potenciar las habilidades y capacidades de los empleados en función de las competencias necesarias para el éxito en sus roles laborales. Esta metodología se basa en la premisa de que las competencias, entendidas como conjuntos de conocimientos, habilidades, actitudes y comportamientos, son determinantes en el desempeño de los empleados y en el logro de los objetivos organizacionales.</p>
              <p>Este tipo de gestión aporta un gran valor y es que se centra en el desarrollo y mejora continua de los empleados, en lugar de simplemente evaluar su desempeño pasado. Al identificar y evaluar las competencias necesarias para el éxito en un puesto de trabajo específico, se pueden identificar las áreas de mejora de cada empleado y se pueden diseñar planes de desarrollo personalizados para cerrar esas brechas. Esto contribuye a la retención de talento, el aumento de la satisfacción y motivación de los empleados, y el mejoramiento del desempeño general de la organización.</p>
              <p>Otro aspecto importante de la gestión del desempeño por competencias es la retroalimentación continua y constructiva que se proporciona a los empleados. A través de la retroalimentación regular y específica sobre su desempeño en relación con las competencias, los empleados pueden tener una clara comprensión de sus fortalezas y áreas de mejora, lo que les permite ajustar su enfoque y mejorar su desempeño. Esto contribuye al desarrollo profesional de los empleados y a la construcción de una cultura de aprendizaje en la organización.</p>
            </div>

          </div>

          <div id='retencion' className={`py-8 px-4 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <div className="flex">
            <Image width={50} height={50} alt='icono de servicio' src='https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/b6d6a9/external-human-resources-marketing-and-business-management-smashingstocks-mixed-smashing-stocks.png' />
            <h4 className={`${styles.title} ${open && selectedRow === 7 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(7)}>Desarrollo y retención de Talento</h4>
            </div>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 7 ? `${styles.active}` : ``}`}>
              <h5>Nuestro enfoque en el desarrollo y retención del talento. Tu ventaja competitiva</h5>
              <p>El desarrollo y retención de talento son dos aspectos esenciales para el éxito de cualquier organización. El talento, compuesto por las habilidades, conocimientos y capacidades de los empleados, es uno de los recursos más valiosos de una empresa con lo cual es fundamental contar con estrategias efectivas para desarrollar y retener a los empleados talentosos maximizando su contribución a la organización y asegurar su compromiso a largo plazo. Es clave proporcionar a los empleados oportunidades de crecimiento y aprendizaje que les permitan mejorar sus habilidades y conocimientos.</p>
              <p>Con nuestra asesoría:</p>
              <ul>
                <li>Colaboramos con las empresas para que cuenten con la capacidad de mantener a sus empleados talentosos a largo plazo evitando la pérdida de empleados valiosos.</li>
                <li>Ayudamos a evitar un impacto negativo, tanto en la productividad como en el ambiente laboral, por la pérdida de grandes talentos.</li>
                <li>Contribuimos para que las empresas trabajen e implementen herramientas para la retención del talento ya que esto ayuda a construir una imagen positiva de la organización.</li>
                <li>Trabajamos en conjunto para que las organizaciones sean valoradas como un empleador atractivo y con una reputación positiva, lo cual puede despertar el interés de nuevos talentos.</li>
                <li>Fortalecemos dentro de la empresa a los empleados altamente calificados y comprometidos, lo que contribuye a la continuidad del negocio y a la mejora del rendimiento y la productividad.</li>
                <li>Brindamos herramientas para una mayor satisfacción y compromiso por parte de los empleados que ya forman parte de la empresa, logrando un mejor desempeño en el trabajo y su retención.</li>
              </ul>
              <p>LM Consulting brinda las mejores prácticas para el desarrollo y retención de talento. Es importante tener presente que el desarrollo del talento comienza con un proceso de reclutamiento efectivo para atraer a los candidatos adecuados.</p>
            </div>

          </div>

        </div>

      </section>
    </Fragment>
  )
}
