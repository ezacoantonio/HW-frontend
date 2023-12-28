import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import TireCard from "./TireCard/TireCard"; // Adjust path as needed
import Alert from "@mui/material/Alert";

function SearchPopup({ open, handleClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Check if searchQuery is in the valid tire size format
      const tireSizePattern = /^\d{3}\/\d{2}R\d{2}$/;
      if (tireSizePattern.test(searchQuery)) {
        // Use the getTiresBySize endpoint for valid size format
        const response = await axios.get(
          `http://localhost:5000/api/tires/bySize?size=${encodeURIComponent(
            searchQuery
          )}`
        );
        setSearchResults(response.data);
      } else {
        // Use the viewTires endpoint for other search queries
        const response = await axios.get(
          `http://localhost:5000/api/tires?search=${encodeURIComponent(
            searchQuery
          )}`
        );
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error("Error searching tires:", error);
    }
  };
  

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Search Tires</DialogTitle>
      <DialogContent>
        {showAlert && (
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            Invalid tire size format. Please enter the size in the format
            "215/65R16".
          </Alert>
        )}

        <TextField
          autoFocus
          margin="dense"
          label="Search Tires"
          type="text"
          fullWidth
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={(event) => event.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch} color="primary">
          Search
        </Button>
        <div style={{ marginTop: "20px" }}>
          {searchResults.map((tire) => (
            <TireCard key={tire._id} tire={tire} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchPopup;
