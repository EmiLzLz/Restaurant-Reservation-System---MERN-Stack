import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        minDate={new Date()}
      />
    </div>
  );
}
