import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from './components';
import Link from 'next/link';

const Popupsave=()=>{
return(
<div>
	<Popup
    style={{
        width:"908px",
        height:"293px"
    }}
    trigger={ <button label="Save" style={{
        position:"absolute",
        alignSelf:"normal",
        width:"174px",
        height:"40px",
        backgroundColor: "#5375E2",
        bordeRadius: "5px",
        left: "1144px",
        top: "1703.26px"
    }}>SAVE</button>
    } 
	position="right center">
	<div>BE EEE SEM3 schedule was successfully created</div>
	<Link href="/cards"><a>Go Home</a></Link>
	<Link href="/page2"><a><button>Create New Schedule </button></a></Link>
	<button> Allocate schedule</button>
	</Popup>
</div>
)
};
export default Popupsave


