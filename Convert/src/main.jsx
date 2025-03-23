import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css"; // Import consolidated CSS file
import App from "./App";

console.log("Main.jsx executing");

try {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // Add error boundary for better error reporting
  const ErrorFallback = ({ error }) => {
    console.error("React error:", error);
    return (
      <div
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "5px",
        }}
      >
        <h2>Something went wrong!</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          <summary>View error details</summary>
          {error.stack}
        </details>
      </div>
    );
  };

  // Create error boundary wrapper
  class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return <ErrorFallback error={this.state.error} />;
      }
      return this.props.children;
    }
  }

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error rendering the app:", error);
  document.body.innerHTML = `
    <div style="color: white; padding: 20px; text-align: center; font-family: sans-serif;">
      <h1>Application Error</h1>
      <p>There was an error starting the application. Please check the console for details.</p>
      <pre style="background: rgba(255,255,255,0.1); padding: 10px; text-align: left; overflow: auto;">${error.stack}</pre>
    </div>
  `;
}
