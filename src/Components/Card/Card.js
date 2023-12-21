import { useNavigate } from "react-router-dom";
import {goToDetail } from "../../Routes/Coordinator";
import {ImgShow, ItemCard, Pdata, Plocal, Ptitulo, Info } from "./StyleCard"

const Card = (props) => {
    const navigate = useNavigate();
    const {id, imagem, titulo} = props;
    return(
        <ItemCard>
                <ImgShow src={imagem} onClick={()=>goToDetail(navigate, id)} />
                <Info>
                    <Pdata>28 Dez - 22:h</Pdata>
                    <Ptitulo>{titulo} </Ptitulo> 
                    <Plocal>Centro Sul - Florianóolis</Plocal>    
                    
                </Info>
                
        </ItemCard>
    )
}
export default Card