import { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { useRequest } from "../../Hooks/useRequest"
import { Container } from "./StyleHome";
import { EventContext } from "../../Contexts/EventContext";
import { RESOURCE_EVENTO } from "../../Constants/Constants";


const Home = () => {
    const [data, isLoading, isError] = useRequest(RESOURCE_EVENTO);

    const context = useContext(EventContext);
    const {event, setEvent} = context;

    useEffect(() => {
        setEvent(data);

    }, [data])
    return (
        <>
            <Header />
            <Container>
                {isLoading && <h3>...Carregando</h3>}
                {!isLoading && isError && <h3>Ocorreu um erro! Sorry!! :(</h3>}
                {!isLoading && event === null && <h3>Nenhum evento na sua região! Fique em casa!! ;)</h3> }
                {!isLoading && event !== null && 
                    event.map((element, index) => {
                        return(<Card id={element.id} 
                                    imagem={element.imagem} 
                                    titulo={element.titulo}></Card>)
                    })
                }
            </Container>
        </>
    )
}
export default Home