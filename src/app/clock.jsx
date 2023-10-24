import React, { useEffect, useRef, useState } from "react";

const defaultRotateAngel = 180;
const rotateAngel = defaultRotateAngel / 60;

const Clock = () => {
  const [seconds, setSeconds] = useState(defaultRotateAngel);
  const [minutes, setMinutes] = useState(defaultRotateAngel);
  const [hours, setHours] = useState(defaultRotateAngel);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds((s) => {
        if (s === 540) {
          setMinutes((m) => {
            if (m === 540) {
              setHours((h) => {
                if (h === 540) {
                    return defaultRotateAngel;
                }
                return h + rotateAngel
              });
              return defaultRotateAngel;
            }
            return m + rotateAngel;
          });
          return defaultRotateAngel;
        }
        return s + rotateAngel;
      });
    }, 1000);
  }, []);

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
            top: "50%",
            left: "50%",
            rotate: `${seconds}deg`,
            transformOrigin: "0% 0%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: 4,
            height: 140,
            position: "absolute",
            top: "50%",
            left: "50%",
            rotate: `${minutes}deg`,
            transformOrigin: "0% 0%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: 6,
            height: 150,
            position: "absolute",
            top: "50%",
            left: "50%",
            rotate: `${hours}deg`,
            transformOrigin: "0% 0%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
