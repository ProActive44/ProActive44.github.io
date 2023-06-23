import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full-Stack Developer", "MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        style={{
          fontSize: "24px",
          color: "blue",
          fontWeight: "bold",
        }}
      />
    </>
  );
}

export default TypeWriter;
