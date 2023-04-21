import React, { Fragment, useState } from 'react'
import styles from '@/styles/Servicios.module.scss'
import Head from 'next/head'




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



          <div id='busqueda' className={`p-8 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 1 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(1)}>Búsqueda y Selección de personal</h4>
            <div id='box-content' className={`${styles["box-content"]} ${open && selectedRow === 1 ? `${styles.active}` : ``}`}>
              <h5>Conectamos talento y oportunidades</h5>
              <p>Búsqueda y Selección es un proceso esencial en Recursos Humanos y por supuesto impacta sobre los talentos de la organización. A partir de nuestra trayectoria, formación y profesionalismo nos esforzamos en garantizar que el proceso sea eficiente, efectivo, dinámico, transparente y preciso, aplicando diferentes estrategias de reclutamiento y headhunting de acuerdo con la especificidad de los puestos a cubrir.</p>
              <p>En LM Consulting nos comprometemos a dar nuestra mirada objetiva y sincera sobre la situación del mercado, de la empresa, de los puestos y de sus perfiles con el fin de poder asegurar la contratación de los talentos más calificados con una resolución rápida y certera.</p>
              <h5 className='pt-4'>¿Porque elegir nuestro servicio?</h5>
              <p>Trabajamos apasionadamente para optimizar tu negocio y el capital humano de la organización, con nuestro análisis y diagnóstico garantizamos que los perfiles de la empresa sean los más calificados e idóneos para ocupar los puestos que desempeñan en la actualidad, repasando que cumplan con las competencias necesarias para llevar a cabo sus funciones. A través de diferentes metodologías y herramientas de recursos humanos podemos alcanzar un ambiente laboral saludable con un máximo de rendimiento.</p>
              <p>Algunos de los valores que nos guían como empresa son el compromiso y profesionalismo, con ellos aportamos a las empresas y a las culturas de estas, personas que acompañen a estos ejes que consideramos importantes sumados a los propuestos por las empresas que requieren nuestro servicio. Nos comprometemos a ofrecer:</p>
              <ul>
                <li>Confección en detalle de la propuesta de servicio, acuerdo comercial expresando las políticas y el proceso del servicio en detalle.</li>
                <li>Garantía de servicio dependiendo el rango jerárquico de la persona a contratar.</li>
                <li>Confidencialidad</li>
                <li>Tiempo de calidad y dedicación necesaria para el perfil correcto e indicado</li>
                <li>Sinceridad y confianza en el criterio con el que trabajamos</li>
                <li>Flexibilidad</li>
                <li>Amplia base de datos de candidatos/as en diferentes mercados de trabajo</li>
                <li>Buscamos los perfiles necesarios sin límites geográficos.</li>
              </ul>
            </div>
          </div>

          <div id='analisis' className={`p-8 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 2 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(2)}>Análisis y diagnóstico de Estructuras y Puestos</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 2 ? `${styles.active}` : ``}`}>
              <h5>Optimiza tu potencial encontrando tu equilibrio organizacional con diagnósticos precisos y soluciones efectivas</h5>
              <p>El análisis de estructuras organizacionales y sus puestos de trabajo es un proceso vital para entender cómo funciona una organización y como fue diseñada y pensada. Este análisis implica un trabajo detallado y exhaustivo de las jerarquías estructurales dentro de las empresas, la distribución de sus roles y responsabilidades entre los diferentes niveles y departamentos que la componen, la definición y descripción de los puestos de trabajo detallando desde tareas, responsabilidades, habilidades requeridas, nivel de autoridad hasta su nivel de autonomía, conocimientos técnicos específicos y relaciones de reporte. . Este estudio detallado de los puestos de trabajo es un aspecto clave para el continuo crecimiento de las empresas, como así también resulta fundamental para entender cómo las problemáticas de las organizaciones muchas veces se encuentran íntimamente relacionadas a su estructura de funcionamiento.</p>
              <h5>¿Por qué hacerlo juntos?</h5>
              <p>Desde LM Consulting garantizamos con nuestra asesoría experta integral alcanzar los siguientes resultados mejorando la eficiencia y la productividad de las empresas:</p>
              <ul>
                <li>Establecer una clara comprensión de las expectativas y requisitos de cada puesto de trabajo.</li>
                <li>Definir y transmitir a los empleados con claridad y transparencia sus roles y responsabilidades.</li>
                <li>Evitar la duplicación de tareas y la confusión en cuanto a quién es responsable de determinada función.</li>
                <li>Identificar las brechas y las áreas de mejora, en la estructura vigente de la empresa y puestos de trabajo que están desactualizados, lo que puede llevar a la reestructuración de la organización y a una asignación más eficiente de los recursos.</li>
                <li>Visualizar si hay demasiadas capas jerárquicas o si hay áreas que están sobrecargadas de trabajo resultando en una distribución ineficiente de las tareas y responsabilidades.</li>
                <li>Proporcionar las oportunidades para la promoción y desarrollo profesional estableciendo un plan de carrera dentro de la organización. </li>
              </ul>

            </div>
          </div>

          <div id='asesoria' className={`p-8 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 3 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(3)}>Asesoría Experta Integral en Recursos Humanos</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 3 ? `${styles.active}` : ``}`}>
              <h5>Personas comprometidas, empresas exitosas</h5>
              <p>La asesoría experta integral requiere una planificación estratégica minuciosa, una ejecución efectiva y una evaluación continua para asegurarse de que las prácticas de recursos humanos estén alineadas con los objetivos y necesidades de la organización.</p>
              <p>La asesoría experta integral en recursos humanos precisa una comprensión profunda de las personas y un enfoque centrado en el desarrollo y retención del talento, lo que contribuye a construir una cultura organizacional saludable y exitosa. Asimismo, se basa en la comprensión profunda de las necesidades y objetivos de la empresa, así como en el reconocimiento del valor estratégico del capital humano.</p>
              <p>La asesoría experta integral en recursos humanos es un servicio que aporta un gran apoyo y orientación a las organizaciones en la administración y desarrollo de su capital humano. Implica el uso de conocimientos especializados y enfoques estratégicos para garantizar que la gestión de los recursos humanos sea efectiva y eficiente.</p>
            </div>

          </div>

          <div id='planificacion' className={`p-8 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 4 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(4)}>Planificación de Políticas y Procesos de Recursos Humanos</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 4 ? `${styles.active}` : ``}`}>
              <h5>Construyendo puentes para grandes equipos de trabajo</h5>
              <p>La planificación, mejora e implementación de políticas y de los procesos de Recursos Humanos es esencial para garantizar que una organización cuente con el talento adecuado para lograr sus objetivos y metas. Estos procesos son vitales para el funcionamiento efectivo de cualquier empresa, ya que abarcan desde la adquisición de talento hasta el desarrollo y retención de los empleados. También implica la identificación de brechas en la fuerza laboral actual y futura de una organización y la implementación de estrategias para cerrar esas brechas. Esto puede implicar la contratación de nuevo personal, el desarrollo de los empleados existentes o la promoción interna.</p>
              <p>La planificación de Recursos Humanos implica anticiparse a las necesidades futuras de talento de una organización y desarrollar estrategias para abordarlas. Esto incluye evaluar la demanda y oferta de empleados en función de las metas y objetivos de la empresa, así como también tener en cuenta factores internos y externos que puedan afectar la disponibilidad de talento, como la economía, la tecnología, la competencia del mercado y las tendencias demográficas.</p>
            </div>
          </div>

          <div id='coaching' className={`p-8 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 5 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(5)}>Coaching Ejecutivo y Life Coaching</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 5 ? `${styles.active}` : ``}`}>
              <h5>Avanza con confianza y alcanza tus metas. Superá tus desafíos y maximiza tu éxito</h5>
              <p>El Coaching es una práctica profesional que se basa en una relación entre el coach y el cliente, en la cual el coach utiliza una variedad de técnicas y herramientas para ayudar al cliente a identificar sus fortalezas y debilidades, establecer metas claras, diseñar un plan de acción y realizar un seguimiento del progreso. A través de diferentes conversaciones, se llevan a cabo sesiones individuales, generalmente de forma presencial o virtual, y puede variar en duración y frecuencia según las necesidades del cliente y los objetivos que se quieran alcanzar. En este proceso es fundamental la responsabilidad y el compromiso de quien desea este acompañamiento, para poder así encontrar la respuesta a las preguntas que va a escuchar y lograr así llevarse acciones para trabajar. </p>
              <p>El coaching ejecutivo y el coaching de vida son dos modalidades de coaching que tienen como objetivo ayudar a las personas a alcanzar sus metas y mejorar su desempeño en áreas específicas de sus vidas. Aunque comparten algunas similitudes, también hay diferencias importantes en su enfoque y aplicación.</p>
              <p>El coaching ejecutivo se centra en el desarrollo de habilidades y competencias de liderazgo en el entorno empresarial. El objetivo principal del coaching ejecutivo es ayudar a los líderes y ejecutivos a mejorar su rendimiento en el trabajo y alcanzar sus metas profesionales. Los coaches ejecutivos trabajan con los clientes en áreas como la toma de decisiones, la gestión del tiempo, la comunicación efectiva, el desarrollo de habilidades de liderazgo, la gestión del cambio y la resolución de conflictos en el entorno empresarial. Como así también, pueden ayudar a los clientes a identificar y superar barreras y obstáculos que puedan estar afectando su rendimiento en el trabajo.</p>
              <p>El coaching de vida se enfoca en ayudar a las personas a alcanzar sus metas y mejorar su bienestar en diferentes áreas de sus vidas, como relaciones interpersonales, desarrollo personal, equilibrio trabajo-vida, salud y bienestar, finanzas, entre otros. Los coaches de vida trabajan con los clientes para identificar sus metas, definir un plan de acción y proporcionarles herramientas y técnicas para lograrlas. Los temas comunes de trabajo en el coaching de vida incluyen la gestión del estrés, la toma de decisiones, el establecimiento de metas y objetivos, la mejora de la autoestima, el manejo de las emociones y la mejora de las habilidades de comunicación.</p>
            </div>
          </div>

          <div id='gestion' className={`p-8 rounded-[10px] bg-[#FDFEFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 6 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(6)}>Gestión del desempeño por competencias</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 6 ? `${styles.active}` : ``}`}>
              <h5>Potencia tus talentos como camino hacia el éxito.</h5>
              <p>La gestión del desempeño por competencias es una metodología moderna y efectiva que se utiliza en el ámbito empresarial para evaluar, desarrollar y potenciar las habilidades y capacidades de los empleados en función de las competencias necesarias para el éxito en sus roles laborales. Esta metodología se basa en la premisa de que las competencias, entendidas como conjuntos de conocimientos, habilidades, actitudes y comportamientos, son determinantes en el desempeño de los empleados y en el logro de los objetivos organizacionales.</p>
              <p>Este tipo de gestión aporta un gran valor y es que se centra en el desarrollo y mejora continua de los empleados, en lugar de simplemente evaluar su desempeño pasado. Al identificar y evaluar las competencias necesarias para el éxito en un puesto de trabajo específico, se pueden identificar las áreas de mejora de cada empleado y se pueden diseñar planes de desarrollo personalizados para cerrar esas brechas. Esto contribuye a la retención de talento, el aumento de la satisfacción y motivación de los empleados, y el mejoramiento del desempeño general de la organización.</p>
              <p>Otro aspecto importante de la gestión del desempeño por competencias es la retroalimentación continua y constructiva que se proporciona a los empleados. A través de la retroalimentación regular y específica sobre su desempeño en relación con las competencias, los empleados pueden tener una clara comprensión de sus fortalezas y áreas de mejora, lo que les permite ajustar su enfoque y mejorar su desempeño. Esto contribuye al desarrollo profesional de los empleados y a la construcción de una cultura de aprendizaje en la organización.</p>
            </div>

          </div>

          <div id='retencion' className={`p-8 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 7 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(7)}>Desarrollo y retención de Talento</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 7 ? `${styles.active}` : ``}`}>
              <h5>Nuestro enfoque en el desarrollo y retención del talento. Tu ventaja competitiva</h5>
              <p>El desarrollo y retención de talento son dos aspectos esenciales para el éxito de cualquier organización. El talento, compuesto por las habilidades, conocimientos y capacidades de los empleados, es uno de los recursos más valiosos de una empresa. Por lo tanto, es fundamental contar con estrategias efectivas para desarrollar y retener a los empleados talentosos, con el objetivo de maximizar su contribución a la organización y asegurar su compromiso a largo plazo. Es clave proporcionar a los empleados oportunidades de crecimiento y aprendizaje que les permitan mejorar sus habilidades y conocimientos. </p>
              <p>Todas las organizaciones deberían contar con la capacidad de mantener a sus empleados talentosos a largo plazo, es crucial para evitar la pérdida de empleados valiosos, que pueden tener un impacto negativo en la productividad y la continuidad del negocio. La retención del talento también ayuda a construir una imagen positiva de la organización como un empleador atractivo, lo cual puede facilitar la atracción de nuevos talentos en el futuro.</p>
              <p>La comunicación abierta y transparente, el establecimiento de relaciones cercanas entre los empleados y sus líderes, y la promoción de un ambiente laboral positivo y colaborativo también son factores clave para retener el talento. Las empresas deben implementar estrategias efectivas de retención de talento para asegurar que los empleados claves se mantengan comprometidos y motivados en la organización.</p>
              <p>Las ventajas de un enfoque sólido de desarrollo y retención de talento son numerosas. Desde permitir a las empresas mantener a empleados altamente calificados y comprometidos, lo que contribuye a la continuidad del negocio y a la mejora del rendimiento y la productividad, hasta ayudar a las empresas a construir una reputación positiva como empleadores, lo que facilita la atracción de talento nuevo y de calidad. Además, el desarrollo del talento puede generar una mayor satisfacción y compromiso de los empleados, lo que a su vez puede llevar a una mayor retención y un mejor desempeño en el trabajo.</p>
              <p>Desde LM Consulting brindamos las mejores prácticas para el desarrollo y retención de talento. Es importante tener presente que el desarrollo del talento comienza con un proceso de reclutamiento efectivo para atraer a los candidatos adecuados.</p>
            </div>

          </div>

          <div id='desarrollo' className={`p-8 rounded-[10px] bg-[#EEFAFF] ${styles.box}`}>
            <h4 className={`${styles.title} ${open && selectedRow === 8 ? `${styles.rotate}` : ``}`} onClick={() => onSelectedRow(8)}>Desarrollo de procesos para una Comunicación Efectiva</h4>
            <div id="box-content" className={`${styles["box-content"]} ${open && selectedRow === 8 ? `${styles.active}` : ``}`}>
              <h5>Transmite tu mensaje, alcanza tus metas: La comunicación efectiva como tu mejor herramienta</h5>
              <p>La comunicación efectiva es fundamental en cualquier aspecto de la vida, ya sea en el ámbito personal, profesional o social. Una comunicación clara, concisa y comprensible puede evitar malentendidos, fortalecer relaciones y alcanzar objetivos de manera exitosa.</p>
              <p>Dentro de las empresas como de los equipos de trabajo que se desarrollan dentro de ellas, la comunicación abierta y transparente como el establecimiento de relaciones cercanas entre los empleados y sus líderes, y la promoción de un ambiente laboral positivo y colaborativo también son factores claves para una comunicación efectiva. Este aspecto de la comunicación también aporta valor a la retención de talento y asegurar que los empleados claves se mantengan comprometidos y motivados en la organización.</p>
            </div>

          </div>

        </div>

      </section>
    </Fragment>
  )
}
