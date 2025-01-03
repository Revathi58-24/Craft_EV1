import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching
    axios
      .get("http://localhost:5000/get")
      .then((response) => {
        setProducts(response.data);
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f8f8f8",
  };

  const cardStyle = (isHovered) => ({
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: isHovered
      ? "0 8px 15px rgba(0, 0, 0, 0.2)"
      : "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
    transition: "all 0.3s ease",
    backgroundColor: "#fff",
  });

  const buttonContainerStyle = {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    
  };

  const imageStyle = {
    width: "100%",
    height: "230px",
  };

  const contentStyle = {
    padding: "15px",
  };

  const titleStyle = {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333333",
  };
  
  const priceStyle = {
    marginBottom: "10px",
    fontSize: "18px",
    color: "#333333",  // Darker color
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  };
  
  const categoryStyle = {
    fontSize: "14px", // Smaller font size
    color: "#a0a0a0", // Light ash color
    fontStyle: "italic", // Optional: adds a bit of style to the text
    marginTop: "5px", // Adds some spacing above the category
  };
  

  const buttonStyleBase = {
    width: "200px", // Consistent width for both buttons
    padding: "10px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };
  
  // Email button style
  const emailButtonStyle = {
    ...buttonStyleBase,
    border: "2px solid #001540", // Dark blue border
    backgroundColor: "transparent",
    color: "#001540",
  };
  
  const emailButtonHoverStyle = {
    backgroundColor: "#001540",
    color: "#fff",
  };
  
  const whatsappButtonStyle = {
    ...buttonStyleBase,
    border: "2px solid #004000", 
    backgroundColor: "transparent",
    color: "#004000",
  };
  
  const whatsappButtonHoverStyle = {
    backgroundColor: "#004000",
    color: "#fff",
  };
  
  
  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleEmailClick = (product) => {
    const emailSubject = `Inquiry about ${product.name}`;
    const emailBody = `Hello, I am interested in the product "${product.name}" priced at ₹${product.price}. Please provide more details.`;
    window.location.href = `mailto:ennangalvannangalaka25@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hello, I am interested in the product "${product.name}" priced at ₹${product.price}. Please provide more details.`;
    const phoneNumber = "917092488301";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleMouseEnter = (id) => setHoveredCard(id);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <div>
      
      <div style={{ textAlign: "center", marginTop: "40px" }}>
      
        <h4
          style={{
            color: "#fff",
            fontFamily: "cursive",
            textAlign: "center",
            position: "relative",
            display: "inline-block",
            background:
              "linear-gradient(90deg, #40E0D0, #FF0080, #FFD700 )",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 5s infinite linear",
            padding: "10px 20px",
            borderRadius: "8px",
            textTransform: "uppercase",
          }}
        >
          "Welcome to our curated collection, where you'll find an array of
          beautifully crafted, handmade treasures"
        </h4>
      </div>
      <div style={{ margin: "20px", textAlign: "center" }}>
            <label
              htmlFor="category-select"
              style={{
                marginRight: "10px",
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "#5F9EA0",
                fontWeight: "bold",
              }}
            >
              Filter by category:
            </label>
            <select
              id="category-select"
              onChange={handleCategoryChange}
              value={selectedCategory}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                minWidth: "150px",
              }}
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #09f;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 50px auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <div>
          
          <div style={containerStyle}>
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                style={cardStyle(hoveredCard === product._id)}
                onMouseEnter={() => handleMouseEnter(product._id)}
                onMouseLeave={handleMouseLeave}
              >
                {product.image && product.image.data ? (
                  <img
                    src={`http://localhost:5000/image/${product._id}`}
                    alt={product.name}
                    style={imageStyle}
                  />
                ) : (
                  <div style={imageStyle}>No image available</div>
                )}
                <div style={contentStyle}>
                <div style={titleStyle}> {product.name} </div>
                  <div style={priceStyle}>₹{product.price}</div>
                  <div style={categoryStyle}>{product.category}</div>
                  <div style={buttonContainerStyle}>
  {hoveredCard === product._id && (
    <>
      <button
        style={emailButtonStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, emailButtonHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, emailButtonStyle)}
        onClick={() => handleEmailClick(product)}
      >
        Contact via Email
      </button>
      <button
        style={whatsappButtonStyle}
        onMouseEnter={(e) =>
          Object.assign(e.target.style, whatsappButtonHoverStyle)
        }
        onMouseLeave={(e) =>
          Object.assign(e.target.style, whatsappButtonStyle)
        }
        onClick={() => handleWhatsAppClick(product)}
      >
        Contact via WhatsApp
      </button>
    </>
  )}
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
