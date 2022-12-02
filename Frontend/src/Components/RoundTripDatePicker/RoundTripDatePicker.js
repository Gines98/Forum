// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export const DatePickerCustom = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RoundTripDatePicker({ isSecondDatePickerActive }) {
  const [date, setDate] = useState(new Date());

  return isSecondDatePickerActive ? (
    <>
      <p>Select trip back date</p>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        container="inline"
        popperPlacement=""
      />
    </>
  ) : null;
}
