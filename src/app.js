import React from "react";
import Image from "next/image";
import mainim from "../images/mainim.png";
import logo from "../images/logo.png";
import { TextComponent ,Button, Footer} from "./components";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";


export const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#5375E2", 
          color: "white",
          fontFamily: "Helvetica",
          fontWeight: "700",
          margin: "0",
          display: "flex",
          padding: "10px",
          position:"fixed",
          width:"100%",
          marginBottom:"50px"
        }}
      >
        <div
          style={{
            paddingLeft: "27px",
            paddingTop: "21px",
            paddingRight: "41px",
          }}
        >
          <Image src={logo} alt="logo" width={53} height={52} />
        </div>
        <div style={{ flexDirection: "column" }}>
          <TextComponent
            label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
            styleProps={{
              fontSize: "16px",
              textAlign: "center",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          />
          <br></br>
          <TextComponent
            label="Exam Scheduler"
            styleProps={{
              fontSize: "32px",
              paddingBottom: "15px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div>
          <FaUserCircle size="36px"
           style={{paddingLeft:"600px",
           paddingTop:"5px",
           justifyContent:"center",
           alignItems:"center"}}/>
          </div>
          <TextComponent 
          label="Waseem" CustomTag="span" 
          styleProps={{
            padding:"10px",
           fontSize:"20px",
           justifyContent:"center",
           alignItems:"center"}}/>
        
      </div>
    </>
  );
};
export const MainPic = () => {
  return <Image src={mainim} alt="Picture main" width={400} height={400}/>;
};

export const App = () => {
  return (
    <>
      <Header />
      <div 
      style={{
        alignItems:"center",
        paddingTop:"150px",
        justifyContent:"center",
        display:"flex",
        flexDirection:"column",
        }}>
      <MainPic/>
      <TextComponent
       label="There are no schedules get started by creating schedules" 
       styleProps={{
        fontWeight:"600px",
        paddingBottom:"20px",
        marginTop:"50px"
        }}/>
      <Link href="/page2">    <a> <Button  buttonText=
      {<TextComponent label="+Create New"/>}/></a></Link>
      </div>
      <Footer/>
    </>
  );
};