import React from "react";
const formdata = {
    branchanddep: [
      {
        branch: "B.E",
        deps: ["ECE", "EEE", "MECH"],
      },
      {
        branch: "B.TECH",
        deps: ["IT", "CSE"],
      },
    ],
    Examtype:[
      "Internals",
      "Model",
      "Semester"
    ],
    subjects:[
      ["19QSA011","Measurement and Instrumentation"],
      ["19HSM002","Electrical Machines"],
      ["19ASR008","Power Systems"],
      ["19CTR105","Microcontrollers"],
      ["19MNS202","Control Systems"],

      ],
      
    labs: [
       ["19QSA011M", "Measurement and Instrumentation"],
       [ "19HSM002","Electrical Machines"],
    ],
    //    subjects:[
    // {
    //     subjectCode:"19QSA011",
    //     subjectName:"Measurement and Instrumentation"
    //   },
    //   {
    //     subjectCode:"19HSM002",
    //     subjectName:"Electrical Machines"
    //   },
    //   {
    //     subjectCode:"19ASR008",
    //     subjectName:"Power Systems"
    //   },
    //   {
    //     subjectCode:"19CTR105",
    //     subjectName:"Microcontrollers"
    //   },
    //   {
    //     subjectCode:"19MNS202",
    //     subjectName:"Control Systems"
    //   }
    // ],
    semester:
        [
          {
            semesterNumber:3,
            subjectsNumber:4,
            labsNumber:2
          },
          {
            semesterNumber:5,
            subjectsNumber:3,
            labsNumber:1
          }
        ]
      }
  export default formdata;
