import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";
import CustomCalendar from "../components/dashboard/CustomCalendar";
import TimeSelector from "../components/dashboard/TimeSelector";
import PartySelector from "../components/dashboard/PartySelector";
import { useReservation } from "../hooks/useReservation";

function NewReservation() {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPartySize, setSelectedPartySize] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { addReservation } = useReservation();

  const steps = [
    { title: "Select Date", icon: Calendar },
    { title: "Select Time", icon: Clock },
    { title: "Party Size", icon: Users },
    { title: "Confirm", icon: CheckCircle },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setError(null);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setError(null);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return selectedDate !== null;
      case 1:
        return selectedTime !== null;
      case 2:
        return selectedPartySize !== null;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleSubmitReservation = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const reservationData = {
        date: selectedDate.toISOString().split("T")[0],
        time: selectedTime,
        partySize: selectedPartySize,
      };

      const result = await addReservation(reservationData);

      if (result.success) {
        alert("Reservation created successfully!");
        // Reset form or redirect to success page
        // You could redirect here: navigate('/reservations')
      } else {
        setError(result.error || "Failed to create reservation");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-2.5 md:px-20 py-8">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {steps.map((stepInfo, index) => {
            const Icon = stepInfo.icon;
            const isActive = index === step;
            const isCompleted = index < step;

            return (
              <div key={index} className="flex flex-col items-center relative">
                <div
                  className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-[#81A68D] to-[#2C3E36] border-[#81A68D] text-white shadow-lg"
                      : isCompleted
                      ? "bg-[#81A68D] border-[#81A68D] text-white"
                      : "bg-[#D9D4C8]/30 border-[#D9D4C8] text-[#2C3E36]"
                  }
                `}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`
                  text-xs mt-2 font-medium transition-all duration-300
                  ${isActive ? "text-[#2C3E36]" : "text-[#2C3E36]/60"}
                `}
                >
                  {stepInfo.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`
                    absolute top-6 left-12 w-full h-0.5 transition-all duration-300
                    ${isCompleted ? "bg-[#81A68D]" : "bg-[#D9D4C8]/30"}
                  `}
                    style={{ width: "calc(100vw/4 - 3rem)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {step === 0 && (
          <div className="flex flex-col justify-between md:flex-row gap-8">
            <div className="w-full">
              <CustomCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-light text-[#2C3E36] mb-2">
                  Select a Date
                </h2>
                <p className="text-[#2C3E36]/70">
                  Choose your preferred reservation date
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col justify-between md:flex-row gap-8">
            <div className="w-full">
              <TimeSelector
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-light text-[#2C3E36] mb-2">
                  Select Time
                </h2>
                <p className="text-[#2C3E36]/70">
                  Choose your preferred reservation time
                </p>
                {selectedDate && (
                  <p className="text-sm text-[#81A68D] mt-2 font-medium">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col justify-between md:flex-row gap-8">
            <div className="w-full">
              <PartySelector
                selectedPartySize={selectedPartySize}
                onPartySizeSelect={setSelectedPartySize}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-light text-[#2C3E36] mb-2">
                  Party Size
                </h2>
                <p className="text-[#2C3E36]/70">
                  How many guests will join you?
                </p>
                <div className="mt-4 space-y-1">
                  {selectedDate && (
                    <p className="text-sm text-[#81A68D] font-medium">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  {selectedTime && (
                    <p className="text-sm text-[#81A68D] font-medium">
                      {selectedTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#2C3E36]/10 backdrop-blur-xl border border-[#81A68D]/30 rounded-2xl shadow-xl p-8 max-w-md w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE2]/20 to-[#D9D4C8]/5 pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-light text-[#2C3E36] mb-6">
                  Confirm Reservation
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-[#D9D4C8]/20 rounded-xl">
                    <span className="text-[#2C3E36]/70">Date:</span>
                    <span className="font-medium text-[#2C3E36]">
                      {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#D9D4C8]/20 rounded-xl">
                    <span className="text-[#2C3E36]/70">Time:</span>
                    <span className="font-medium text-[#2C3E36]">
                      {selectedTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#D9D4C8]/20 rounded-xl">
                    <span className="text-[#2C3E36]/70">Guests:</span>
                    <span className="font-medium text-[#2C3E36]">
                      {selectedPartySize}{" "}
                      {selectedPartySize === 1 ? "guest" : "guests"}
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSubmitReservation}
                  disabled={isLoading}
                  className="w-full p-4 bg-gradient-to-br from-[#81A68D] to-[#2C3E36] text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading
                    ? "Creating Reservation..."
                    : "Confirm Reservation"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9D4C8]/30 border border-[#D9D4C8]/40 text-[#2C3E36] hover:bg-[#D9D4C8]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        {step < 3 ? (
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[#81A68D] to-[#2C3E36] text-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NewReservation;
