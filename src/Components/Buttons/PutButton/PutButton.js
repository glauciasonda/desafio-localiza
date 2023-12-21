import axios from "axios";
import { Btn } from "./StylePutButton"

const PutButton = (props) => {
    const { url, body } = props;

    const putBooking = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.put(url, body)
            console.log(response)

        } catch(error){
            console.log(error)
        }
    }

    return(
        <Btn onClick={(e)=> putBooking(e)} >Alterar Reserva</Btn>
    )
}
export default PutButton