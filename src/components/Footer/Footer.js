import {
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaSkype,
  FaWhatsapp
} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_icons">
          <a className='url' href="https://etrafficwebexpert.com/"><FaGlobe /></a>
          <a className='linkedin' href="https://www.linkedin.com/company/etraffic-webexpert"><FaLinkedin /></a>
          <a className='facebook' href="https://www.facebook.com/eTrafficWeb"><FaFacebook /></a>
          <a className='skype' href="skype:etrafficwebexpert"><FaSkype /></a>
          <a className='whatsapp' href="https://wa.me/8307715859"><FaWhatsapp /></a>
        </div>
        <div className="footer_text">
          <p>Etraffic Webexpert</p>
        </div>
      </footer>
    </>
    //<div
    //   style={{
    //     textAlign: "center",
    //     marginBottom: 10,
    //   }}
    // >
    //   Made with ♥ by{" "}
    //   <a
    //     href="https://www.youtube.com/roadsidecoder"
    //     style={{ cursor: "pointer" }}
    //   >
    //     Roadside Coder
    //   </a>
    // </div>
    
    
  );
};

export default Footer;
