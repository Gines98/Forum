import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./ContainerStyles.css";
import Container from "@mui/material/Container";
import DepartureAirportSelect from "../DepartureAirportSelect/DepartureAirportSelect";
import ArrivalAirportSelect from "../ArrivalAirportSelect/ArrivalAirportSelect";
import TripTypeCheckbox from "../TripTypeCheckbox/TripTypeCheckbox";
import DepartureDatePicker from "../DepartureDatePicker/DepartureDatePicker";
import RoundTripDatePicker from "../RoundTripDatePicker/RoundTripDatePicker";

export default function Fondo() {
  const [isArrivalActive, setIsArrivalActive] = React.useState(false);
  const [isTripTypeActive, setIsTripTypeActive] = React.useState(false);
  const [isSecondDatePickerActive, setIsSecondDatePickerActive] =
    React.useState(false);
  const [arrivalAirport, setArrivalAirport] = React.useState("");
  const [departureAirport, setDepartureAirport] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="m"
        sx={{
          marginTop: "5%",
          bgcolor: "#0000",
          height: "80vh",
          width: "100vh",
          textAlign: "center",
        }}
      >
        <p className="text">Please choose the departure airport</p>
        <DepartureAirportSelect
          onIsArrivalActiveChange={setIsArrivalActive}
          setDepartureAirport={setDepartureAirport}
        ></DepartureAirportSelect>
        <ArrivalAirportSelect
          isArrivalActive={isArrivalActive}
          onIsTripTypeChange={setIsTripTypeActive}
          setArrivalAirport={setArrivalAirport}
        ></ArrivalAirportSelect>
        <TripTypeCheckbox
          isTripTypeActive={isTripTypeActive}
          isSecondDatePickerActive={isSecondDatePickerActive}
          onIsSecondDatePickerActive={setIsSecondDatePickerActive}
        ></TripTypeCheckbox>
        <DepartureDatePicker
          isTripTypeActive={isTripTypeActive}
          setDepartureDate={setDepartureDate}
        ></DepartureDatePicker>
        <RoundTripDatePicker
          isSecondDatePickerActive={isSecondDatePickerActive}
        ></RoundTripDatePicker>
      </Container>
    </React.Fragment>
  );
}
