import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogTitle,
} from "@mui/material";
import axios from "axios";

function TirePopup({ open, handleClose }) {
  const [tireData, setTireData] = useState({
    brand: "",
    size: "",
    treadDepth: "",
    year: "",
    location: "",
    price: "",
    condition: "",
    image: "",
  });

  const handleChange = (e) => {
    setTireData({ ...tireData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const formattedData = {
      ...tireData,
      treadDepth: parseInt(tireData.treadDepth, 10), // Convert to integer
      year: parseInt(tireData.year, 10), // Convert to integer
      price: parseFloat(tireData.price), // Convert to float
    };

    try {
      await axios.post("http://localhost:5000/api/tires", formattedData);
      handleClose();
      // Optionally reset tireData state or trigger a re-fetch of tires
    } catch (error) {
      console.error("Error adding tire:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Tire</DialogTitle>
      <DialogContent>
        <TextField
          name="brand"
          label="Brand"
          fullWidth
          margin="dense"
          value={tireData.brand}
          onChange={handleChange}
        />

        <TextField
          name="size"
          label="Size"
          fullWidth
          margin="dense"
          value={tireData.size}
          onChange={handleChange}
        />

        <TextField
          name="treadDepth"
          label="Tread Depth"
          fullWidth
          margin="dense"
          value={tireData.treadDepth}
          onChange={handleChange}
          type="number"
        />

        <TextField
          name="year"
          label="Year"
          fullWidth
          margin="dense"
          value={tireData.year}
          onChange={handleChange}
          type="number"
        />

        <TextField
          name="location"
          label="Location"
          fullWidth
          margin="dense"
          value={tireData.location}
          onChange={handleChange}
        />

        <TextField
          name="price"
          label="Price"
          fullWidth
          margin="dense"
          value={tireData.price}
          onChange={handleChange}
          type="number"
        />

        <TextField
          name="condition"
          label="Condition"
          fullWidth
          margin="dense"
          value={tireData.condition}
          onChange={handleChange}
        />

        <TextField
          name="image"
          label="Image URL"
          fullWidth
          margin="dense"
          value={tireData.image}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Tire</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TirePopup;
