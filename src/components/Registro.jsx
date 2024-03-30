import Header from "./Header"
import SocialButton from "./SocialButton"
import Subtitle from "./Subtitle"
import Formulario from "./Formulario"
import Alerta from "./Alerta"



const Registro = ({messageAlert, setMensaje}) => {
    return(
        <>
            <div className="cardStyle">
                <Header 
                    textTitle = 'Crea una cuenta'
                    />
                <div className="iconStyle">
                    <SocialButton 
                        icon = '/assets/imgs/iconFacebook.png'/>
                    <SocialButton 
                        icon = '/assets/imgs/iconGitHub.png'/>
                    <SocialButton 
                        icon = '/assets/imgs/iconLinkedIn.png' />
                </div>
                <Subtitle 
                    textSubtitle = 'o usa tu email para registrarte'
                />
                <Formulario 
                    buttonColor = 'success'
                    buttonText = 'Registrarse'
                    messageAlert = {messageAlert} 
                    setMensaje = {setMensaje} 
                    colorError = 'danger'
                    iconAlertaError = '/assets/imgs/iconError.svg'
                    colorExito = 'success'
                    iconAlertaExito = '/assets/imgs/iconCheck.svg'/>
            </div>
        </>
    )
}

export default Registro