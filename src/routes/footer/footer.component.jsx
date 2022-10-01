import FooterMail from "../../components/footer-mail/footer-mail.component";
import FooterDatails from "../../components/footer-details/footer-details.component";
import FooterFoot from "../../components/footer-foot/footer-foot.component";
const Footer = () =>{
    return (
    <div className="footer">
        <FooterMail />
        <FooterDatails/>
        <FooterFoot />
    </div>
    );
}

export default Footer;