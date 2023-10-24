import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = date.getHours() * 30; 
  const minutes = date.getMinutes() * 6;
  const seconds = date.getSeconds() * 6;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          borderRadius: 1000,
          width: 400,
          height: 400,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 10,
            transform: "translate(-50%, 0)",
            fontSize: 25,
          }}
        >
          12
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translate(-50%, -50%)",
            fontSize: 25,
          }}
        >
          3
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 10,
            transform: "translate(-50%, 0)",
            fontSize: 25,
          }}
        >
          6
        </div>
        <div
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translate(50%, -50%)",
            fontSize: 25,
          }}
        >
          9
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: 2,
            height: 130,
            position: "absolute",
            bottom: "50%",
            left: "50%",
            rotate: `${seconds}deg`,
            transformOrigin: "100% 100%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: 4,
            height: 140,
            position: "absolute",
            bottom: "50%",
            left: "50%",
            rotate: `${minutes}deg`,
            transformOrigin: "100% 100%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: 6,
            height: 150,
            position: "absolute",
            bottom: "50%",
            left: "50%",
            rotate: `${hours}deg`,
            transformOrigin: "100% 100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
