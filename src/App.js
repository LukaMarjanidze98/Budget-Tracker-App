import BudgetTrackerApp from "./components/BudgetTrackerApp";
import DataProvider from "./Context";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <>
      <CssBaseline />
      <DataProvider>
        <BudgetTrackerApp />
      </DataProvider>
    </>
  );
}

export default App;
