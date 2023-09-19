import { useState } from 'react'
import {Icons} from './components/Icons'
import Logo from './assets/Logo.svg'
import GreenLogo from './assets/green-logo.svg'
import RedLogo from './assets/red-logo.svg'
import { VscChromeClose } from "react-icons/vsc";

function App() {

    const [value, setValue] = useState(0);
    const [show, setShow] = useState(false);

    let drones = [];
    for(let i = 0; i < 7; i++) {
        drones.push(`A46${i+1}`);
    }


  return (
    <div className='main'>
        <div className="pulsating-circle circle-1"></div>
        <div className="pulsating-circle circle-2"></div>
        <div className="pulsating-circle circle-3"></div>
        <div className="pulsating-circle circle-4"></div>
        <div className="pulsating-circle circle-5"></div>
        <div className="pulsating-circle circle-6"></div>
        <div className="pulsating-circle circle-7"></div>
        <div className="pulsating-circle circle-8"></div>
        <div className="logo">
            <img src={Logo} alt="Drone Company Logo" />
        </div>

        <div className="drones-center">
            {/* {Btn Container} */}
            <div className="btn-container">
                <h2 className="drone-list-heading">Drone List</h2>
                <div className="btn-list">
                    {
                        drones.map((item, index) => {
                            return (
                                <button key={index} className={`drone-btn ${(index === value && show) && 'active-btn'}`} onClick={() => {
                                    setValue(index);
                                    setShow(true);
                                }}>
                                    <img src={GreenLogo} alt="Active Drone Logo"/>
                                    <span className='drone-btn-text'>{`Drone ${item}`}</span>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="status-container">
                <div className="btn-list">
                    <div className="drone-btn">
                        <img src={GreenLogo} alt="Active Drone Logo"/>
                        <span className='drone-btn-text green'> 7 Active</span>
                    </div>
                    <div className="drone-btn inactive-btn">
                        <img src={RedLogo} alt="Active Drone Logo"/>
                        <span className='drone-btn-text red'>0 Inactive</span>
                    </div>
                </div>
            </div>
            {/* {Drones Info} */}
            { show && 
               ( <div className="drones-info">
                    <h1 className="drone-heading">{`Drone ${drones[value]}`}</h1>
                    <VscChromeClose className='close-btn' onClick={() => {
                        setShow(false);
                    }}></VscChromeClose>
                    <ul className="drone-infoline">
                        <li>Drone Id: </li>
                        <li>Location: </li>
                        <li>Flying Hours: </li>
                    </ul>
                    <div className="drone-livefeed"></div>
                    <button className="drone-return-btn"> <span>Return To Base</span></button>
                </div>)

            }
        </div>

        <Icons></Icons>
    </ div>
  )
}

export default App
