import BookingForm from "../features/Booking/BookingForm";
import { useBooking } from "../context/BookingContext";

const Booking = () => {
  // eslint-disable-next-line
  const { handleSubmit } = useBooking();

  return <BookingForm handleSubmit={handleSubmit} />;
};

export default Booking;
