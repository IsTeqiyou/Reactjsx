import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { DeliveryStatus, Greeting, Notification } from "./m5/finaly.jsx";
import RenderingList from "./m6/Try.jsx";
import UserList from "./m6/praktek.jsx";
import Card from "./m6/RenderingList/fragments/Card.jsx";
import App from "./m6/RenderingList/fragments/App.jsx";
import Event from "./m7/try.jsx";
import PreventDefaultExample from "./m7/praktek.jsx";
import EventPropagationExample from "./m7/praktek2.jsx";
import ShowAlert from "./m7/praktek3.jsx";
import SimpleClick from "./m7/praktek4.jsx";








createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleClick />
  </StrictMode>
);
