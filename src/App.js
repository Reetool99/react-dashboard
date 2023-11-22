import { CssBaseline, ThemeProvider } from "@mui/material";
import TopSide from "./scenes/global/topside.jsx";
import { ColorModeContext, useMode } from "./theme";
import LeftSide from "./scenes/global/leftside.jsx";
import Team from "./scenes/team/index.jsx";
import { Route, Routes } from "react-router-dom";
import Contact from "./scenes/contacts/index.jsx";
import Invoice from "./scenes/invoice/index.jsx";
import Form from "./scenes/form/index.jsx";
import Faq from "./scenes/faq/index.jsx";
import Calendar from "./scenes/calendar/index.jsx";
import Line from "./scenes/line/index.jsx";
import Geography from "./scenes/geogarphy/index.jsx";
import Dashboard from "./scenes/dashboard/index.jsx";
import Pie from "./scenes/pie/index.jsx";
import Bar from "./scenes/bar/index.jsx";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <LeftSide />
            <div className="content">
              <TopSide />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path={"/team"} element={<Team />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/invoice"} element={<Invoice />} />
                <Route path={"/form"} element={<Form />} />
                <Route path={"/faq"} element={<Faq />} />
                <Route path={"/calendar"} element={<Calendar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
