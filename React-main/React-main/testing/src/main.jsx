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
import Counter from "./m8/number.jsx";
import LoginStatus from "./m8/praktek2.jsx";-__
import ProductList from "./m9/map.jsx";
import Card3 from "./m9/praktek1.jsx";
import Card2 from "./m9/praktek1.jsx";
import HomePage from "./m14/soal1/app.jsx";
import BookDetail from "./m14/soal1/app.jsx";





3


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
  