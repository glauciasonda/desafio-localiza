export const goToHome = (navigate) => {
    navigate("/");
}

export const goToDetail = (navigate, idEvent) => {
    navigate(`/${idEvent}`)
}

export const goToMyBooking = (navigate) => {
    navigate("/booking")
}