import React, { useEffect } from "react";
import { Header } from "../src/app";
import GlobalStyle from "../src/globalStyles";
import { FaArrowLeft, FaCodeBranch } from "react-icons/fa";
import {
  TextComponent,
  Dropdown,
  Picker,
  InputComponent,
  DatePick,
  Button,
} from "../src/components";
import Popupsave from "../src/popup";
import formdata from "../src/createSced";
import { useState } from "react";

import Link from "next/link";
import { useAmp } from "next/amp";
const Main2 = ({ data }) => {
  let [Branch, setBranch] = useState('B.E');
  let [Department, setDepartment] = useState(null);
  let [Examtype, setExamtype] = useState(null);
  let [semester, setSemester] = useState(null);
  let [Subject, setSubject] = useState(0);
  let [Labs, setLabs] = useState(null);
  let [Subject1, setSubject1] = useState(null);
  let [Subject2, setSubject2] = useState(null);
  let [Subject3, setSubject3] = useState(null);
  let [Subject4, setSubject4] = useState(null);
  let [Subject5, setSubject5] = useState(null);
  let [lab1, setlab1] = useState(null);
  let [lab2, setlab2] = useState(null);
  const [session,setSession]=useState(null);
  const[allSession,setAllSession]=useState(null);
  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextComponent
              label="Branch"
              styleProps={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",

              }}
            />
            <Dropdown style={{
              width: "344px",
              height: "56px"
            }}
              setSelectedValue={setBranch} items={formdata.branchanddep.map(item => item.branch)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextComponent
              label="Department"
              styleProps={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",
              }}
            />
            <Dropdown style={{
              width: "344px",
              height: "56px"
            }}
              items={formdata.branchanddep.find(item => item.branch == Branch).deps} setSelectedValue={setDepartment}

            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputComponent
              type="text"
              value={semester}
              onChange={(event) => {
                setSemester(event.target.value)
                setSubject(formdata.semester.find(item => item.semesterNumber == semester)?.subjectsNumber)
              }}
              label={
                <TextComponent
                  label="Semester"
                  CustomTag="div"
                  styleProps={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                    paddingBottom: 0
                  }}
                ></TextComponent>
              }
              placeholder="3"
              style={{
                width: "344px",
                height: "56px"
              }}
            />

          </div>
        </div></div>


      <div></div>
      <TextComponent
        label="Exam Type"
        styleProps={{
          fontSize: "16px",
          textAlign: "left",
          fontWeight: 700,
          paddingTop: "10px",
          padding: " 8px 16px",
          gap: "8px",
          borderRadius: "5px",
        }}
      />
      <Dropdown style={{
        width: "1090px",
        height: "56px"
      }}
        setSelectedValue={setExamtype} items={formdata.Examtype}
      />

      <TextComponent
        label="Time Range"
        styleProps={{
          fontFamily: "Nunito-Sans",
          fontStyle: "Normal",
          paddingTop: "10px",
          fontSize: "24px",
          marginTop: "0px",
        }}
      />
      <TextComponent
        CustomTag="span"
        label="FN"
        styleProps={{
          fontSize: "16px",
          fontWeight: 700,
          padding: "5px",
          paddingLeft: "20px",
        }}
      />

      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent CustomTag="span" label="to" />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent
        CustomTag="span"
        label="3 hours"
        styleProps={{ paddingRight: "10em" }}
      />
    
      <input type="checkbox"
      checked={allSession=='FN' ? true : false}  
      onChange={(event) =>{
        if(event.target.checked == true) setAllSession("FN");
      }
    }
/>
      <TextComponent CustomTag="span" label="Set for all FN"
      />
      <br></br>
      <TextComponent
        CustomTag="span"
        label="AN"
        styleProps={{
          fontSize: "16px",
          fontWeight: 700,
          padding: "5px",
          paddingLeft: "20px",
        }}
      />
      <Picker min={1} max={12} />
      <Picker min={0} max={59} />
      <TextComponent CustomTag="span" label="to" />
      <Picker min={1} max={12} />
      <Picker min={0} max={59} />
      <TextComponent
        CustomTag="span"
        label="3 hours"
        styleProps={{ paddingRight: "10em" }}
      />
      <input type="checkbox" checked={allSession=='AN' ? true : false}  
      onChange={(event) =>{
      setAllSession(null);
        if(event.target.checked == true) setAllSession("AN");
      }
    }
