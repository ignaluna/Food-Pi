import React from "react";
import { useNavigate } from "react-router-dom";
import video from "../video/Cebolla.mp4";
import { Button } from "./LandinPagestyle";


const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <div>
        <video loop autoPlay muted
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",        
        }
        }>
        <source src={video} type="video/mp4"/>
        </video>
        </div>
        <Button onClick={()=>{navigate("/")}}>Cooking time!</Button>
    </>
    )
}

export default LandingPage;