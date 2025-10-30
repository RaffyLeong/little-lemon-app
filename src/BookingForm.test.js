import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';


/* Test 1 - Check if "Book Now" button exists */
test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'] // Create fake data and functions for testing
    const mockDispatch = jest.fn()

    render(<BookingForm availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}/>); // Show the BookingForm on a fake webpage for testing
    const headingElement = screen.getByText("Book Now"); // Look for the "Book Now" button text
    expect(headingElement).toBeInTheDocument();     // check the "Book Now" button exists on the page
})


/* Test 2 - Check if all input are "required" */
test('All inputs have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>) // Render form with empty availableTimes and fake dispatch
    const inputs = screen.getAllByRole('textbox')  // Find all text input fields (surname, last name)
    const numberInpusts = screen.getAllByRole('spinbutton') // Find all number input fields (guests)
    const allInputs = [...inputs, ...numberInpusts] // Combine both types of inputs into one array
    allInputs.forEach(input => {
        expect(input).toHaveAttribute('required')
    }) // Check each input has the "required" HTML attribute
})


/* Test 3 - Check Guests input has min/max limits */
test('Guests input has min 1 and max 10', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>)
    const guestsInput = screen.getByPlaceholderText('1') // Find the guests input by its placeholder text "1"
    expect(guestsInput).toHaveAttribute('min', '1') // Verify it has min="1" attribute
    expect(guestsInput).toHaveAttribute('max', '10') // Verify it has max="10" attribute
})


/* Test 4 - Check if submit button is disabled when form is empty */
test('Submit button is disabled when form empty', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>) // Render form with empty fields (default state)
    const submitButton = screen.getByText("Book Now") // Find the submit button
    expect(submitButton).toBeDisabled() // Find the submit button
})