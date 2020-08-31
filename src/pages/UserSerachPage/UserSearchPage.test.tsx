import { fireEvent } from "@testing-library/react";
import * as axios from "axios";
import React from "react";
import { renderWithRedux } from "../../utils/testing.utils";
import UserSearchPage from "./UserSearchPage";
jest.mock("axios");

describe("Should render corectly", () => {
  test("User Overview should not be rendered", () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<UserSearchPage />);
    expect(getByTestId("user-search")).toBeInTheDocument();
    expect(queryByTestId("user-overview")).not.toBeInTheDocument();
  });
});

describe("Should handle event correctly", () => {
  test("should show user overview if searching username is exists", async () => {
    const mockedResponse = {
      login: "login test",
      name: "name",
      id: 1,
      bio: "bio",
      followers: 123,
      following: 456,
    };
    axios.default.get.mockImplementation((url: string) => {
      if (url === "https://api.github.com/users/123") {
        return Promise.resolve({
          data: mockedResponse,
        });
      }
    });

    const { getByTestId, getByText } = renderWithRedux(<UserSearchPage />);
    const input = getByTestId("search-input__input");
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });
    // await new Promise((r) => setTimeout(() => r(), 100));
    await new Promise((resolve) => setTimeout(resolve, 100));
    getByText(mockedResponse.login);

    getByText(mockedResponse.name);
    getByText(mockedResponse.bio);
    expect(getByTestId("user-overview__social-info")).toHaveTextContent(
      mockedResponse.followers +
        " followers·" +
        mockedResponse.following +
        " following"
    );
  });
});
