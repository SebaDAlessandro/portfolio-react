import { createSlice } from '@reduxjs/toolkit'
import alura from '../../assets/alura.png'
import avalith from '../../assets/Avalith.png'
import henry from '../../assets/henry-student.png'
import cet from '../../assets/logo-cet.png'
import uniSiglo21 from '../../assets/siglo21.png'
//import uniNacional from '../../assets/uns.png'
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
import bootstrapImg from '../../assets/icons/bootstrap-icon.png'
import officeImg from '../../assets/icons/office-icon.png'
import excelImg from '../../assets/icons/excel-icon.png'
import powerbiImg from '../../assets/icons/powerbi-icon.png'
import oralceAnalyticsImg from '../../assets/icons/oracle-analytics-desktop.png'
import notionImg from '../../assets/icons/notion-icon.png'
import discordImg from '../../assets/icons/discord-icon.png'
import zoomImg from '../../assets/icons/zoom.png'
import meetImg from '../../assets/icons/meet-icon.png'
import slackImg from '../../assets/icons/slack-icon.png'
import library from '../../assets/libraryApp.png'
import ecommerce from '../../assets/ecommerce-avalith.png'
import tpAvalith from '../../assets/tp1-avalith.png'

const initialState = {
   name: "Sebasti??n D'Alessandro",
   from: 'Trelew - Chubut - Argentina',
   personalImage: myself,
   about: "Soy Analista, Developer FrontEnd, padre de familia, un apasionado por el deporte al aire libre y el desarrollo de tecnolog??as al servicio de las personas. Poseo m??s de 15 a??os de experiencia laboral y dentro de los roles desempe??ados puedo destacar el de Analista Sr. del Departamento de Calidad y Jefe Corporativo del Departamento T??cnico de Postventa. En ambos puestos, particip?? como auditor interno con el fin de evaluar las operaciones de los distintos sectores/unidades de negocio, adem??s de realizar el desarrollo, seguimiento y control de objetivos mediante la confecci??n de planes de acci??n a mediano y largo plazo, m??s la elaboraci??n y aplicaci??n de pol??ticas internas. Ambos cargos esenciales para mejorar mis habilidades blandas y de gesti??n, pero por sobre todas las cosas, resultaron ser el motor para ir en b??squeda de mi mejor versi??n. Para ello me encuentro perfeccion??ndome en el mundo del an??lisis de datos y el desarrollo de aplicaciones del tipo SPA (Single Page Application) como Front End. Hoy puedo afirmar, sin lugar a dudas, que ha sido una de mis mejores decisiones. Me fascina analizar, transformar, crear y generar soluciones sustentables.",
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
         position: 'Jefe Corporativo del Departamento T??cnico de Postventa',
         initiation: 'Nov / 2017',
         finished: 'Oct / 2021',   
         description: ['Elaboraci??n de Cascada de Objetivos de la Gerencia de Postventa','Control, seguimiento y an??lisis de KPIs para la gestaci??n de planes estrat??gicos del sector de Postventa en funci??n de la Cascada de Objetivos.','Auditor interno y formador de nuevos ingresantes.','Encargado de la gesti??n y seguimiento de capacitaciones t??cnicas de los operarios del ??rea de servicios y mantenimiento vehicular.','Encargado de la gesti??n y seguimiento del mantenimiento edilicio y herramental m??nimo indispensable del ??rea de servicios y mantenimiento vehicular.','Encargado del seguimiento y control de Deudores y Cuentas Corrientes del ??rea de Postventa.'],
         success: ['Puedo mencionar las certificaciones Kaizen de Renault y DSI de Nissan ambas con resultados de 100% en el puntaje final. Mi participaci??n se bas?? en el desarrollo de est??ndares y procedimientos sustentables, ademas de coordinar y acompa??ar a los equipos del sector de Postventa a alcanzar los objetivos planteados. Para tal fin, adem??s, cumpl?? el rol de auditor interno y facilitador de nuevos ingresantes.','Participe como gestor del Tablero de Gesti??n Econ??mica: Este proyecto se bas?? en el desarrollo de un tablero de seguimiento de facturaci??n del sector de Postventa el cual permiti?? realizar un control diario y minuto a minuto de las facturaciones por los distintos canales. Este resultado se comparaba con un prorrateo del presupuesto de gastos a fin de obtener los m??rgenes de utilidad. Con la informaci??n en tiempo real y mediante el seguimiento constante por parte de los lideres de cada sucursal, generamos involucramiento a nivel operativo, se mejor?? la elaboraci??n de los planes de acci??n por parte de los jefes de secci??n, adem??s de elaborar objetivos mensuales reales, alcanzables y eficientes desde la gerencia. Fue indispensable para concretar el proyecto la colaboraci??n de las ??reas de Administraci??n y Finanzas, del Departamento de Calidad, del Departamento Comercial de Postventa y del Departamento de Sistemas. Por ??ltimo, el Directorio adquiri?? una herramienta fundamental para la toma de decisiones a nivel macro.', 'Participe en el desarrollo de un Business Plant el cual consisti?? en la confecci??n de un modelo que permiti??, entro otras cuestiones, determinar el parque automotor circulante con un periodo de 10 a??os teniendo en cuenta la ca??da est??ndar por a??o de veh??culos siniestrados. En funci??n del dato resultante pudimos calcular el total de bah??as de trabajo necesarios, el personal m??nimo requerido (entre asesores, repuesteros,mec??nicos, garantistas, etc), ademas de abastecer a los talleres con herramental necesario. Por otra parte, este an??lisis nos brind?? la posibilidad de perfeccionar el objetivo de productividad dentro de los talleres el cual deriv??, en la implementaci??n de un CRM Boxes para el sector (el mismo tiene como finalidad generar oportunidades de trabajo bajo la prospecci??n de clientes).','Particip?? en conjunto con el sector de RRHH donde tuve la responsabilidad de llevar adelante la gesti??n y seguimiento de las formaciones t??cnicas de los colaboradores del sector de servicios y mantenimiento vehicular.','Confeccionamos, junto al referente de HSMA (Higiene, Seguridad y Medio Ambiente) un plan de auditorias peri??dicas con puntos m??nimos de revisi??n con el fin de detectar y prevenir de manera oportuna, incidentes indeseables dentro de los sectores de Taller y Venta de Repuestos. Por otra parte y dentro de mis funciones tuve la responsabilidad de gestionar el mantenimiento de todos los elevadores del Grupo Autosur.'],
      },{
         id:2,
         company: 'Cervecer??a y Malter??a Quilmes SA',
         position: 'Analista Sr. del Departamento de Calidad',
         initiation: 'Dic / 2005',
         finished: 'May / 2017',  
         description: ['Control, seguimiento y an??lisis de KPIs para la toma de decisiones. Implementaci??n de los planes de acci??n derivados de los GAP obtenidos.','Auditor interno de los distintos programas operacionales.','Gestionador del circuito de insumos de planta desde el punto de vista de calidad (desde la materia prima hasta los insumos auxiliares indirectos) incluyendo el reclamo a proveedores.','Administraba el Circuito de "no Conformes" (relacionado a reclamos de clientes, Insumos retenidos y/o Productos retenidos).','Revisaba y actualizaba cada instructivo de trabajo, procedimiento, regla de decisi??n y listado de acciones relacionados al sector. Participe como capacitador interno.'],
         success: ['Puedo distinguir las certificaciones alcanzadas de VPO (Voyager Plant Optimisation), HACCP (an??lisis de riesgo y puntos cr??ticos de control), BPM (Buenas Practicas de Manufactura) todas de car??cter anual actuando activamente como auditor interno, elaborando los planes de acci??n y participando como formador en lo que fue la etapa de pre-auditor??as.','Fui parte de la elaboraci??n de Descripci??n de Negocio del ??rea de Calidad, del Mapeo de Procesos del mismo, de la creaci??n de matrices tipo RACI (gesti??n de Roles y Responsabilidades) y de la implementaci??n del Programa 5S (conocido de este modo debido al nombre de sus cinco etapas, todas ellas con la letra S (en japon??s), Seiri (clasificar), Seiton (ordenar), Seiso (limpiar), Seiketsu (estandarizar), Shitsuke (mantener)). Todas estapas importantes y necesarias para la certificaci??n final VPO.','Particip?? dentro del ??rea de mantenimiento junto al Planner de planta como punta estrella de ese sector, mi responsabilidad fue generar los esquemas de mantenimiento preventivos de los equipos y herramientas de los sectores de Elaboraci??n, Producci??n y Calidad.'],
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
         status:'Finalizado',
         period: '300 hs',
         subjects:['Estructuras de datos y algoritmos','Git - GitHub','HTML','CSS | Bootstrap','JavaScript','React','Redux Toolkit','Autenticaci??n (con Firebase)','Conexi??n a Backend (con Firebase)','Metodolog??as ??giles | Scrum'],
         description:'-',
      },{
         id:2,
         institution:'Programa ONE - Oracle & Alura Latam',
         title: 'Developer Front End / Administraci??n de MySQL / Data Science en OCI y Oracle Analytics',
         image: alura,
         initiation: 'Abr / 2022',
         finished: 'Ene / 2023',
         status:'Finalizado',
         period: '500 hs',
         subjects:['L??gica de programaci??n','HTML5','CSS3','JavaScript','Git&GitHub','Administraci??n de MySQL: Seguridad y optimizaci??n de la base de datos','Python','Data Science en OCI','Oracle Analytics','Pitch para entrevistas','H??bitos','Foco','Gesti??n ??gil','Emprendimiento','Fundamentos de agilidad','H??bitos de liderazgo','La empresa ??gil','Business Model Canvas','Lean Startup','Organizaci??n de equipos ??giles','Productividad','Ciclo de vida del producto','LinkedIn','Emprendimiento'],
         description:'-',
      },{
         id:3,
         institution:'Bootcamp - Soy Henry',
         title: 'Developer Full Stack',
         image: henry,
         initiation: 'Oct / 2017',
         finished: 'Mar / 2022',
         status:'En Pausa',
         period: '700 hs',
         subjects:['Estructuras de datos y algoritmos','Git - GitHub','HTML','CSS | SASS | Less | Bootstrap','JavaScript','React','Redux','Node','Express','PostgreSQL','Sequelize','Metodolog??as ??giles | Scrum'],
         description:'-',
      },{
         id:4,
         institution:'Centro de Estudios Trelew',
         title: 'T??cnico Laboratorista',
         image: cet,
         initiation: 'Mar / 2004',
         finished: 'Nov / 2005',
         status:'Finalizado',
         period: '2 a??os',
         subjects:['Filosof??a de la Ciencia','Qu??mica General y Aplicada','Elementos de la Matem??tica y F??sica','Biolog??a General','Qu??mica Org??nica y Biol??gica','Qu??mica Anal??tica I','Introducci??n a la Computaci??n','Ingl??s T??cnico','Qu??mica Anal??tica II','??tica y Deontolog??a','T??cnicas de Laboratorio'],
         description:'El terminar la carrera con un promedio general de 9,09, facilit?? que sea tenido en cuenta para ingresar a Cervecer??a y Malter??a Quilmes.',
      },{
         id:5,
         institution:'Universidad Siglo XXI',
         title: 'Administraci??n de Empresas',
         image: uniSiglo21,
         initiation: 'Mar / 2011',
         finished: 'Mar / 2013',
         status:'Incompleto',
         period: '2 a??os',
         subjects: ['Matem??tica, Desarrollo Emprendedor','Psicolog??a Social','Recursos Inform??ticos','Organizaci??n y Sistemas','Administraci??n I','Herramientas Matem??ticas I ??? ??lgebra','Sistemas de Informaci??n Organizacional','Herramientas Matem??ticas II ??? An??lisis'],
         description:['En febrero de 2013 naci?? mi hija y la vida me llevo a priorizar. La decisi??n fue sencilla... En 2016 retom?? mis estudios pero con el cierre de la empresa CMQ en 2017 tuve que volver a empezar desde lo laborar, con lo cual, tuve que postergar mis estudios nuevamente. El terminar una carrera universitaria es algo que me debo a mi mismo y se que en alg??n momento las condiciones ser??n las necesarias para retomar y continuar desde donde dej??. Por este motivo, celebro aquellas empresas que apuestan al desarrollo de sus equipos.'],
      }/* ,{
         id:6,
         institution:'Universidad Nacional del Sur',
         title: 'Ingenieria en Sistemas de Programaci??n',
         image: uniNacional,
         initiation: 'Feb / 2001',
         finished: 'Jun / 2003',
         status:'Incompleto',
         period: '2 a??os aprox.',
         subjects: ['No dispongo del temario aprobado...'],
         description:['Luego de la crisis del 2001/2002 a mi familia le fue muy dif??cil soportar econ??micamente mi educaci??n en la ciudad de Bah??a Blanca. Al regresar, me encontr?? con la necesidad de aportar en mi hogar. Esto me llevo a trabajar durante la ma??ana en un dep??sito de insumos para kioscos. Durante el 2004 y por la tarde, comenc?? a estudiar la carrera de T??cnico Laboratorista y durante las noches, a cursar la Tecnicadura de Reparador de PC.'],
      }, */
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
         skill:'Booststrap',
         image: bootstrapImg,
      },{
         id:8,
         skill:'My SQL',
         image: mysqlImg,
      },{
         id:9,
         skill:'Office',
         image: officeImg,
      },{
         id:10,
         skill:'Excel',
         image: excelImg,
      },{
         id:11,
         skill:'PowerBI',
         image: powerbiImg,
      },{
         id:12,
         skill:'Oracle Analytics Desktop',
         image: oralceAnalyticsImg,
      },{
         id:13,
         skill:'Notrion',
         image: notionImg,
      },{
         id:14,
         skill:'Discord',
         image: discordImg,
      },{
         id:15,
         skill:'Zoom',
         image: zoomImg,
      },{
         id:16,
         skill:'Meet',
         image: meetImg,
      },{
         id:17,
         skill:'Slack',
         image: slackImg,
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
         hobby:'Escuchar M??sica',
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
         title:'Juego del Ahorcado (for desktop)',
         description: 'Challenge de Oracle - Alura Latam',
         image: ahorcado,
         repositorio: 'https://github.com/SebaDAlessandro/ahorcado_alura',
         demo: 'https://sebadalessandro.github.io/ahorcado_alura/',
         technologies: 'HTML - CSS - JavaScript'
      },{
         id:2,
         title:'To Do List',
         description: 'Ejercicio pr??ctico de Oracle - Alura Latam',
         image: todolist,
         repositorio: 'https://github.com/SebaDAlessandro/manejoDOM',
         demo: 'https://sebadalessandro.github.io/manejoDOM/',
         technologies: 'HTML - CSS - JavaScript'
      },{
         id:3,
         title:'Breaking Bad SPA',
         description: 'Ejercicio pr??ctico - Henry',
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
      },{
         id:6,
         title:'Library App Avalith',
         description: 'Proyecto grupal',
         image: library,
         repositorio: 'https://github.com/lemarchesi09/sf-library-app',
         demo: 'https://sf-library-app.netlify.app/',
         technologies: 'HTML - CSS - JavaScript - React - Redux Toolkit - Firebase - Sweetalert2'
      },{
         id:7,
         title:'E-commerce Avalith',
         description: 'Proyecto grupal',
         image: ecommerce,
         repositorio: 'https://github.com/Ferclemens/Context-EcommerceApp-SkillFactory',
         demo: 'https://ecommerce-app-skill-factory.vercel.app/',
         technologies: 'HTML - CSS - JavaScript - React - Redux Toolkit - Context - Bootstrap - Firebase - Sweetalert2'
      },{
         id:8,
         title:'TP1 - Avalith',
         description: 'Proyecto individual',
         image: tpAvalith,
         repositorio: 'https://github.com/SebaDAlessandro/tp1-skillfactory-react',
         demo: 'https://sebadalessandro.github.io/TP1_Skill_Factory/',
         technologies: 'HTML - CSS - JavaScript - React'
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