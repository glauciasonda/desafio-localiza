import { useNavigate } from "react-router-dom"
import Local from "../Local/Local"
import SearchBar from "../SearchBar/SearchBar"
import { Titulo, Container, MyTicketButton } from "./StyleHeader"
import { goToHome, goToMyBooking } from "../../Routes/Coordinator"


export const Header = () => {
    const navigate = useNavigate(); 
    
    return(
        <Container>
            <Titulo onClick={()=>goToHome(navigate)}>Vem Para Pista </Titulo>
            <SearchBar></SearchBar>
            <Local></Local>
            <MyTicketButton onClick={()=>goToMyBooking(navigate)}>Minhas Reservas</MyTicketButton>
        </Container>
    )

}
export default Header