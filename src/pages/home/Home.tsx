import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import "./Home.css"

const home = () => {
    return (
        <>
            <Header/>
            <div className={"home-container"}>
                <Form/>
            </div>
            <Footer/>
        </>
    )
}

export default home