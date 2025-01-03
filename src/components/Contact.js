import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Button.css'
const Contact = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedProducts: [],
    message: "",
  });

  useEffect(() => {
    // Fetch product data to populate checkboxes
    axios
      .get("https://craft-db.onrender.com/get")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (productName) => {
    setFormData((prevState) => {
      const { selectedProducts } = prevState;
      if (selectedProducts.includes(productName)) {
        return {
          ...prevState,
          selectedProducts: selectedProducts.filter(
            (product) => product !== productName
          ),
        };
      } else {
        return {
          ...prevState,
          selectedProducts: [...selectedProducts, productName],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello!%20I%20am%20interested%20in%20the%20following%20products:%20${formData.selectedProducts.join(
      ", "
    )}%20.%20My%20name%20is%20${formData.name}%20and%20my%20email%20is%20${formData.email}.%20Message:%20${formData.message}`;

    const emailMessage = `Hello!%0A%0AI'm%20interested%20in%20the%20following%20products:%20${formData.selectedProducts.join(
      ", "
    )}.%0A%0AName:%20${formData.name}%0AEmail:%20${formData.email}%0A%0AMessage:%0A${formData.message}`;

    // WhatsApp Link
    const whatsappUrl = `https://wa.me/919345587560?text=${whatsappMessage}`;

    // Email Link
    const emailUrl = `mailto:revathip.21it@kongu.edu?subject=Product%20Inquiry&body=${emailMessage}`;

    // Open WhatsApp and Email links
    window.open(whatsappUrl, "_blank");
    window.open(emailUrl, "_blank");

    // Show toast messages
    toast.success("Your message has been sent via WhatsApp!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.success("Your email has been sent!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      selectedProducts: [],
      message: "",
    });
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    // border: "1px solid #ccc",
    // borderRadius: "8px",
    // backgroundColor: "#f9f9f9",
  //   backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/641/336/non_2x/cherry-blossom-flower-background-square-social-media-template-banner-illustration-cute-pink-floral-background-for-spring-summer-with-copy-space-vector.jpg')",
  // backgroundSize: "cover", // Ensures the image covers the entire area
  // backgroundPosition: "center", // Centers the image
  // height: "130vh", // Example height (adjust as needed)
  // width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#FB6B90",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const checkboxContainerStyle = {
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    backgroundColor: "#fff",
  };

  return (
    <>
    
    <br/>
    <br/>
    
      <form onSubmit={handleSubmit} style={formStyle}>
        <br/>
      <h2 style={{ textAlign: "center", color: "#E34234",fontFamily:'cursive' }}>Get in Touch</h2>
  <p style={{ textAlign: "center", marginBottom: "20px", color: "#B7410E",fontFamily:'serif',fontWeight:'bold' }}>
    Select the products you're interested in and let us know how we can assist you. We'll get back to you shortly!
  </p>

        {/* Name Field */}
        <label htmlFor="name" style={{ fontWeight: "bold" }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          style={inputStyle}
          required
        />

        {/* Email Field */}
        <label htmlFor="email" style={{ fontWeight: "bold" }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          style={inputStyle}
          required
        />

        {/* Product Selection Checkboxes */}
        <label style={{ fontWeight: "bold" }}>Select Products:</label>
        <div style={checkboxContainerStyle}>
          {products.map((product) => (
            <div key={product._id}>
              <input
                type="checkbox"
                id={product._id}
                name="selectedProducts"
                value={product.name}
                checked={formData.selectedProducts.includes(product.name)}
                onChange={() => handleCheckboxChange(product.name)}
              />
              <label htmlFor={product._id} style={{ marginLeft: "10px" }}>
                {product.name}
              </label>
            </div>
          ))}
        </div>

        
        <label htmlFor="message" style={{ fontWeight: "bold" }}>Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Write your message"
          style={{ ...inputStyle, height: "100px" }}
          required
        ></textarea>
        <br/>
        <br/>
        <center>
        <button type="submit" className="unique-contact-button">
          Send Message
        </button>
        </center>
      </form>
      
      <br/>
      <br/>
    
    </>
  );
};

export default Contact;
