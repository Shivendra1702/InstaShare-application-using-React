import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { HashLoader } from "react-spinners";

function App() {
  const [mode, setMode] = useState("light");

  const [load, setLoad] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  setTimeout(() => {
    setLoad(false);
  }, 3000);
  if (load === true) return <HashLoader style={{}} color="#1976D2" />;
  if (load === false)
    return (
      <ThemeProvider cssOverride theme={darkTheme}>
        <Box bgcolor={"background.default"} color="text.primary">
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar setMode={setMode} mode={mode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    );
}

export default App;
