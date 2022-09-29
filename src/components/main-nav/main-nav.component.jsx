import "./main-nav.style.scss";

const MainNavigation = () => {
  return (
    <div className="main-nav-container">
      <div className="container-fluid py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-md-none hamburger">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo">Inek</div>
          <div className="search">
            <input type="text" className="py-2 px-3 search-input" placeholder="Search here..."/>
            <span className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="d-flex icons">
            <div className="menu me-3 me-ms-4 me-md-5">
              <i className="fa-regular fa-square-minus"></i>
            </div>
            <div className="cart-icon">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
                <sup>0</sup>
              </span>
            </div>
          </div>

          <button className="btn btn-primary button">
            <i className="fa-solid fa-user me-1"></i>My account
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainNavigation;
