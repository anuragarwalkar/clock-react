import React, { useEffect, useRef, useState } from "react";

const totalRotateAngle = 360;
const rotateAngel = totalRotateAngle / 60;

const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds((s) => {
        if (s === totalRotateAngle) {
          setMinutes((m) => {
            if (m === totalRotateAngle) {
              setHours((h) => {
                if (h === totalRotateAngle) {
                    return totalRotateAngle;
                }
                return h + rotateAngel
              });
              return totalRotateAngle;
            }
            return m + rotateAngel;
          });
          return totalRotateAngle;
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
