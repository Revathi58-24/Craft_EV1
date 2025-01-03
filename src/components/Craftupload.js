import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

export const Craftupload = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get("https://craft-db.onrender.com/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {
        alert("Failed to retrieve categories");
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("category", category);
    
    axios
      .post("https://craft-db.onrender.com/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Data saved successfully");
        setName("");
        setImage(null);
        setPrice("");
        setCategory("");
        
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    marginLeft: '250px', // Offset for the sidebar
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const infield = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#43bfc7",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    ...(isHovered && { backgroundColor: '#6ac1b8' })
  };

  return (
    <>
      <Dashboard />
      <div style={containerStyle}>
        <form
          style={formStyle}
          onSubmit={handleAdd}
          encType="multipart/form-data"
        >
          <div style={formGroupStyle}>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={infield}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              style={infield}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Price:</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={infield}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Category:</label>
            <select
              id="product"
              name="product"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={infield}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Craftupload;
