import { createSlice } from '@reduxjs/toolkit'
import alura from '../../assets/alura.png'
import avalith from '../../assets/Avalith.png'
import henry from '../../assets/henry-student.png'
import cet from '../../assets/logo-cet.png'
import uniSiglo21 from '../../assets/siglo21.png'
import uniNacional from '../../assets/uns.png'
import familia from '../../assets/icons/family-icon.png'
import correr from '../../assets/icons/running-icon.png'
import bici from '../../assets/icons/bicycle-icon.png'
import nadar from '../../assets/icons/swimming-icon.png'
import series from '../../assets/icons/movies-icon.png'
import musica from '../../assets/icons/auriculares-icon.png'
import programar from '../../assets/icons/web-development-icon.png'
import githubImg from '../../assets/icons/github-icon.png'
import htmlImg from '../../assets/icons/html5-icon.png'
import cssImg from '../../assets/icons/css3-icon.png'
import javascriptImg from '../../assets/icons/javascript-icon.png'
import reactImg from '../../assets/icons/react-icon.png'
import reduxImg from '../../assets/icons/redux-icon.png'
import mysqlImg from '../../assets/icons/mysql-icon.png'
import ahorcado from '../../assets/2do-challenge-Alura.png'
import todolist from '../../assets/Alura-To-Do-List.png'
import breaking from '../../assets/foto-SAP-BreakingBad.png'
import pokemon from '../../assets/Foto-SPA-Pokemon.png'
import powerbi from '../../assets/foto-TabCtrol-PowerBI.png'
import myself from '../../assets/FaceFronRed.jpg'

