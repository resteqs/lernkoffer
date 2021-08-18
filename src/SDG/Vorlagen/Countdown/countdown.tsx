// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useRef, useEffect } from 'react'

// Quellen:
// https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
// https://origin.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/

export const countdown = ():any => { 
    const Ref = useRef(null); 

    const [timer, setTimer] = useState('00:00:00'); 
    const start:string = new Date().getTime.toString()

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const getTimeRemaining = (e: any) => { 
        const total = Date.parse(e) - Date.parse(start); 
        const seconds = Math.floor((total / 1000) % 60); 
        const minutes = Math.floor((total / 1000 / 60) % 60); 
        const hours = Math.floor((total / 1000 * 60 * 60) % 24); 
        return { 
            total, hours, minutes, seconds 
        }; 
    } 
   
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const initializeClock = (id, endtime):any => {
        const clock = document.getElementById(id)
        const timeInterval = setInterval(() => {
            const t = getTimeRemaining(endtime);
            if (clock?.innerHTML != null)
            {
            clock.innerHTML = ` hours: ${ t.hours  }<br>` +
                              `minutes: ${  t.minutes  }<br>` +
                              `seconds: ${  t.seconds}`;
            if (t.total <= 0) {
              clearInterval(timeInterval);
            }
            }
          },1000);
    }
    const startTimer = (e) => { 
        const { total, hours, minutes, seconds }  
                    = getTimeRemaining(e);
        let counter = seconds
        const intervalId = setInterval(() =>{
            counter -=1;
            console.log(counter);
            if(counter === 0)
            {
                clearInterval(intervalId)
            }
        },1000)
    } 
  
  
    const clearTimer = (e) => { 
  
        // If you adjust it you should also need to 
        // adjust the Endtime formula we are about 
        // to code next     
        setTimer('00:00:10'); 
  
        // If you try to remove this line the  
        // updating of timer Variable will be 
        // after 1000ms or 1sec 
        /*
        if (Ref.current) clearInterval(Ref.current); 
        const id = setInterval(() => { 
            startTimer(e); 
        }, 1000) 
        Ref.current = id; 

        */
    } 
  
    const getDeadTime = () => { 
        const deadline = new Date(); 
  
        // This is where you need to adjust if  
        // you entend to add more time 
        deadline.setSeconds(deadline.getSeconds() + 10); 
        return deadline; 
    } 
  
    // We can use useEffect so that when the component 
    // mount the timer will start as soon as possible 
  
    // We put empty array to act as componentDid 
    // mount only 
    useEffect(() => { 
        clearTimer(getDeadTime()); 
    }, []); 
  
    // Another way to call the clearTimer() to start 
    // the countdown is via action event from the 
    // button first we create function to be called 
    // by the button 
    const onClickReset = () => { 
        clearTimer(getDeadTime()); 
    } 
  
    return ( 
        <div className="App"> 
            <h2>{timer}</h2> 
            <button type = "button" onClick={onClickReset}>Reset</button> 
        </div> 
    ) 

}