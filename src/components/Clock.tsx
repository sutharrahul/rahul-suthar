'use client'
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now: Date = new Date();
      let hours: number = now.getHours(); // 0-23
      let minutes: number | string = now.getMinutes(); 
      let seconds: number | string = now.getSeconds(); 

      const period: string = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12; 

      minutes = minutes < 10 ? "0" + minutes : minutes; 
      seconds = seconds < 10 ? "0" + seconds : seconds; 

      setTime(`${hours}:${minutes}:${seconds} ${period}`);
    };

    const intervalId = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <p className="fixed bottom-2 right-4 w-fit py-1 px-2 rounded-md bg-[#323232] text-white text-xs">
      {time}
    </p>
  );
}
