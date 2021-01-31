import React from 'react'
import { render,fireEvent, getByLabelText} from "@testing-library/react"
import Contact from "../../src/components/contact"
it("renders or not",() => {
    const {queryByPlaceholderName} = render(<Contact />) 
    expect(queryByPlaceholderName('Name')).toBeTruthy();
    expect(getByLabelText("Name")).toHaveTextContent("Name");
})

