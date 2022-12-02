import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TripTypeCheckbox({
  isTripTypeActive,
  onIsSecondDatePickerActive,
  isSecondDatePickerActive,
}) {
  const handleChange = () => {
    console.log();
    onIsSecondDatePickerActive(!isSecondDatePickerActive);
  };
  return isTripTypeActive ? (
    <div>
      <p>
        Rounded trip
        <Checkbox {...label} onChange={handleChange}></Checkbox>
      </p>
    </div>
  ) : null;
}
