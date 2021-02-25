import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {mockData} from '../utils/mockData';
import App from "../App";
import { fetchShow as mockFetchShow } from "../api/fetchShow";

jest.mock('../api/fetchShow');

test('renders without errors', () => {
    //render before any data and look for fetching data
    mockFetchShow.mockResolvedValueOnce({data: mockData});
    render(<App/>)

})

test("displays proper state if there isnt any data", () => {
    mockFetchShow.mockResolvedValueOnce({ data: null });
    render(<App />);
  
    const isLoading = screen.queryByText(/Fetching data.../i);
    expect(isLoading).toBeInTheDocument();
  });