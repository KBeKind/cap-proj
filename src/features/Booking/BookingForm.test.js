import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";
import { BookingProvider } from "../../context/BookingContext";
describe("BookingForm test", () => {
  const handleSubmit = jest.fn();
  const props = {
    handleSubmit,
  };
  const today = new Date().toISOString().split("T")[0];

  test("Renders the BookingForm Heading", () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookingForm {...props} />
        </MemoryRouter>
      </BookingProvider>
    );

    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test("render all fields correctly", () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookingForm {...props} />
        </MemoryRouter>
      </BookingProvider>
    );
    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numberOfGuestInput = screen.getByLabelText(/Number of Guests/);
    const occassionInput = screen.getByLabelText(/Occassion/);
    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const submitButton = screen.getByRole("button");
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberOfGuestInput).toBeInTheDocument();
    expect(occassionInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("renders all input fields with correct attributes", () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookingForm {...props} />
        </MemoryRouter>
      </BookingProvider>
    );

    // Test Date Input Field
    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    expect(dateInput).toBeRequired();

    // Test Time Select Field
    const timeSelect = screen.getByLabelText("Time");

    expect(timeSelect).toHaveAttribute("id", "time");
    expect(timeSelect).toBeRequired();

    // Test Number Input Field
    const numberInput = screen.getByLabelText("Number of Guests");
    expect(numberInput).toHaveAttribute("type", "number");
    expect(numberInput).toHaveAttribute("id", "number");
    expect(numberInput).toHaveAttribute("min", "1");
    expect(numberInput).toHaveAttribute("max", "10");
    expect(numberInput).toBeRequired();

    // Test Occasion Select Field
    const occasionSelect = screen.getByLabelText("Occassion");

    expect(occasionSelect).toHaveAttribute("id", "occassion");
    expect(occasionSelect).toBeRequired();

    // Test First Name Input Field
    const firstNameInput = screen.getByLabelText("First Name");
    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(firstNameInput).toHaveAttribute("id", "firstName");
    expect(firstNameInput).toBeRequired();

    // Test Last Name Input Field
    const lastNameInput = screen.getByLabelText("Last Name");
    expect(lastNameInput).toHaveAttribute("type", "text");
    expect(lastNameInput).toHaveAttribute("id", "lastName");
    expect(lastNameInput).toBeRequired();

    // Test Email Input Field
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("id", "email");
    expect(emailInput).toBeRequired();

    // Test Phone Number Input Field
    const phoneNumberInput = screen.getByLabelText("Phone Number");
    expect(phoneNumberInput).toHaveAttribute("type", "text");
    expect(phoneNumberInput).toHaveAttribute("id", "phoneNumber");
    expect(phoneNumberInput).toBeRequired();
  });

  test("Booking form can be submitted when the are fields are not empty", () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookingForm {...props} />
        </MemoryRouter>
      </BookingProvider>
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numberOfGuestInput = screen.getByLabelText(/Number of Guests/);
    const occassionInput = screen.getByLabelText(/Occassion/);
    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const submitButton = screen.getByRole("button");

    fireEvent.change(dateInput, { target: { value: today } });
    fireEvent.change(timeInput, { target: { value: "17:00" } });
    fireEvent.change(numberOfGuestInput, { target: { value: "1" } });
    fireEvent.change(occassionInput, { target: { value: "birthday" } });
    fireEvent.change(firstNameInput, { target: { value: "Alexa" } });
    fireEvent.change(lastNameInput, { target: { value: "Miro" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(phoneNumberInput, { target: { value: "111111" } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
  test("submit button is disabled with no inputs", () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookingForm {...props} />
        </MemoryRouter>
      </BookingProvider>
    );
    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numberOfGuestInput = screen.getByLabelText(/Number of Guests/);
    const occassionInput = screen.getByLabelText(/Occassion/);
    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const submitButton = screen.getByRole("button");

    fireEvent.change(dateInput, { target: { value: today } });
    fireEvent.change(timeInput, { target: { value: "17:00" } });
    fireEvent.change(numberOfGuestInput, { target: { value: "12" } });
    fireEvent.change(occassionInput, { target: { value: "birthday" } });
    fireEvent.change(firstNameInput, { target: { value: "Alexa" } });
    fireEvent.change(lastNameInput, { target: { value: "Miro" } });
    fireEvent.change(emailInput, { target: { value: "test@test" } });
    fireEvent.change(phoneNumberInput, { target: { value: "111111" } });
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
  });
});
