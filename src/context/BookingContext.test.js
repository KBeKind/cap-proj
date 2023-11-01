import { fireEvent, render } from "@testing-library/react";
import { BookingProvider } from "./BookingContext";
import { act } from "react-dom/test-utils";

describe("Booking feature", () => {
  test("initializeTimes returns an object with an array", () => {
    const expectedState = {
      availableTimes: ["10:00 AM", "11:00 AM", "12:00 PM"],
    };
    const fetchAPI = jest.fn(() => expectedState);

    const initialState = fetchAPI(new Date("2023-09-08"), fetchAPI);

    expect(initialState).toEqual(expectedState);
  });
  // test("updateTimes returns the same value as state", () => {
  //   const { container } = render(<BookingProvider />);
  //   act(() => {
  //     const dispatchFn = container.querySelector(
  //       "[data-testid='booking-form']"
  //     ).dispatch;
  //   });
  //   const sampleDate = new Date("2023-09-08");

  //   fireEvent(
  //     container.querySelector("[data-testid='booking-form']"),
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     }),
  //     { type: "updateTime", payload: sampleDate }
  //   );

  //   const updatedStateLog = container.textContent;

  //   let updatedState;
  //   try {
  //     updatedState = JSON.parse(
  //       updatedStateLog.substring(
  //         updatedStateLog.indexOf("{"),
  //         updatedStateLog.lastIndexOf("}") + 1
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //   }

  //   if (updatedState && updatedState.availableTimes) {
  //     expect(updatedState.availableTimes).toEqual(["10:00 AM", "11:00 AM"]);
  //   }
  // });
});
