import { Html } from "@react-three/drei";
import { useState } from "react";

const Instructions = () => {
  const [showInstruction, setShowInstruction] = useState<boolean>(true);

  const handleInstructionButton = () => {
    setShowInstruction(!showInstruction);
  };
  return (
    <>
      <group position={[-10, 10, -5]}>
        {/* Instruction Bubble */}
        {showInstruction && (
          <Html className="bubble-style">
            Left pointer for <strong>rotation</strong>.
            <br />
            Right pointer for <strong>panning</strong>.
            <br />
            Scroll button for <strong>zooming</strong>.
            <br />
            <strong>Double click</strong> any wall or painting.
            <br />
            Paintings are <strong>interactive</strong>.
          </Html>
        )}

        {/* Show Help Button — same bubble style */}
        <Html className="bubble-style" position={[0, 2, 0]}>
          <button
            onClick={handleInstructionButton}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#333",
              color: "white",
            }}
          >
            {showInstruction ? "Hide help" : "Show help"}
          </button>
        </Html>
      </group>
    </>
  );
};

export default Instructions;
