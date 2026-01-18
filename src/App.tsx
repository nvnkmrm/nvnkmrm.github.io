import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

/**
 * Root App component
 * Provides routing context to the entire application
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
