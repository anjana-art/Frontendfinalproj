import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import PRODUCTS from "../products";

export default function Filter({ productItems, filterItems, setItems }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <div>
          <h4>Filter</h4>

          {productItems.map((val) => (
            <Button variant="outlined" onClick={() => filterItems(val)}>
              {val}
            </Button>
          ))}

          <Button variant="outlined" onClick={() => setItems(PRODUCTS)}>
            All
          </Button>
        </div>
      </Box>
    </div>
  );
}
