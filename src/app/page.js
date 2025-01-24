"use client"
// components/NameCard.js
export default function NameCard() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    margin: "0",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "350px",
    height: "300px",
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
  };

  const gradientStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    zIndex: "-1",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "3px solid white",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  };

  const subtitleStyle = {
    fontSize: "16px",
    marginTop: "5px",
    opacity: "0.9",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={gradientStyle}></div>
        <img
          src="https://picsum.photos/200/300"
          alt="Cute Kitten"
          style={imageStyle}
        />
        <h1 style={nameStyle}>Hola Glender!</h1>
        <p style={subtitleStyle}>Bienvenid@ a mi portafolio</p>
      </div>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
