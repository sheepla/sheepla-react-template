import "./App.css";
import { AppBar } from "./components/shared/AppBar";
import DynamicBreadcrumbs from "./components/shared/DynamicBreadcrumbs";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AppBar />
      <DynamicBreadcrumbs />
      <Button variant="outline">Click me!</Button>
    </ThemeProvider>
  );
}

export default App;
