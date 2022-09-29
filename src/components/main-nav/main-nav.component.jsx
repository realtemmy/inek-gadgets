import "./main-nav.style.scss";

const MainNavigation = () => {
  return (
    <div className="main-nav-container">
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-1 d-md-none">
            <div className="hamburger">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="col-2">Inek</div>
          <div className="col-10 col-md-4 w-20 search">
            <div>
              <input
                type="text"
                className="search-input"
                placeholder="Search here..."
              />
              <span className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className="col-3 col-md-1">
            <div className="d-flex justify-content-around">
              <div>
                <i className="fa-regular fa-square-minus"></i>
              </div>
              <div className="cart-icon">
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <sup>0</sup>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-2 mb-md-auto text-end">
            <button className="btn button">
              <i className="fa-solid fa-user me-1"></i>My account
            </button>
          </div>
        </div>
        {/* <div className="d-flex justify-content-between align-items-center">
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
*/}
      </div>
    </div>
    // </div>
  );
};
export default MainNavigation;
