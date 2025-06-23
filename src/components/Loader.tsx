import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px 40px",
          borderRadius: "12px",
          textAlign: "center",
          color: "white",
          fontFamily: "sans-serif",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          minWidth: "250px",
        }}
      >
        <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          🎨 Loading Gallery...
        </div>
        <div
          style={{
            height: "10px",
            width: "100%",
            background: "#444",
            borderRadius: "5px",
            overflow: "hidden",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #00b4db, #0083b0)",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
        <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
};

export default Loader;
