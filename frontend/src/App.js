import React, { useState, useEffect } from "react";
import { ThemeProvider, Grid } from "@mui/material";
import axios from "axios";
import theme from "./theme";
import Navbar from "./components/Navbar/Navbar";
import TireCard from "./components/TireCard/TireCard";
import TirePopup from "./components/TirePopup/TirePopup";
import SearchPopup from "./components/SearchPopup"; // Import the search popup

function App() {
  const [tires, setTires] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [searchPopupOpen, setSearchPopupOpen] = useState(false); // State for search popup

  const fetchTires = async (searchQuery) => {
    try {
      let endpoint = "http://localhost:5000/api/tires"; // Default endpoint for viewing tires
  
      if (searchQuery) {
        // If searchQuery is provided, use the endpoint for getting tires by size
        endpoint = `http://localhost:5000/api/tires?size=${encodeURIComponent(searchQuery)}`;
      }
  
      const response = await axios.get(endpoint);
      setTires(response.data);
    } catch (error) {
      console.error("Error fetching tires:", error);
    }
  };

  useEffect(() => {
    const fetchTires = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tires");
        setTires(response.data);
      } catch (error) {
        console.error("Error fetching tires:", error);
      }
    };
    
    fetchTires();
  }, []);

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => {
    setPopupOpen(false);
    fetchTires(); // Re-fetch tires after adding a new one
  };

  const handleSearchPopupOpen = () => setSearchPopupOpen(true); // Handler to open search popup
  const handleSearchPopupClose = () => setSearchPopupOpen(false); // Handler to close search popup

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar
          handleAddClick={handlePopupOpen}
          handleSearchClick={handleSearchPopupOpen} // Pass search handler to Navbar
        />
        <Grid container spacing={2} style={{ padding: "20px" }}>
          {tires.map((tire) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={tire._id}>
              <TireCard tire={tire} />
            </Grid>
          ))}
        </Grid>
        <TirePopup open={popupOpen} handleClose={handlePopupClose} />
        <SearchPopup
          open={searchPopupOpen}
          handleClose={handleSearchPopupClose}
        />

        {/* Search Popup */}
      </div>
    </ThemeProvider>
  );
}

export default App;
