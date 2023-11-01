import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from '../App';


beforeEach(()=> render(<App />));
afterEach(cleanup);

test('Renders the BookingForm heading', () => {
    fireEvent.click(screen.getByTestId('reserve_button'));
    const headingElement = screen.getByTestId("current_res_test"); 
    expect(headingElement).toHaveTextContent("Current Reservations");
});


test('Guests html attribute required', () => {
    const element = screen.getByTestId("input_guests_test"); 
    const attr = element.getAttribute("required");
    expect.any(attr);
});

test('Date html attribute required', () => {
    const element = screen.getByTestId("input_date_test"); 
    const attr = element.getAttribute("required");
    expect.any(attr);
});

test('Time html attribute required', () => {
    const element = screen.getByTestId("input_time_test"); 
    const attr = element.getAttribute("required");
    expect.any(attr);
});


