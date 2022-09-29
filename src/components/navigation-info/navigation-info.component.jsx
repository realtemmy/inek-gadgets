import "./navigation-info.style.scss";

const NavigationInfo = () => {
  return (
    <div className="nav-info-container">
      <div className="container-fluid">
        <div className="d-flex justify-content-between py-2">
          <div className="d-none d-md-flex contact-info">
            <div className="me-3 info">
              {/* Phone */}
              <i className="fa-solid fa-phone"></i>
              <span className="ms-2">+234 806 677 1553</span>
            </div>
            {/* Support Mail */}
            <div className="ms-2 ms-sm-4 info">
              <i className="fa-solid fa-envelope"></i>
              <span className="ms-2">support@gmail.com</span>
            </div>
          </div>

          {/* Navigation help */}
          <div className="d-flex nav-store-info">
            <div className="location info">
              <i className="fa-solid fa-location-dot"></i>
              <span className="ms-1 ms-md-2">Store Locations</span>
            </div>
            <div className="ms-2 ms-sm-4 order info">
              <i className="fa-solid fa-truck"></i>
              <span className="ms-1 ms-md-2">Track your order</span>
            </div>
            {/* Might add dropdown later for currency and Language */}
            <div className="ms-2 ms-sm-4 ps-1 ps-sm-4 currency info">
              <span className="me-1">$Dollar(US) </span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="ms-2 ms-sm-4 language info">
              <span className="me-1">EN(US) </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationInfo;
