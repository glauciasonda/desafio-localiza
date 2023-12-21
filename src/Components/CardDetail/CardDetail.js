import { RESOURCE_RESERVA } from "../../Constants/Constants"
import { useState } from "react"
import { ItemCard, ImgShow, Info, Pdata, Plocal, BoxData, BoxPagamento, Ptitulo } from "./StyleCardDetail"
import PostBotton from "../Buttons/PostBotton/PostBotton"
import ShareButton from "../Buttons/ShareButton/ShareButton"
import PutButton from "../Buttons/PutButton/PutButton"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"

const CardDetail = (props) => {
    const { id, imagem, titulo, data, pagamento, page, dataAtual, pagamentoAtual, idReserva } = props 
    
    const [selectData, setSelectData] = useState(dataAtual)
    const [selectPagamento, setSelectPagamento] = useState(pagamentoAtual)

    const handleChangeData = (e) => {
      setSelectData(e.target.value)
    }
    const handleChangePagamento = (e) => {
      setSelectPagamento(e.target.value)
    }
    
    const body = {
      "idEvento": id,
      "data": selectData,
      "pagamento": selectPagamento,
    }
    
    return(
        <ItemCard>
          <ImgShow src={imagem}  />
                <Info>
                {page === "Detail" && <ShareButton />}
                <Ptitulo>{titulo}</Ptitulo>
                  <BoxData>
                      {data.map((opcao) => {
                        return(<Pdata key={data}>
                                <input type="radio" value={opcao} checked={selectData === opcao} onChange={handleChangeData} />
                                {opcao}
                               </Pdata>
                      )}) }
                    </BoxData>  
                    <BoxPagamento>
                        {pagamento.map((opcao) => {
                            return(<Plocal key={pagamento}>
                                    <input type="radio" value={opcao} checked={selectPagamento === opcao} onChange={handleChangePagamento} />
                                    {opcao}
                                    </Plocal>
                          )}) }
                    </BoxPagamento>
                    {page === "Detail" && <PostBotton url={RESOURCE_RESERVA} body={body} />}
                    {page === "MyBooking" && <PutButton url={`${RESOURCE_RESERVA}${idReserva}`} body={body}  />}
                    {page === "MyBooking" && <DeleteButton url={`${RESOURCE_RESERVA}${idReserva}`} /> }
                    
                </Info>
        </ItemCard>
    )
}
export default CardDetail