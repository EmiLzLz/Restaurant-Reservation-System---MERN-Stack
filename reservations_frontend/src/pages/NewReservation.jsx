import { Calendar } from "lucide-react";
import React from "react";
import CustomCalendar from "../components/dashboard/CustomCalendar";
import TimeSelector from "../components/dashboard/TimeSelector";

function NewReservation() {
  return (
    <div className="w-full px-2.5 md:px-20">
      <div className="calendar-section w-full">
        <div className="calendar py-10 w-full flex flex-col justify-between md:flex-row">
          <div className="calendar-component w-full">
            <CustomCalendar />
          </div>
          <div className="info w-full p-2 text-center">
            <h2>Please, select a date</h2>
          </div>
        </div>
        <div className="time py-10 w-full flex flex-col md:flex-row">
          <div className="time-stocks">
            <TimeSelector />
          </div>
          <div className="info">
            <h2>Please, select the opur of your reservation</h2>
          </div>
        </div>
        <div className="details py-10 w-full flex flex-col md:flex-row">
          <div className="details fields"></div>
          <div className="info">
            <h2>Add info about your companions</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewReservation;
