import { useState, useEffect } from "react";

function Clock(props) {
  const [clockState, setClockState] = useState();
    
  useEffect(() => {
    if (props.tz === "PST") {
        setInterval(() => {
            const date = new Date();
            let pstDate = date.toLocaleString("en-US",  {timeZone: "America/Los_Angeles"})
            setClockState(pstDate);
          }, 1000);
    }
    else if (props.tz === "EST") {
        setInterval(() => {
            const date = new Date();
            let pstDate = date.toLocaleString("en-US",  {timeZone: "America/New_York"})
            setClockState(pstDate);
          }, 1000);
    }
    else if (props.tz === "GMT"){
        setInterval(() => {
            const date = new Date();
            let pstDate = date.toLocaleString("en-US",  {timeZone: "Europe/London"})
            setClockState(pstDate);
          }, 1000);
    }
    else if(props.tz === "HKT"){
        setInterval(() => {
            const date = new Date();
            let pstDate = date.toLocaleString("en-US",  {timeZone: "Asia/Hong_Kong"})
            setClockState(pstDate);
          }, 1000);
    }
  }, []);
  return (
    <div style={{ textAlign: "center", paddingTop: "20%", fontSize: "30px", color: 'pink'}}>
      {clockState}
    </div>
  );
}

export default Clock;
