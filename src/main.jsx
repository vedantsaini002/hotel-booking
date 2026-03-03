// console.log("Clerk Key:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

  
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { ClerkProvider } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Add your Clerk Publishable Key to the .env file");
// }

// createRoot(document.getElementById("root")).render(
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ClerkProvider>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// Get Clerk key from environment
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Debug log (you can remove later)
console.log("Clerk Key:", PUBLISHABLE_KEY);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      {PUBLISHABLE_KEY ? (
        <ClerkProvider
          publishableKey={PUBLISHABLE_KEY}
          afterSignOutUrl="/"
        >
          <App />
        </ClerkProvider>
      ) : (
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <h2>⚠ Clerk Publishable Key Missing</h2>
          <p>
            Please add <b>VITE_CLERK_PUBLISHABLE_KEY</b> in your Vercel
            Environment Variables.
          </p>
        </div>
      )}
    </BrowserRouter>
  </StrictMode>
);
