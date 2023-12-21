import CardDetail from "../../Components/CardDetail/CardDetail"
import Header from "../../Components/Header/Header"
import { RESOURCE_RESERVA } from "../../Constants/Constants"
import { useRequest } from "../../Hooks/useRequest"
import { Container } from "./StyleMyBooking"

const MyBooking = () => {
    const page = "MyBooking";
    const [data, isLoading, isError] = useRequest(RESOURCE_RESERVA)

    return(
        <>
            <Header />
            <Container>
            {isLoading && <h3>...Carregando</h3>}
                {!isLoading && isError && <h3>Ocorreu um erro! Sorry!! :(</h3>}
                {!isLoading && data === null && <h3>Você não tem nenhuma reserva =(</h3> }
                {!isLoading && data !== null && 
                    data.map((element, index) => {
                        return(<CardDetail id={element.idEvento} 
                                    imagem={element.evento.imagem} 
                                    titulo={element.evento.titulo}
                                    data={element.evento.data}
                                    pagamento={element.evento.pagamento}
                                    page={page}
                                    dataAtual={element.dataAtual}
                                    pagamentoAtual={element.pagamentoAtual}
                                    idReserva={element.id}>

                                </CardDetail>)
                    })
                }
            </Container>
        </>
        
    )
}
export default MyBooking