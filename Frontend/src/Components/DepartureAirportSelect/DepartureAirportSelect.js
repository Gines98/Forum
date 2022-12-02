import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DepartureAirportSelect({ onIsArrivalActiveChange }) {
  const [departureAirport, setDepartureAirport] = React.useState("-");
  const handleChange = (event) => {
    setDepartureAirport(event.target.value);
    onIsArrivalActiveChange(true);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        variant="filled"
        sx={{
          backgroundColor: "#d9c1e0",
        }}
      >
        <InputLabel id="departure-airport-select-label">
          Departure Airport
        </InputLabel>
        <Select
          labelId="departure-airport-select-label"
          id="departure-airport-select"
          value={departureAirport}
          label="Aeropuerto de partida"
          onChange={handleChange}
        >
          <MenuItem value={"Alicante"}>Alicante</MenuItem>
          <MenuItem value={"Tenerife Norte"}>Tenerife Norte</MenuItem>
          <MenuItem value={"Tenerife Sur"}>Tenerife Sur</MenuItem>
          <MenuItem value={"Madrid Barajas"}>Madrid Barajas</MenuItem>
          <MenuItem value={"Valencia"}>Valencia</MenuItem>
          <MenuItem value={"-"}>-</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
