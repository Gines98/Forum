import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ArrivalAirportSelect({
  isArrivalActive,
  onIsTripTypeChange,
}) {
  const [ArrivalAirport, setArrivalAirport] = React.useState(-1);

  const handleChange = (event) => {
    setArrivalAirport(event.target.value);
    onIsTripTypeChange(true);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        {isArrivalActive ? (
          <>
            <p>Please choose the arrival airport</p>
            <FormControl
              fullWidth
              variant="filled"
              sx={{
                backgroundColor: "#d9c1e0",
              }}
            >
              <InputLabel id="arrival-airport-select-label">
                Arrival Airport
              </InputLabel>
              <Select
                labelId="arrival-airport-select-label"
                id="arrival-airport-select"
                value={ArrivalAirport}
                label="Aeropuerto de destino"
                onChange={handleChange}
              >
                <MenuItem value={0}>Alicante</MenuItem>
                <MenuItem value={1}>Tenerife Norte</MenuItem>
                <MenuItem value={2}>Tenerife Sur</MenuItem>
                <MenuItem value={3}>Madrid Barajas</MenuItem>
                <MenuItem value={4}>Valencia</MenuItem>
                <MenuItem value={-1}>-</MenuItem>
              </Select>
            </FormControl>
          </>
        ) : null}
      </Box>
    </div>
  );
}
