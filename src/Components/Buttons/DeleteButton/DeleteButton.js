import axios from "axios"
import { Btn } from "./StyleDeleteButton"

const DeleteButton = (props) => {
    const { url } = props;
    
    const deleteBooking = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.delete(url)
            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }
    return(
        <Btn onClick={(e)=> deleteBooking(e)}>Cancelar Reserva</Btn>
    )

}
export default DeleteButton