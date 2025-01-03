import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { Button, TextField } from '@mui/material';

export const Addcategory = () => {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState(null);

    // Fetch categories when the component mounts
    useEffect(() => {
        getCategory();
    }, []);

    // Insert new category
    const create = () => {
        axios.post('https://craft-db.onrender.com/category', { category })
            .then(() => {
                alert('Category has been posted successfully');
                setCategory('');
            })
            .catch(() => {
                alert('Failed to post category');
            });
    };

    // Get categories
    const getCategory = () => {
        axios.get('https://craft-db.onrender.com/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch(() => {
                alert('Failed to retrieve category');
            });
    };

    // Handle Edit
    const handleEdit = (cat) => {
        setId(cat._id);
        setCategory(cat.category);
    };

    // Handle Update
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://craft-db.onrender.com/category/${id}`, { category })
            .then(() => {
                alert("Data updated successfully");
                setCategory("");
                setId(null);
                getCategory(); // Refresh the list after updating a category
            })
            .catch(() => {
                alert("Data not updated");
            });
    };

    // Handle Delete
    const handleDelete = (cat) => {
        axios.delete(`https://craft-db.onrender.com/category/${cat._id}`)
            .then(() => {
                alert("Data deleted");
                getCategory(); // Refresh the list after deleting a category
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
        marginLeft: '250px', 
    };

    return (
        <>
            <Dashboard />
            <div style={containerStyle}>
                <div style={{ display: 'flex' }}>
                    <TextField id="category" label="New Category" variant="outlined" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <br/>
                    <Button variant="outlined" onClick={create} style={{ marginLeft: '10px' }}>Add Category</Button><br/>
                    <Button variant="outlined" onClick={getCategory} style={{ marginLeft: '10px' }}>Get Category</Button><br/>
                    {id && <Button variant="outlined" onClick={handleUpdate} style={{ marginLeft: '10px' }}>Update Category</Button>}
                </div>
                <ol>
                    {categories.map((item) => (
                        <li key={item._id}>
                            {item.category}
                            <Button onClick={() => handleEdit(item)}>Edit</Button>
                            <Button onClick={() => handleDelete(item)}>Delete</Button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
};
