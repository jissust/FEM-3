import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import { ExtensionsProvider } from "./context/DataContext";

function App() {
  return (
    <ExtensionsProvider>
      <main className="py-[19px] md:py-[42px] bg-gradient-to-br from-[#ECF3FD] to-[#EFFBF9] dark:from-[#050A1D] dark:to-[#0A1640] px-[17px] xl:px-0">
        <Header />
        <Grid />
      </main>
    </ExtensionsProvider>
  );
}

export default App;
