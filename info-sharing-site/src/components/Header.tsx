import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* <a href="/" className="logo">
          {"Mieu's Kitty Litter"}
        </a> */}

        <Link to="/" className="logo-banner">
          Mieu's Kitty Litter
        </Link>

        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cat-breeds">Cat Breeds</Link>
            </li>
            <li>
              <a href="/cat-gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
