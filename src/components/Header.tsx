import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="/cruz-roja-logo.svg" 
            alt="Cruz Roja Colombiana" 
            className="logo"
          />
          <div className="header-text">
            <h1>Cruz Roja Colombiana</h1>
            <h2>Sede Villamaría</h2>
          </div>
        </div>
        <div className="header-description">
          <p>Conoce a nuestro equipo de trabajo comprometido con el servicio humanitario</p>
        </div>
      </div>
    </header>
  )
}

export default Header