const initialState = {
   name: "Sebastián D'Alessandro",
   personalImage: myself,
   about: "Soy Analista, Developer FrontEnd, padre de familia, un apasionado por el deporte al aire libre y el desarrollo de tecnologías al servicio de las personas. Poseo más de 15 años de experiencia laboral y dentro de los roles desempeñados puedo destacar el de Analista Sr. del Departamento de Calidad y Jefe Corporativo del Departamento Técnico de Postventa. En ambos puestos, participé como auditor interno con el fin de evaluar las operaciones de las distintos sectores/unidades de negocio, además de realizar el análisis y aplicación de las políticas vigentes. Estos puestos fueron importantes para mejorar mis habilidades blandas y de gestión, pero por sobre todas las cosas, resultaron ser el motor para ir en búsqueda de mi mejor versión. Para ello me encuentro perfeccionándome en el mundo del análisis de datos y el desarrollo de aplicaciones del tipo SPA (Single Page Application) como Front End. Hoy puedo afirmar, sin lugar a dudas, que ha sido una de mis mejores decisiones. Me fascina analizar, transformar, crear y generar soluciones sustentables.",
   contact: {
      celNumber:'+54 9 280 458 3832',
      github: 'https://github.com/SebaDAlessandro',
      linkedin: 'https://www.linkedin.com/in/sebadalessandro/',
      mail: 'sebadalessandro@hotmail.com'
   },
   experience:[
      {
         id:1,
         company: 'Grupo Autosur SA',
         position: 'Jefe Corporativo del Departamento Técnico de Postventa',
         initiation: 'Nov / 2017',
         finished: 'Oct / 2021',   
         description: ['Elaboración de Cascada de Objetivos de la Gerencia de Postventa','Control, seguimiento y análisis de KPIs para la gestación de planes estratégicos del sector de Postventa en función de la Cascada de Objetivos.','Auditor interno y formador de nuevos ingresantes.','Encargado de la gestión y seguimiento de capacitaciones técnicas de los operarios del área de servicios y mantenimiento vehicular.','Encargado de la gestión y seguimiento del mantenimiento edilicio y herramental mínimo indispensable del área de servicios y mantenimiento vehicular.','Encargado del seguimiento y control de Deudores y Cuentas Corrientes del área de Postventa.'],
         success: ['Puedo mencionar las certificaciones Kaizen de Renault y DSI de Nissan ambas con resultados de 100% en el puntaje final. Mi participación se basó en el desarrollo de estándares y procedimientos sustentables, ademas de coordinar y acompañar a los equipos del sector de Postventa a alcanzar los objetivos planteados. Para tal fin, además, cumplí el rol de auditor interno y facilitador de nuevos ingresantes.','Participe como gestor del Tablero de Gestión Económica: Este proyecto se basó en el desarrollo de un tablero de seguimiento de facturación del sector de Postventa el cual permitió realizar un control diario y minuto a minuto de las facturaciones por los distintos canales. Este resultado se comparaba con un prorrateo del presupuesto de gastos a fin de obtener los márgenes de utilidad. Con la información en tiempo real y mediante el seguimiento constante por parte de los lideres de cada sucursal, generamos involucramiento a nivel operativo, se mejoró la elaboración de los planes de acción por parte de los jefes de sección, además de elaborar objetivos mensuales reales, alcanzables y eficientes desde la gerencia. Fue indispensable para concretar el proyecto la colaboración de las áreas de Administración y Finanzas, del Departamento de Calidad, del Departamento Comercial de Postventa y del Departamento de Sistemas. Por último, el Directorio adquirió una herramienta fundamental para la toma de decisiones a nivel macro.', 'Participe en el desarrollo de un Business Plant el cual consistió en la confección de un modelo que permitió, entro otras cuestiones, determinar el parque automotor circulante con un periodo de 10 años teniendo en cuenta la caída estándar por año de vehículos siniestrados. En función del dato resultante pudimos calcular el total de bahías de trabajo necesarios, el personal mínimo requerido (entre asesores, repuesteros,mecánicos, garantistas, etc), ademas de abastecer a los talleres con herramental necesario. Por otra parte, este análisis nos brindó la posibilidad de perfeccionar el objetivo de productividad dentro de los talleres el cual derivó, en la implementación de un CRM Boxes para el sector (el mismo tiene como finalidad generar oportunidades de trabajo bajo la prospección de clientes).','Participé en conjunto con el sector de RRHH donde tuve la responsabilidad de llevar adelante la gestión y seguimiento de las formaciones técnicas de los colaboradores del sector de servicios y mantenimiento vehicular.','Confeccionamos, junto al referente de HSMA (Higiene, Seguridad y Medio Ambiente) un plan de auditorias periódicas con puntos mínimos de revisión con el fin de detectar y prevenir de manera oportuna, incidentes indeseables dentro de los sectores de Taller y Venta de Repuestos. Por otra parte y dentro de mis funciones tuve la responsabilidad de gestionar el mantenimiento de todos los elevadores del Grupo Autosur.','Participe dentro del Departamento de Administración y Finanzas en donde colaboré como referente en todos los inventarios anuales del área de Postventa (específicamente dentro del sector Repuestos).'],
      },{
         id:2,
         company: 'Cervecería y Maltería Quilmes SA',
         position: 'Analista Sr. del Departamento de Calidad',
         initiation: 'Dic / 2005',
         finished: 'May / 2017',  
         description: ['Control, seguimiento y análisis de KPIs para la toma de decisiones. Implementación de los planes de acción derivados de los GAP obtenidos.','Auditor interno de los distintos programas operacionales.','Gestionador del circuito de insumos de planta desde el punto de vista de calidad (desde la materia prima hasta los insumos auxiliares indirectos) incluyendo el reclamo a proveedores.','Administraba el Circuito de "no Conformes" (relacionado a reclamos de clientes, Insumos retenidos y/o Productos retenidos).','Revisaba y actualizaba cada instructivo de trabajo, procedimiento, regla de decisión y listado de acciones relacionados al sector. Participe como capacitador interno.'],
         success: ['Puedo distinguir las certificaciones alcanzadas de VPO (Voyager Plant Optimisation), HACCP (análisis de riesgo y puntos críticos de control), BPM (Buenas Practicas de Manufactura) todas de carácter anual actuando activamente como auditor interno, elaborando los planes de acción y participando como formador en lo que fue la etapa de pre-auditorías.','Fui parte de la elaboración de Descripción de Negocio del área de Calidad, del Mapeo de Procesos del mismo, de la creación de matrices tipo RACI (gestión de Roles y Responsabilidades) y de la implementación del Programa 5S (conocido de este modo debido al nombre de sus cinco etapas, todas ellas con la letra S (en japonés), Seiri (clasificar), Seiton (ordenar), Seiso (limpiar), Seiketsu (estandarizar), Shitsuke (mantener)). Todas estapas importantes y necesarias para la certificación final VPO.','Participé dentro del área de mantenimiento junto al Planner de planta como punta estrella de ese sector: generando los esquemas de mantenimiento preventivos de los equipos y herramientas de los sectores de Elaboración, Producción y Calidad.'],
      },
   ],
   training:[
      {
         id:1,
         institution:'Skill Factory React by Avalith',
         title: 'Developer Front End React',
         image: avalith,
         initiation: 'Abr / 2022',
         finished: 'Ene / 2023',
         status:'FINALIZADO',
         period: '300 hs',
         subjects:['Estructuras de datos y algoritmos','Git - GitHub','HTML','CSS | Bootstrap','JavaScript','React','Redux Toolkit','Autenticación (con Firebase)','Conexión a Backend (con Firebase)','Metodologías Ágiles | Scrum'],
         description:'-',
      },{
         id:2,
         institution:'Programa ONE - Oracle & Alura Latam',
         title: 'Developer Front End / Administración de MySQL / Data Science en OCI y Oracle Analytics',
         image: alura,
         initiation: 'Abr / 2022',
         finished: 'Ene / 2023',
         status:'FINALIZADO',
         period: '500 hs',
         subjects:['Lógica de programación','HTML5','CSS3','JavaScript','Git&GitHub','Administración de MySQL: Seguridad y optimización de la base de datos','Python','Data Science en OCI','Oracle Analytics','Pitch para entrevistas','Hábitos','Foco','Gestión ágil','Emprendimiento','Fundamentos de agilidad','Hábitos de liderazgo','La empresa ágil','Business Model Canvas','Lean Startup','Organización de equipos ágiles','Productividad','Ciclo de vida del producto','LinkedIn','Emprendimiento'],
         description:'-',
      },{
         id:3,
         institution:'Bootcamp - Soy Henry',
         title: 'Developer Full Stack',
         image: henry,
         initiation: 'Oct / 2017',
         finished: 'Mar / 2022',
         status:'EN PAUSA',
         period: '700 hs',
         subjects:['Estructuras de datos y algoritmos','Git - GitHub','HTML','CSS | SASS | Less | Bootstrap','JavaScript','React','Redux','Node','Express','PostgreSQL','Sequelize','Metodologías Ágiles | Scrum'],
         description:'-',
      },{
         id:4,
         institution:'Centro de Estudios Trelew',
         title: 'Técnico Laboratorista',
         image: cet,
         initiation: 'Mar / 2004',
         finished: 'Nov / 2005',
         status:'FINALIZADO',
         period: '2 años',
         subjects:['Filosofía de la Ciencia','Química General y Aplicada','Elementos de la Matemática y Física','Biología General','Química Orgánica y Biológica','Química Analítica I','Introducción a la Computación','Inglés Técnico','Química Analítica II','Ética y Deontología','Técnicas de Laboratorio'],
         description:'El terminar la carrera con un promedio general de 9,09, facilitó que sea tenido en cuenta para ingresar a Cervecería y Maltería Quilmes.',
      },{
         id:5,
         institution:'Universidad Siglo XXI',
         title: 'Administración de Empresas',
         image: uniSiglo21,
         initiation: 'Mar / 2011',
         finished: 'Mar / 2013',
         status:'INCOMPLETO',
         period: '2 años',
         subjects: ['Matemática, Desarrollo Emprendedor','Psicología Social','Recursos Informáticos','Organización y Sistemas','Administración I','Herramientas Matemáticas I – Álgebra','Sistemas de Información Organizacional','Herramientas Matemáticas II – Análisis'],
         description:['En febrero de 2013 nació mi hija y la vida me llevo a priorizar. La decisión fue sencilla... En 2016 retomé mis estudios pero con el cierre de la empresa CMQ en 2017 tuve que volver a empezar desde lo laborar, con lo cual, tuve que postergar mis estudios nuevamente. El terminar una carrera universitaria es algo que me debo a mi mismo y se que en algún momento las condiciones serán las necesarias para retomar y continuar desde donde dejé. Por este motivo, celebro aquellas empresas que apuestan al desarrollo de sus equipos.'],
      },{
         id:6,
         institution:'Universidad Nacional del Sur',
         title: 'Ingenieria en Sistemas de Programación',
         image: uniNacional,
         initiation: 'Feb / 2001',
         finished: 'Jun / 2003',
         status:'INCOMPLETO',
         period: '2 años aprox.',
         subjects: ['No dispongo del temario aprobado...'],
         description:['Luego de la crisis del 2001/2002 a mi familia le fue muy difícil soportar económicamente mi educación en la ciudad de Bahía Blanca. Al regresar, me encontré con la necesidad de aportar en mi hogar. Esto me llevo a trabajar durante la mañana en un depósito de insumos para kioscos. Durante el 2004 y por la tarde, comencé a estudiar la carrera de Técnico Laboratorista y durante las noches, a cursar la Tecnicadura de Reparador de PC.'],
      },
   ],
   technicalSkills:[
      {
         id:1,
         skill:'GitHub',
         image: githubImg,
      },{
         id:2,
         skill:'HTML',
         image: htmlImg,
      },{
         id:3,
         skill:'CSS',
         image: cssImg,
      },{
         id:4,
         skill:'JavaScript',
         image: javascriptImg,
      },{
         id:5,
         skill:'React',
         image: reactImg,
      },{
         id:6,
         skill:'Redux Toolkit',
         image: reduxImg,
      },{
         id:7,
         skill:'My SQL',
         image: mysqlImg,
      }
   ],
   hobbys:[
      {
         id:1,
         hobby:'Mi Familia',
         image: familia,
      },{
         id:2,
         hobby:'Correr',
         image: correr,
      },{
         id:3,
         hobby:'Andar en Bici',
         image: bici,
      },{
         id:4,
         hobby:'Nadar',
         image: nadar,
      },{
         id:5,
         hobby:'Ver Series',
         image: series,
      },{
         id:6,
         hobby:'Escuchar Música',
         image: musica,
      },{
         id:7,
         hobby:'Programar',
         image: programar,
      }
   ],
   projects:[
      {
         id:1,
         title:'Juego del Ahorcado',
         description: '2do Challenge de Oracle - Alura Latam',
         image: ahorcado,
         repositorio: 'https://github.com/SebaDAlessandro/ahorcado_alura',
         demo: 'https://sebadalessandro.github.io/ahorcado_alura/',
         technologies: 'HTML - CSS - JavaScript'
      },{
         id:2,
         title:'To Do List',
         description: 'Ejercicio práctico de Oracle - Alura Latam',
         image: todolist,
         repositorio: 'https://github.com/SebaDAlessandro/manejoDOM',
         demo: 'https://sebadalessandro.github.io/manejoDOM/',
         technologies: 'HTML - CSS - JavaScript'
      },{
         id:3,
         title:'Breaking Bad SPA',
         description: 'Ejercicio práctico - Henry',
         image: breaking,
         repositorio: 'https://github.com/SebaDAlessandro/m2-breakingbad',
         demo: 'https://www.youtube.com/watch?v=nrHBFWm6-o8',
         technologies: 'HTML - CSS - JavaScript - React'
      },{
         id:4,
         title:'Pokemon SPA',
         description: 'Proyecto final - Henry',
         image: pokemon,
         repositorio: 'https://github.com/SebaDAlessandro/PI-Pokemon',
         demo: 'https://www.youtube.com/watch?v=LEXLZZCfc4I',
         technologies: 'HTML - CSS - JavaScript - React - Redux - NodeJs - Express - PostgreSQL - Sequelize'
      },{
         id:5,
         title:'Tablero de Control con Power BI',
         description: 'Proyecto personal',
         image: powerbi,
         repositorio: '',
         demo: 'https://www.youtube.com/watch?v=COvIFUAva3Y',
         technologies: 'PowerBI'
      },
   ]
}

export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      /*increment: (state,) => {

      },*/
   },
})


// Action creators are generated for each case reducer function
//export const { increment } = dataSlice.actions;

export default dataSlice.reducer