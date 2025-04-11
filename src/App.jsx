import React, { useState, useRef, useEffect } from "react";
import "./styles/App.css";
import QRCode from "qrcode";

const App = () => {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const value = text.trim();

      if (value !== "") {
        QRCode.toCanvas(canvasRef.current, value, );
      } else {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, [text]);

  return (
    <div className="container">
      <h1 className="title">Instant QR Code Generator</h1>
      <canvas ref={canvasRef}></canvas>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a link or text"
      />
    </div>
  );
};

export default App;
