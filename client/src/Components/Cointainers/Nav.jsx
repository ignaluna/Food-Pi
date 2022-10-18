// import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonNav, NavBarContainer, NavBarWrapper } from "./Navstyle";
import logo from "../image/Logo.png"




const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            {location.pathname !== "/landing" && (
                <NavBarContainer>
                    <NavBarWrapper>
                     <ButtonNav onClick={() => { navigate("/") }}>Home</ButtonNav>
                        <ButtonNav onClick={() => { navigate("/contacto") }}>Contacto</ButtonNav>
                        <ButtonNav onClick={() => { navigate("/") }}>Create Recipe</ButtonNav>
                        <image src={logo} alt=""/>`
                        <h1>Hola</h1>
                    </NavBarWrapper>
                </NavBarContainer>

            )}
        </>
    )
}

export default Nav;