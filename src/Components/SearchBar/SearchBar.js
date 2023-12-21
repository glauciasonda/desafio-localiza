import { Form, Icone, Input, Lupa } from "./StyleSearchBar"
import IconeLupa from "../../Assets/Lupa.png"
import { useState } from "react"
import { useContext } from "react";
import { EventContext } from "../../Contexts/EventContext";


const SearchBar = () => {
    const [inputSearch, setInputSearch] = useState("");
    const context = useContext(EventContext);
    const {event, setEvent} = context;

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value);

    }

    const search = (e) => {
        e.preventDefault();
        const filterEvent = event.filter((item) => {
            return(item.titulo.toUpperCase().includes(inputSearch.toUpperCase()))
        })
        setEvent(filterEvent);
        setInputSearch("");

    }

    return(
        <Form>
            <Input value={inputSearch} onChange={(e)=>handleInputSearch(e)} />
            <Lupa onClick={(e)=>search(e)}><Icone src={IconeLupa} /></Lupa>
        </Form>
    )

}
export default SearchBar