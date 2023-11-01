import { createContext, useContext, useReducer } from "react";
import { useForm } from "react-hook-form";
import { fetchAPI } from "../api/fetchApi";

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  /************** useForm ********************/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    control,
    watch,
    getValues,
    onBlur,
    onChange,
  } = useForm({
    defaultValues: {
      date: new Date(),
    },
    mode: "all",
  });

  /************** useReducer ********************/
  const initializeTimes = { availableTimes: fetchAPI(new Date()), data: {} };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "updateTime": {
        return { ...state, availableTimes: fetchAPI(new Date(action.payload)) };
      }
      case "submitData": {
        return { ...state, data: action.payload };
      }
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <BookingContext.Provider
      value={{
        register,
        handleSubmit,
        reset,
        errors,
        isValid,
        isDirty,
        control,
        watch,
        getValues,
        state,
        dispatch,
        onChange,
        onBlur,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

const useBooking = () => {
  const context = useContext(BookingContext);
  //   if (context === undefined) {
  //     throw new Error("Booking Context was used outside BookingProvider");
  //   }
  return context;
};

export { BookingProvider, useBooking };
