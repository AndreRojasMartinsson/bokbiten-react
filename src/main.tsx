import React from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";

// eslint-disable-next-line react-refresh/only-export-components

import "@styles/fonts.css";
import "@styles/index.css";
import App from "@App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SpeedInsights />
		<App />
	</React.StrictMode>
);