/>
      <TextComponent CustomTag="span" label="Set for all AN" />
      <div style={{ display: "flex", padding: "10px" }}>


        <InputComponent
          type="text"
          value={formdata.semester.find(item => item.semesterNumber == semester)?.subjectsNumber}
          label={
            <TextComponent
              label="Subjects"
              styleProps={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "17px",
                paddingTop: "10px",
                paddingBottom: 0
              }}

            >
            </TextComponent>
          }
          //placeholder="5"
          style={{
            width: "344px",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            border: "1px solid #E8E8EA"
          }}

        />
        <InputComponent
          type="text"
          value={formdata.semester.find(item => item.semesterNumber == semester)?.labsNumber}
          label={
            <TextComponent
              label="Labs"
              styleProps={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "17px",
                paddingTop: "10px",
                paddingBottom: 0
              }}
            ></TextComponent>
          }
          //placeholder="2"
          style={{
            width: "344px",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            border: "1px solid #E8E8EA"
          }}
        />
      </div>

      {[...Array(formdata.semester.find(item => item.semesterNumber == semester)?.subjectsNumber).keys()].map((x, i) =>
        <SubjectComponent allSession={allSession} />
      )}



      <TextComponent
        label="Lab"
        styleProps={{
          fontWeight: "700",
          paddingTop: "10px",
          fontSize: "20px"
        }}

      />
      {[...Array(formdata.semester.find(item => item.semesterNumber == semester)?.labsNumber).keys()].map((x, i) =>
        <LabComponent allSession={allSession} />
      )}
    </>


  );
};

const SubjectComponent = (props) => {
  let [subCode, setSubCode] = useState();
  let [subName, setSubName] = useState();
  let [subDate, setSubDate] = useState();
  let [session,setSession] = useState(props.allSession);
  useEffect(() =>{
    setSession(props.allSession);
  },[props.allSession]);
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextComponent
          label="Subject1"
          styleProps={{ fontWeight: "700", paddingTop: "10px" }}
        />
        <Dropdown style={{
          width: "181px",
          height: "56px"
        }}

          setSelectedValue={setSubCode} items={formdata.subjects.map(item => item[0])}
        />
      </div>
      <InputComponent
        //placeholder="Measurement and Instrumentation"
        value={formdata.subjects.find(item =>item[0] == subCode) ? formdata.subjects.find(item => item[0] == subCode)[1] : ""}

        style={{
          marginTop: "25px",
          marginLeft: "20px",
          width: "423px",
          height: "56px"
        }}

      />
      <DatePick />
      <span>
      <button onClick={() =>{
        setSession("FN");
      }}
       style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background :session === "FN" ? "#5375E2" : "white"  }}
        >FN </button>

        <button onClick={() =>{
        setSession("AN");
      }} style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: session === "AN" ? "#5375E2" : "white"}}>AN</button>
      </span>
    </div>
  
  )
}
const LabComponent = (props) => {
  let [labCode, setLabCode] = useState();
  let [labName, setLabName] = useState();
  let [labDate, setLabDate] = useState();
  let [session,setSession] = useState();
  useEffect(() =>{
    setSession(props.allSession);
  },[props.allSession]);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >

      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextComponent
          label="Lab1"
          styleProps={{ fontWeight: "700", paddingTop: "10px" }}
        />
        <Dropdown style={{
          width: "181px",
          height: "56px"
        }}
          //value={formdata.labs}
          setSelectedValue={setLabCode} items={formdata.labs.map(item => item[0])}
        />
      </div>
      <InputComponent
        //placeholder="Measurement and Instrumentation"
        value={formdata.labs.find(item => item[0] == labCode) ? formdata.labs.find(item => item[0] == labCode)[1] : ""}
        style={{
          marginTop: "25px",
          marginLeft: "20px",
          width: "423px",
          height: "56px"
        }}
      />
      <DatePick />
      <span>
      <button onClick={() =>{
        setSession("FN");
      }}
       style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background :session === "FN" ? "#5375E2" : "white"  }}
        >FN </button>

        <button onClick={() =>{
        setSession("AN");
      }} style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: session === "AN" ? "#5375E2" : "white"}}>AN</button>
      </span>
      
    </div>

  )
}

const page2 = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex", paddingLeft: "100px", fontWeight: 600 }}>
        <div style={{ marginTop: "150px", display: "flex" }}>
          <Link href="/"><a><FaArrowLeft size="40px" /></a></Link>
          <TextComponent
            label="Create new schedule"
            styleProps={{
              paddingTop: "10px",
              fontSize: "24px",
              marginTop: "0px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginBottom: "126px",
          width: "1196px",
          height: "1400px",
          marginLeft: "122px",
          marginTop: "20px",
          background: "#FBFBFB",
        }}
      >
        <Main2 data={data} />

        <Popupsave />
      </div>

    </>
  );
};
export default page2;


