import { FaInstagram, FaWhatsapp,  FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4F4F4F",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        
      }}
    >
      <div style={{justifyContent:'center'}}>
      <h4>Get In Touch</h4>
      Email: &nbsp;
      <a
          href="mailto:ennangalvannangalaka25@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <FaEnvelope size={15} style={{ color: "white" }} /> ennangalvannangalaka25@gmail.com
        </a>
      </div>
      <br/>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px", display: "flex", justifyContent: "center", gap: "20px" }}>
       
        <a
          href="https://www.instagram.com/ennangal_vannangalaka?igsh=dHBrazFzMmd4dmpy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <FaInstagram size={30} style={{ color: "#f39c12" }} />
        </a>

        <a
          href="https://wa.me/917092488301"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <FaWhatsapp size={30} style={{ color: "#25D366" }} />
        </a>

       
      </div>
      <div style={{ fontSize: "14px", marginTop: "15px" }}>
        &copy; {new Date().getFullYear()} Ennangal Vannangalaka.
      </div>
    </footer>
  );
};

export default Footer;
