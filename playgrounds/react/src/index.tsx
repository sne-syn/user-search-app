import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "@user-search-app/react";
import "@user-search-app/scss/lib/Button.css";
const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(<Button label="Search"></Button>);
