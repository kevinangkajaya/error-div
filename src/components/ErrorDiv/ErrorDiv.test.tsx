import React from "react";
import { render } from "@testing-library/react";

import ErrorDiv from "./ErrorDiv";

describe("ErrorDiv", () => {
    test("renders the ErrorDiv component", () => {
        render(<ErrorDiv error="Hello error!" />);
    });
});