import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   name: "Sebastián D'Alessandro",
   about: "Soy Analista, Developer FrontEnd, padre de familia, un apasionado por el deporte al aire libre y el desarrollo de tecnologías al servicio de las personas. Poseo más de 15 años de experiencia laboral y dentro de los roles desempeñados puedo destacar el de Analista Sr. del Departamento de Calidad y Jefe Corporativo del Departamento Técnico de Postventa. En ambos puestos, participé como auditor interno con el fin de evaluar las operaciones de las distintos sectores/unidades de negocio, además de realizar el análisis y aplicación de las políticas vigentes. Estos puestos fueron importantes para mejorar mis habilidades blandas y de gestión, pero por sobre todas las cosas, resultaron ser el motor para ir en búsqueda de mi mejor versión. Para ello me encuentro perfeccionándome en el mundo del análisis de datos y el desarrollo de aplicaciones del tipo SPA (Single Page Application) como Front End. Hoy puedo afirmar, sin lugar a dudas, que ha sido una de mis mejores decisiones. Me fascina analizar, transformar, crear y generar soluciones sustentables.",
   contact: {
      celNumber:'+54 9 280 458 3832',
      github: 'https://github.com/SebaDAlessandro',
      linkedin: 'https://www.linkedin.com/in/sebadalessandro/',
      mail: 'sebadalessandro@hotmail.com'
   }
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