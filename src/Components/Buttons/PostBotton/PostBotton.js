import axios from "axios"
import { Btn } from "./StylePostBotton"


const PostBotton = (props) => {
    const { url, body} = props

    const postBooking = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(url, body);
            console.log(response)
        } catch(error){
          console.log("erro no post: ", error.response)
        }
      }
    return(
        <Btn onClick={(e) => postBooking(e)} > Reservar </Btn>
    )

}
export default PostBotton