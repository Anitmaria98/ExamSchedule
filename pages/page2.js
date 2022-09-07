import React from "react";
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
  let [Examtype,setExamtype] = useState(null);
  let [Semester,setSemester]= useState(null);
  let [Subject,setSubject]=useState(null);
  let [Labs,setLabs]= useState(null);
  let [Subject1,setSubject1] = useState(null);
  let [Subject2,setSubject2] = useState(null);
  let [Subject3,setSubject3] = useState(null);
  let [Subject4,setSubject4] = useState(null);
  let [Subject5,setSubject5] = useState(null);
  let [lab1,setlab1] = useState(null);
  let [lab2,setlab2] = useState(null);
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
            setSelectedValue={setBranch} items = {formdata.branchanddep.map(item=>item.branch)} 
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
            items = {formdata.branchanddep.find(item=> item.branch == Branch).deps} setSelectedValue={setDepartment}
  
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputComponent
              yolo="yolo"
              type="text"
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
                 setSelectedValue={setSemester} items = {formdata.branchanddep.map(item=>item.Semester)}
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
      setSelectedValue ={setExamtype} items={formdata.Examtype}
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
      <input type="checkbox" />
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
      <Picker min={1} max={59} />
      <TextComponent CustomTag="span" label="to" />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent
        CustomTag="span"
        label="3 hours"
        styleProps={{ paddingRight: "10em" }}
      />
      <input type="checkbox" />
      <TextComponent CustomTag="span" label="Set for all AN" />
      <div style={{ display: "flex", padding: "10px" }}>


        <InputComponent
          yolo="yolo"
          type="text"

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
              items = {formdata.branchanddep.find(item=> item.Semester == Semester).semesterNumber} setSelectedValue={setSubject}
  >
            </TextComponent>
          }
          placeholder="5"
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
          yolo="yolo"
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
          placeholder="2"
          style={{
            width: "344px",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            border: "1px solid #E8E8EA"
          }}
        />
      </div>

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
          setSelectedValue ={setSubject1} items= {formdata.subjects.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Measurement and Instrumentation"

          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
          
        />
        <DatePick />
        <span>
        <button onClick ={()=>console.log("clicked")}style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}
          >FN </button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject2"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown style={{
            width: "181px",
            height: "56px"
          }}
            //value={formdata.subjects}
            setSelectedValue ={setSubject2} items= {formdata.subjects.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Electrical Machines"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject3"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown style={{
            width: "181px",
            height: "56px"
          }}
            //value={formdata.subjects}
            setSelectedValue ={setSubject3} items= {formdata.subjects.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Power Systems"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject4"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown style={{
            width: "181px",
            height: "56px"
          }}
            //value={formdata.subjects}
            setSelectedValue ={setSubject4} items= {formdata.subjects.map(item => item[0])} />
        </div>
        <InputComponent
          //placeholder="Microcontrollers"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject5"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown style={{
            width: "181px",
            height: "56px"
          }}
            //value={formdata.subjects}
            setSelectedValue ={setSubject5} items= {formdata.subjects.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Control Systems"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <TextComponent
        label="Lab"
        styleProps={{
          fontWeight: "700",
          paddingTop: "10px",
          fontSize: "20px"
        }}

      />
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
            setSelectedValue ={setlab1} items= {formdata.labs.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Measurement and Instrumentation"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="lab2"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown style={{
            width: "181px",
            height: "56px"
          }}
            //value={formdata.labs}
            setSelectedValue ={setlab2} items= {formdata.labs.map(item => item[0])}
          />
        </div>
        <InputComponent
          //placeholder="Electrical Machine"
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            width: "423px",
            height: "56px"
          }}
        />
        <DatePick
          style={{
            width: "423px",
            height: "56px"
          }}
        />
        <span>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }}>FN</button>
          <button style={{ width: "68px", height: "56px", marginTop: "25px", marginLeft: "20px", border: "1px solid #5375E2", background: "#FFFFFF" }} >AN</button>
        </span>
      </div>


    </>

  );
};

const page2 = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex", paddingLeft: "100px", fontWeight: 600 }}>
        <div style={{ marginTop: "150px", display: "flex" }}>
          <Link href="/"><a><FaArrowLeft size="40px"/></a></Link>
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