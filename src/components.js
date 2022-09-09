import React from "react";
import Link from "next/link";

export const TextComponent = ({
  label,
  styleProps,
  children,
  CustomTag = "div",
}) => ( 
  <CustomTag  style={styleProps} >
    {label}
    {children}
  </CustomTag >

);
export const Button = (props) => {
  return (
    <>
      <button
        label={props.buttonText}
        style={{
          backgroundColor: "#5375E2",
          borderRadius: "5px",
          color: "white",
          width: "192px",
          height: "39.96px",
          fontWeight: "400",
          fontSize: "20px",
          borderColor: "white",
          marginBottom: "150px",
        }}
      >
        {props.buttonText}
  
      </button>
    </>
  );
};
export const Button1 = (props) => {
  return (
    <>
      <button label={props.buttonText}
        style={{
            // boxSizing: "border-box",
            // position: "absolute",
            // width: "101px",
            // height: "35.96px",
            // backgroundColor: "#FFFFFF",
            // borderRadius: "10px",
            // border: "1px solid #5375E2",

        }}
      >

    </button>
  </>
);
};
export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FBFBFB",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "150px",
        paddingRight: "150px",
        paddingTop: "10px",
      }}
    >
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Conditions of use & sale"
      />

      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Privacy notice"
      />
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Powered By Incresco"
      />
    </footer>
  );
};

export const Dropdown = (props) => {
  // console.log(props);
  const { setSelectedValue, items } = props
  let value = props.value
  return (

    <select onChange={(event) => {
      setSelectedValue(event.target.value)
    }}

      style={{
        display: "flex",
        flexDirection: "row",
        justifycontent: "center",
        alignitems: "center",
        padding: "10px 50px",
        gap: "16px",
        borderRadius: "5px",
        border: "1px solid #E8E8EA",
        ...props.style
      }}

    >
      {items.map((item,index) => (
        <option key={index}value={item}>
          {item}
        </option>
      ))}


    </select>

  );
};

export const Picker = (props) => {
  <button onClick ={()=>console.log("clicked",props.foo)}>Text</button> 
    return(
      <>
      <input
      type="number"
      id="date"
      name="date"
      min={props.min}
      max={props.max}
      style={{
        margin: "15px",
        padding: "2px",
        border: "1px solid #E8E8EA"
      }}
    ></input>
      </>
    
  );
};

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TextComponent CustomTag="div" label={props.label} />
      <span>
        <input {...props}></input>
      </span>
    </div>
  );
};

export const DatePick = () => {
  return (
    <div >
      <label>
        {
          <TextComponent
            label="Date"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
        }
      </label>
      <input style={{
        height: "56px",
        width: "260px",
        border: "1px solid #FFFFFF",
        borderRadius: "4px"
      }} type="date" name="DOB" />
    </div>
  );
};

export const Box = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        width: "392px",
        height: "252px",
        borderRadius: "10px",
        flexDirection: "column",
      }}
    >
      <TextComponent
        label={props.header}
        styleProps={{
          fontSize: "24px",
          fontFamily:"Nunito-Sans",
          textAlign: "left",
          fontWeight: 700,
          margin: "10px",
          lineHeight:"33px"
        }}
      />
      {!props.bools && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontWeight: 700,
              fontSize:"14px"
            }}
          >
            <TextComponent label="Branch" />
            <TextComponent label="Department" />
            <TextComponent label="Semester" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontWeight: 700,
              fontSize:"16px",
              color:"#ABA9AE",
              lineHeight:"22px"
            }}
          >
            <TextComponent label="BE" />
            <TextComponent label="IT" />
            <TextComponent label="3" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontWeight: 700,
              paddingTop: "25px",
              fontSize:"14px"
            }}
          >
            <TextComponent label="Subject" />
            <TextComponent label="Lab" />
            <TextComponent label="Exam Type" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontWeight: 700,
              fontSize:"16px",
              color:"#ABA9AE",
              lineHeight:"22px"
            }}
          >
            <TextComponent label="5" />
            <TextComponent label="2" />
            <TextComponent label="Semester" />
          </div>
        </div>
      )}
      {props.boole && (
        <div
          style={{
            backgroundColor: "#FFA500",
            height: "47px",
            border: "1px solid #FFA500",
            borderRadius: "10px",
            justifyContent: "bottom",
            marginTop: "30px",
            padding: "10px",
            display: "flex",
            color: "white",
            fontSize: "20px",
            fontStyle:"normal"
          }}
        >
          Not Allocated
          {/* <Button1 styleProps={{
            boxSizing: "border-box",
            position: "absolute",
            width: "101px",
            height: "35.96px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            border: "1px solid #5375E2"
          }} label={"Allocate"}

          /> */}
          
        </div>
      )}
      {props.blue && (
        <div
          style={{
            backgroundColor: "#5375E2",
            height: "100px",
            border: "1px solid #5375E2",
            borderRadius: "10px",
            justifyContent: "bottom",
            marginTop: "30px",
            padding: "10px",
            display: "flex",
            color: "white",
            fontSize: "20px",
          }}
        >
          Allocated
        </div>
      )}
      {props.bools && (
        <Link href="/page2">
          <a>
            <center>
              <Button style=
              {{
                position: "absolute",
                width: "102px",
                height: "35.96px",
                borderRadius: "5px",
                padding:"100px 100px",
                display:"flex"
              }} buttonText={<TextComponent label="+   Create New" />}
              />
            </center>
          </a>
        </Link>
      )}
    </div>
  );
};

