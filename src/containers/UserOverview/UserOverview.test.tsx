import * as axios from "axios";
import React from "react";
import { renderWithRedux } from "../../utils/testing.utils";
import UserOverview from "./UserOverview";

jest.mock("axios");

describe("Should render corectly", () => {
  test("should show user overview if searching username is exists", () => {
    axios.default.get.mockImplementation((url: string) => {
      if (url === "https://api.github.com/users/123") {
        return Promise.resolve({
          data: {
            login: "login test",
            id: 1,
            bio: "bio",
            followers: 123,
            following: 456,
          },
        });
      }
    });

    const { getByTestId, queryByTestId } = renderWithRedux(<UserOverview />);
    expect(getByTestId("user-search")).toBeInTheDocument();
    expect(queryByTestId("user-overview")).not.toBeInTheDocument();
  });
});
