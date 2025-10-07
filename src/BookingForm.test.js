import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';


/* Check if "Book Now" button exists */
test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00']
    const mockDispatch = jest.fn()

    render(<BookingForm availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}/>);

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


/* Check if all input are "required" */
test('All inputs have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>)

    const inputs = screen.getAllByRole('textbox')
    const numberInpusts = screen.getAllByRole('spinbutton')
    const allInputs = [...inputs, ...numberInpusts]

    allInputs.forEach(input => {
        expect(input).toHaveAttribute('required')
    })
})


/* Check guests input has min/max limits */
test('Guests input has min 1 and max 10', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>)

    const guestsInput = screen.getByPlaceholderText('1')
    expect(guestsInput).toHaveAttribute('min', '1')
    expect(guestsInput).toHaveAttribute('max', '10')
})

/* Check if submit button is disabled when form is empty */
test('Submit button is disabled when form empty', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>)

    const submitButton = screen.getByText("Book Now")
    expect(submitButton).toBeDisabled()
})