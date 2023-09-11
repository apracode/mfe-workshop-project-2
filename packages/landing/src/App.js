import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

import Landing from "./components/Landing";
import SecondPage from "./components/SecondPage";

export default function () {
  return (
    <Box>
      <Routes>
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Box>
  );
}