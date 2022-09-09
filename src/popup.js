import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from './components';
import Link from 'next/link';


const Popupsave = () => {

    return (
        <div>
            <Popup
                trigger={
                    <button
                        style={{
                            padding: '10px',
                            width: '174px',
                            borderRadius: '5px',
                            background: '#5375E2',
                            color: 'white',
                            border: '#5375E2',
                            marginTop: '30px',
                            marginLeft: '85%',
                        }}
                    >
                        {' '}
                        Save
                    </button>
                }
                position="left center"
            >
                <div
                    style={{
                        width: "900px",
                        height: "293px",
                        position: "center",
                        marginBottom: "30%",
                        marginRight: "100px",
                        backgroundColor: "#F6F6F6",
                        color: "White",
                        boxShadow: "7px 7px 5px 0px rgba(50, 50, 50, 0.75)",
                    }}
                >
                    <div>BE EEE SEM3 schedule was successfully created</div>
                    <Link href="/"><a style={{
                        fontFamily: 'Nunito Sans',
                        fontStyle: "normal",
                        fontWeight: "700",
                        textAlign: "center", 
                        color:"#5375E2",
                        fontSize: "16px", 
                    }}>Go Home</a></Link>
                    <Link href="/cards"><a><button style={{
                        marginTop: '70px',
                        borderRadius: '5px',
                        border: '1px solid #5375E2',
                        height: '40px',
                        width: '185px',
                        marginLeft: '249px',
                        marginRight: '30px',
                    }}>Create New Schedule </button></a></Link>
                    <button style={{
                        borderRadius: '5px',
                        border: '1px solid #5375E2',
                        width: "185px",
                        height: "40px",
                        backgroundColor: "#5375E2"
                    }}> Allocate schedule</button>
                </div>
            </Popup>
        </div>

    )
};
export default Popupsave