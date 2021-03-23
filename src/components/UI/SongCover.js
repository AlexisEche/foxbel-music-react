
function SongCover({ type, minWidth ,height,width,children}) {
  const ComponentToRender = "div";

  return (
      <ComponentToRender
        style={{
          background:`url(https://i.pinimg.com/474x/b6/57/14/b65714502dca7a57bad76a2569d3b397.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          minWidth: `${minWidth ? "100%" : "auto" }`,
          width:`${width}`,
          height:`${height}`,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          objectFit:"fill"
      }}
      >{children}</ComponentToRender>
  );
}



export default SongCover;
