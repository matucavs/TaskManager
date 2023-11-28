// BackgroundImage.js


const BackgroundImage = () => {
  const backgroundColorStyle = {
    backgroundColor: '#191d32', // Ajusta el color según tus preferencias (código hexadecimal)
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div style={backgroundColorStyle}>
    </div>
  );
};

export default BackgroundImage;
