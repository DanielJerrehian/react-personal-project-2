import globe from '../images/globe.png'

export default function Navbar() {
    return (
      <nav className="navbar">
          <img className="navbar-img" src={globe} alt="Vector Icon of Globe" />
          <h3 className="navbar-title">daniel's travel journal.</h3>
      </nav>
    )
  }