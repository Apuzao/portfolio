import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function nav() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="dark:bg-[#171717] items-center " position="static">
          <Toolbar className="flex space-x-8 ">
            <Button variant="outlined" className="rounded-xl" color="inherit">
              Inicio
            </Button>
            <Button variant="outlined" className="rounded-xl" color="inherit">
              Experiencia Laboral
            </Button>
            <Button variant="outlined" className="rounded-xl" color="inherit">
              Proyectos
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
