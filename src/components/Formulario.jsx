import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta';

const Formulario = ({buttonColor, buttonText, messageAlert, setMensaje, colorError, colorExito, iconAlertaError, iconAlertaExito}) => {
    //ESTADOS DEL FORMULARIO
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmarContraseña, setConfirmarContraseña] = useState('')

    const [error, setError] = useState(false)
    const [errorContraseña, setErrorContraseña] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [correcto, setCorrecto] = useState(false)
    
    const validarInput = (e) => {
        e.preventDefault()
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //  REESTABLECE TODOS LOS ESTADOS DE ERROR
        setError(false);
        setErrorContraseña(false);
        setErrorEmail(false);
        setCorrecto(false);

        if(nombre === '' || email === '' || contraseña === '' || confirmarContraseña === ''){
            setError(true)
            setCorrecto(false)
            setMensaje('Todos los campos son obligatorios')
            return
        }/* if(!emailValido.test(email) && (contraseña !== confirmarContraseña)){
            setErrorEmail(true)
            setErrorContraseña(true)
            setError(false)
            setCorrecto(false)
            return

        } */
        if(!emailValido.test(email)){
            setErrorEmail(true)
            setErrorContraseña(false)
            setError(false)
            setCorrecto(false)
            setMensaje('El email debe ser válido')
            return
        }
        if(contraseña !== confirmarContraseña){
            setErrorContraseña(true)
            setError(false)
            setCorrecto(false)
            setMensaje('Las contraseñas deben ser iguales')
            return   
        }
        setError(false);
        setErrorContraseña(false);
        setErrorEmail(false);
        setCorrecto(true);
        setMensaje('El registro ha sido existoso')
        setNombre('');
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    }

    return (
        <>
            <Form 
                className = 'formStyle'
                onSubmit = {validarInput}>

                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicEmail"
                    value = {nombre}
                    onChange = {(e) => setNombre(e.target.value)}>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre" />
                    <Form.Text 
                        className="text-muted"
                        ></Form.Text>
                </Form.Group>

                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicEmail"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}>
                    <Form.Control 
                        type="text"    
                        placeholder="tuemail@ejemplo.com" />
                    <Form.Text 
                        className="text-muted"
                        ></Form.Text>
                </Form.Group>

                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicPassword"
                    value = {contraseña}
                    onChange = {(e) => setContraseña(e.target.value)}>
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" />
                </Form.Group> 

                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicPassword"
                    value = {confirmarContraseña}
                    onChange = {(e) => setConfirmarContraseña(e.target.value)}>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirma tu contraseña" />
                </Form.Group>
        
                <Button 
                    className='buttonStyle' 
                    variant = {buttonColor} 
                    type="submit">
                    {buttonText}
                </Button>
                {error ? <Alerta
                        colorAlert = {colorError}
                        iconAlerta = {iconAlertaError}
                        /* messageAlert = 'Todos los campos son obligatorios' */
                        messageAlert = {messageAlert}
                        />: null}
            {errorContraseña ? <Alerta 
                        colorAlert = {colorError} 
                        iconAlerta = {iconAlertaError}
                        /* messageAlert = 'Las contraseñas deben ser iguales'  */
                        messageAlert = {messageAlert}   
                        /> :null}
            {errorEmail ? <Alerta
                        colorAlert = {colorError} 
                        iconAlerta = {iconAlertaError}
                        /* messageAlert = 'El email debe ser válido' */
                        messageAlert = {messageAlert}
                        /> : null}
            {correcto ? <Alerta
                        colorAlert = {colorExito} 
                        iconAlerta = {iconAlertaExito}
                        /* messageAlert = 'El registro ha sido exitoso' */
                        messageAlert = {messageAlert}
                        /> : null}
            </Form>
        </>
    )
}

export default Formulario