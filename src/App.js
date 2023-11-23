import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Pages/Global/Topbar"; 
import Sidebar from "./Pages/Global/Sidebar";
import SemeIA from "./Pages/SemeIA/SemeIA";
import Analises from "./Pages/Analises/Analises";
import Integracoes from "./Pages/Integracoes/Integracoes";
import Calendar from "./Pages/Calendario/Calendario";
import FAQ from "./Pages/Faq/Faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/" element={<SemeIA />} />
              <Route path="/semeiaassist" element={<SemeIA />} />
              <Route path="/analises" element={<Analises />} />
              <Route path="/integracoes" element={<Integracoes />} />
              <Route path="/perguntasfrequentes" element={<FAQ />} />
              <Route path="/calendario" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
