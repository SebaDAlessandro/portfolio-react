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
         initiation: 'Nov - 2017',
         finished: 'Oct - 2021',   
         description: ['Elaboración de Cascada de Objetivos de la Gerencia de Postventa','Control, seguimiento y análisis de KPIs para la gestación de planes estratégicos del sector de Postventa en función de la Cascada de Objetivos.','Auditor interno y formador de nuevos ingresantes.','Encargado de la gestión y seguimiento de capacitaciones técnicas de los operarios del área de servicios y mantenimiento vehicular.','Encargado de la gestión y seguimiento del mantenimiento edilicio y herramental mínimo indispensable del área de servicios y mantenimiento vehicular.','Encargado del seguimiento y control de Deudores y Cuentas Corrientes del área de Postventa.'],   
      },{
         id:2,
         company: 'Cervecería y Maltería Quilmes SA',
         position: 'Analista Sr. del Departamento de Calidad',
         initiation: 'Dic - 2005',
         finished: 'May - 2017',  
         description: ['Control, seguimiento y análisis de KPIs para la toma de decisiones. Implementación de los planes de acción derivados de los GAP obtenidos.','Auditor interno de los distintos programas operacionales.','Gestionador del circuito de insumos de planta desde el punto de vista de calidad (desde la materia prima hasta los insumos auxiliares indirectos) incluyendo el reclamo a proveedores.','Administraba el Circuito de "no Conformes" (relacionado a reclamos de clientes, Insumos retenidos y/o Productos retenidos).','Revisaba y actualizaba cada instructivo de trabajo, procedimiento, regla de decisión y listado de acciones relacionados al sector. Participe como capacitador interno.'],
      },
   ],
   training:[
      {
         id:1,
         institution:'Skill Factory React by Avalith',
         title: 'Developer Front End React (HTML - CSS - JavaScript - React - Redux Toolkit)',
         image: avalith,
         initiation: 'Abr - 2022',
         finished: 'Ene - 2023',
         status:'Finalizado',
         description:'Bootcamp con mas de 300hs de formación:<br>Tecnologías desarrolladas:<br><br>- Estructuras de datos y algoritmos<br>- Git - GitHub<br>- HTML<br>- CSS | Bootstrap <br>- JavaScript<br>- React | Redux Toolkit<br>- Autenticación (con Firebase)<br>- Conexión a Backend (con Firebase)<br>- Metodologías Ágiles | Scrum',
      },{
         id:2,
         institution:'Programa ONE (Oracle Next Education) - Oracle & Alura Latam',
         title: 'Developer Front End (HTML - CSS - JavaScript)',
         title1: 'Administración de MySQL: Seguridad y optimización de la base de datos',
         title2: 'Data Science en OCI y Oracle Analytics',
         image: alura,
         initiation: 'Abr - 2022',
         finished: 'Ene - 2023',
         status:'Finalizado',
         description:'Bootcamp con mas de 500hs de formación:<br>Tecnologías desarrolladas:<br><br>* HardSkills: Lógica de programación, HTML5 y CSS3, JavaScript, Git&GitHub<br>* Administración de MySQL: Seguridad y optimización de la base de datos<br>* Python, Data Science en OCI y Oracle Analytics<br><br>* SoftSkills: Pitch para entrevistas, Hábitos, Foco, Gestión ágil, Emprendimiento, Fundamentos de agilidad, Hábitos de liderazgo, La empresa ágil, Business Model Canvas, Lean Startup, Organización de equipos ágiles, Productividad, Ciclo de vida del producto, LinkedIn, Emprendimiento',
      },{
         id:3,
         institution:'Bootcamp - Soy Henry',
         title: 'Developer Full Stack',
         image: henry,
         initiation: 'Oct - 2017',
         finished: 'Mar - 2022',
         status:'En pausa',
         description:'Bootcamp intensivo con más de 700 horas de código.<br>Tecnologías desarrolladas:<br><br>- Estructuras de datos y algoritmos<br>- Git - GitHub<br>- HTML<br>- CSS | SASS | Less | Bootstrap<br>- JavaScript<br>- React | Redux<br>- Node | Express<br>- SQL | PostgreSQL | Sequelize<br>- Metodologías Ágiles | Scrum',
      },{
         id:4,
         institution:'Centro de Estudios Trelew',
         title: 'Analista Técnico Laboratorista 2005',
         image: cet,
         initiation: 'Mar - 2003',
         finished: 'Nov - 2005',
         status:'Finalizado',
         description:'Terciario completo',
      },{
         id:5,
         institution:'Universidad Siglo XXI',
         title: 'Administración de Empresas - 2011',
         image: uniSiglo21,
         initiation: 'Mar - 2011',
         finished: 'Abr - 2013',
         status:'Incompleto',
         description:'Universidad incompleta. En febrero de 2013 nació mi hija y tuve que priorizar. En 2016 inicíe nuevamente mis estudios pero con el cierre de la empresa CMQ en 2017 tuve que volver a empezar desde lo laborar, con lo cual, nuevamente tuve que resignar mis estudios una vez más.',
      },{
         id:6,
         institution:'Universidad Nacional del Sur',
         title: 'Ingenieria en Sistemas de Programación - 2001',
         image: uniNacional,
         initiation: 'Feb - 2001',
         finished: 'Feb - 2003',
         status:'Incompleto',
         description:'Universidad incompleta. Luego de la crisis del 2001 me fue imposible soportar económicamente mi educación.',
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