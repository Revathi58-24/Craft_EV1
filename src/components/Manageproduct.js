import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

export const Manage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleRead();
    getCategory();
  }, []);

  const handleRead = () => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error occurred while fetching data", err);
      });
  };

  const getCategory = () => {
    axios.get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {
        alert("Failed to retrieve categories");
      });
  };

  const handleEdit = (craft) => {
    setId(craft._id);
    setName(craft.name);
    setImage(craft.image);
    setPrice(craft.price);
    setCategory(craft.category);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }
    formData.append("price", price);
    formData.append("category", category);

    axios
      .put(`http://localhost:5000/updating/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Data updated successfully");
        setName("");
        setImage(null);
        setPrice("");
        setCategory("");
        setId(null);
        handleRead();
      })
      .catch(() => {
        alert("Data not updated");
      });
  };

  const handleDelete = (craft) => {
    axios
      .delete(`http://localhost:5000/delete/${craft._id}`)
      .then(() => {
        alert("Data deleted");
        handleRead();
      })
      .catch(() => {
        alert("Error occurred in delete");
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

  const tableContainerStyle = {
    marginTop: '20px',
    width: '80%',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
  };

  const theadStyle = {
    backgroundColor: '#f4f4f4',
  };

  const imgStyle = {
    display: 'block',
    margin: '0 auto',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
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
  };

  const buttonHoverStyle = {
    backgroundColor: '#6ac1b8',
  };

  return (
    <div>
      <Dashboard />
      <div style={containerStyle}>
        <div style={tableContainerStyle}>
          <table style={tableStyle} border="1">
            <thead style={theadStyle}>
              <tr>
                <th style={thTdStyle}>Name</th>
                <th style={thTdStyle}>Image</th>
                <th style={thTdStyle}>Price</th>
                <th style={thTdStyle}>Category</th>
                <th style={thTdStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={index}>
                  <td style={thTdStyle}>{product.name}</td>
                  <td style={thTdStyle}>
                    {product.image && (
                      <img
                        src={`http://localhost:5000/image/${product._id}`}
                        alt={product.name}
                        width="50"
                        height="50"
                        style={imgStyle}
                      />
                    )}
                  </td>
                  <td style={thTdStyle}>{product.price}</td>
                  <td style={thTdStyle}>{product.category}</td>
                  <td style={thTdStyle}>
                    <button
                      onClick={() => handleEdit(product)}
                      style={buttonStyle}
                      onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                      onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                      Edit
                    </button>&nbsp;
                    <button
                      onClick={() => handleDelete(product)}
                      style={buttonStyle}
                      onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                      onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {id && (
          <div style={{ marginTop: '20px' }}>
            <h3>Edit Product</h3>
            <form onSubmit={handleUpdate} style={formStyle}>
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
                    <option key={cat._id} value={cat.category}>{cat.category}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
