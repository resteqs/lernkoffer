import React from 'react'

interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SimpleCountdown = ({ hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
    

    const [time, setTime] = React.useState<ICountdown>({ hours, minutes, seconds });
    

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const tick = () => {
   
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) 
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            reset()
        else if (time.hours === 0 && time.seconds === 0) {
            setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
        } else if (time.seconds === 0) {
            setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
        } else {
            setTime({ hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1 });
        }
    };


    const reset = ():any => setTime({ hours: time.hours, minutes: time.minutes, seconds: time.seconds });

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <div>
            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
            .toString()
            .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p> 
            </div>
            <button onClick={() => setTime({ hours: 1, minutes: 59, seconds: 59 }) } type = "button" >
                Reset
            </button>
        </div>
    );
}