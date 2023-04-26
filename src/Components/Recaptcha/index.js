import ReCAPTCHA from "react-google-recaptcha";
import './Recaptcha.css'
function Recaptcha() {
    const handleCaptcha = (token) => {
      console.log(token);
    };
  
    return (
      <div className="recaptcha">
        <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptcha} />
      </div>
    );
  }
  export default Recaptcha;
  