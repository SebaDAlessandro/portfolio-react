import React from 'react'
import './contact.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import GoToTop from '../GoToTop';

const MySwal = withReactContent(Swal)

const Contact = () => {

    const data = useSelector(state => state.data)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data, e) => {

        emailjs.sendForm('service_0c23ohj', 'template_136j8t8', e.target, 'e2NJTh37wdckVMc_g')
        .then((result) => {
              //console.log(result.text);
              MySwal.fire({
                title: "Enviado!",
                text: "Mensaje enviado!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/')
          }, (error) => {
            MySwal.fire({
                title: 'Oops...',
                text: error.message,
                icon: "error",
                confirmButtonText: "Ok",
              })
          });
      ;
    
        // limpiar campos
        e.target.reset();
      };

      const volverFc = ()=>{
        navigate('/')
      }

  return (
    <section id='contact' className='contact__container'>
        <h1 className='contact__details-name'>{data.name}</h1>
        <div className='contact__container-data'>
            <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
                <p className="form__title__contact">Complete el siguiente Formulario</p>
                <div className="form__input-section">
                    <label>
                        <h2 className="form__input-title">Nombre:</h2>
                    </label>
                    <input
                        name="from_name"
                        id="name"
                        className="form__input"
                        type="text"
                        placeholder="Max 30 letras"
                        autoComplete="off"
                        {...register("from_name", {
                        required: {
                            value: true,
                            message: "El campo nombre es requerido",
                        },
                        maxLength: {
                            value: 30,
                            message: "Corrija el campo: máximo 30 letras.",
                        },
                        })}
                    />
                </div>
                {errors.from_name && (
                <span className="form__input-error">{errors.from_name.message}</span>
                )}

                <div className="form__input-section">
                    <label>
                        <h2 className="form__input-title">Correo:</h2>
                    </label>
                    <input
                        name="to_name"
                        id="inputEmail"
                        className="form__input"
                        type="email"
                        placeholder="***@***.***"
                        autoComplete="off"
                        {...register("to_name", {
                        required: {
                            value: true,
                            message: "El campo correo es requerido",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es el correcto. Por favor vuelva a intentar.",
                        },
                        })}
                    />
                </div>
                {errors.to_name && (
                <span className="form__input-error">{errors.to_name.message}</span>
                )}

                <div className="form__textarea-section">
                    <textarea
                        name="message"
                        id="formMensaggeId"
                        className="form__textarea"
                        rows="7"
                        placeholder="Ingrese su mensaje"
                        {...register("message", {
                        required: "El campo mensaje es requerido",
                        })}
                    />
                </div>
                {errors.message && (
                <span className="form__input-error">{errors.message.message}</span>
                )}

                <button className="button__send" type="submit" id="button" value="Send Email">Enviar</button>
            </form>

            <div className='contact__details'>
                <p className='contact__details-email'><AiTwotoneMail /> {data.contact.mail}</p>
                <p className='contact__cel'><AiFillPhone /> {data.contact.celNumber}</p>
                <p className='contact__details-form'><FaMapMarkerAlt /> {data.from}</p>
                {/* eslint-disable-next-line */}
                <iframe className='contact__details-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46486.9147669543!2d-65.34806958257673!3d-43.26332105879068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe0144b6cf6769bb%3A0x9cbd6c76af132e0d!2sTrelew%2C%20Chubut!5e0!3m2!1ses!2sar!4v1675356245142!5m2!1ses!2sar" styleem="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> 
            <button className="button__back" onClick={volverFc}>Volver</button>
        </div>
        <GoToTop />
    </section>
  )
}

export default Contact