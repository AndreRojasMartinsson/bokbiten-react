import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";

// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(async () => import("./App.tsx"));

import "@styles/fonts.css";
import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SpeedInsights />
		<App />
	</React.StrictMode>
);
