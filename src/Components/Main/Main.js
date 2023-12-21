import { useState } from "react"
import Router from "../../Routes/Router"
import { EventContext } from "../../Contexts/EventContext"
import { MainConteiner } from "./StyleMain"

const Main = () => {
  const [event, setEvent] = useState([])
  const context = {
    event: event,
    setEvent: setEvent
  }
  return(
    <MainConteiner>
      <EventContext.Provider value={context}>
          <Router />
      </EventContext.Provider>
    </MainConteiner>
    
  )
}
export default Main
