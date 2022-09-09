import React from "react";
import { Header } from "../src/app";
import GlobalStyle from "../src/globalStyles";
import { Box } from "../src/components";
import { Button, TextComponent } from "../src/components";
import { Footer } from "../src/components";
 import Image from "next/image";
 //import {deleteimg} from "../images/deleteimg.png";

const Cards = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <div
                style={{
                    paddingTop: "150px",
                    alignItems: "right",
                    display: "flex",
                    flexDirection: "row-reverse",
                    paddingRight: "50px",
                }}
            >
                <TextComponent label="Filter" CustomTag="span" />
                <input type="checkbox" id="show all" label="show all" />
                <TextComponent label="Show Allocated" CustomTag="span" />
                <br />
            </div>
            <div
                style={{
                    paddingTop: "20px",
                    paddingLeft: "30px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >

                <Box bools="true" />
                <Box header="BE IT SEM 3" boole="true" >
                <div
          style={{
            paddingLeft: "359.5px",
            paddingTop: "26px",
            paddingRight: "13.5px",
          }}
        >
          <img src="https://i.ibb.co/Pgq1VFK/delete.png" alt="delete" border="0"/>
        </div>
                </Box>
                <Box header="BE EEE SEM 3" blue="true" />
            </div>
        
            <div
                style={{
                    paddingTop: "50px",
                    paddingLeft: "30px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    paddingBottom: "30px",
                }}
            >
                <Box header="BE CIVIL SEM 3" blue="true" />
                <Box header="BE CSE SEM 3" boole="true" />
                <Box header="BE CSBS SEM 3" blue="true" />
            </div>
            <Footer />
        </>
    );
};
// export const deleteimage = () => {
//     return <Image src={deleteimage} alt="Picture delete" width={24} height={24}/>;
//   };
export default Cards;
