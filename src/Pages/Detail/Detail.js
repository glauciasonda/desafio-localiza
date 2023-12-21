import { useParams } from "react-router-dom"
import CardDetail from "../../Components/CardDetail/CardDetail"
import { useRequest } from "../../Hooks/useRequest";
import { RESOURCE_EVENTO } from "../../Constants/Constants";
import { Container } from "./StyleDetail";
import Header from "../../Components/Header/Header";

const Detail = () => {
    const page = "Detail";
    const pathParams = useParams();
    const [data, isLoading, isError] = useRequest(`${RESOURCE_EVENTO}${pathParams.idEvent}`);
      
    return(
        <>
            <Header />
            <Container>
                {isLoading && <h3>...Carregando</h3>}
                {!isLoading && isError && <h3>Ocorreu um erro! Sorry!! :(</h3>}
                {!isLoading && data === null && <h3>Nenhum evento na sua região! Fique em casa!! ;)</h3> }
                {!isLoading && data !== null && <CardDetail id={data.id}
                                                            imagem={data.imagem}
                                                            titulo={data.titulo}  
                                                            data={data.data}   
                                                            pagamento={data.pagamento}
                                                            page={page} />}
            </Container>
        </>
        
    )

}
export default Detail

