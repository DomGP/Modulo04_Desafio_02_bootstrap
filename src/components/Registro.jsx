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
                        icon = 'public/assets/imgs/iconFacebook.png'/>
                    <SocialButton 
                        icon = 'public/assets/imgs/iconGitHub.png'/>
                    <SocialButton 
                        icon = 'public/assets/imgs/iconLinkedIn.png' />
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
                    iconAlertaError = 'public/assets/imgs/iconError.svg'
                    colorExito = 'success'
                    iconAlertaExito = 'public/assets/imgs/iconCheck.svg'/>
            </div>
        </>
    )
}

export default Registro