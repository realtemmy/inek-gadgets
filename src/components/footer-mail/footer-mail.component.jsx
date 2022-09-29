import "./footer-mail.style.scss";
const FooterMail = () => {
  return (
    <div className="py-3 footer-mail-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-4 col-md-2">LOGO</div>
          <div className="col-12 col-sm-8 col-md-4">
            <h4>Sign Up for Newsletter</h4>
            <p className="paragraph">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="mail-submit">
              <input
                type="text"
                className="p-2 mail-input"
                placeholder="Enter your email here"
              />
              <button className="text-uppercase p-1 btn-subscribe">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMail;
