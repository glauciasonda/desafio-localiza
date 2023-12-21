import { Btn } from "./StyledShareButton"
import { WhatsApp } from "../../../Constants/Constants"

const ShareButton = () => {
    const url = window.location.href
    const shared = `${WhatsApp}${url}`

    return(
        <>
            <a href={shared}> 
                <Btn>Compartilhe!!</Btn>
            </a>
           
        </>

        
    )
}
export default ShareButton