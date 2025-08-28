import ThemeToggleButton from "./ThemeToggleButton";

export function AppBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-muted sticky top-0 z-50">
      <h1 className="text-xl font-bold">My App</h1>

      <ThemeToggleButton />
    </header>
  );
}
