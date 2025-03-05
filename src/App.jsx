import { useState, useEffect, useRef } from "react";

function App() {
  const playerRef = useRef();
  const [player, setPlayer] = useState(null);
  const [getCurrentFrame, setGetCurrentFrame] = useState(null);

  useEffect(() => {
    if (playerRef.current) {
      const newPlayer = new window.playerjs.Player(playerRef.current);
      setPlayer(newPlayer);
    }
  }, []);

  const selectCurrentFrame = () => {
    if (player) {
      player.getCurrentTime((value) => {
        setGetCurrentFrame(value);
      });
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <iframe
        style={{
          width: "100%",
          height: "80vh",
        }}
        src="https://play.gumlet.io/embed/66792c139d5b36a32e4fbead"
        referrerPolicy="origin"
        title="Gumlet video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ref={playerRef}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <button
          onClick={selectCurrentFrame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Select current frame
        </button>
        <div
          style={{
            padding: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "2px solid #ddd",
            borderRadius: "5px",
            minWidth: "100px",
            textAlign: "center",
          }}
        >
          {getCurrentFrame !== null ? getCurrentFrame : "No frame selected"}
        </div>
      </div>
    </div>
  );
}

export default App;
