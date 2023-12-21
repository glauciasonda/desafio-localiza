import Balao from "../../Assets/Balao.png"
import Seta from "../../Assets/Seta.png"
import { Container, Icone, Plocal } from "./StyleLocal"

const Local = () => {
    return(
        <Container>
            <Icone src={Balao}></Icone>
            <Plocal>Florianópolis</Plocal>
            <Icone src={Seta}></Icone>
        </Container>
    )
}
export default Local