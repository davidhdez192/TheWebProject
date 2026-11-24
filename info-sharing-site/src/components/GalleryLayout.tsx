import { Link, Outlet } from "react-router-dom";

function GalleryLayout() {
  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/cat-gallery" className="logo-banner">
            Cat Gallery
          </Link>
          <nav className="main-nav">
            <Link to="/">Return to Home</Link>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default GalleryLayout;
