import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';


test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00']
    const mockDispatch = jest.fn()

    render(<BookingForm availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}/>);


    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})