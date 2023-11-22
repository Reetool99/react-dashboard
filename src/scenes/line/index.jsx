import { Box } from "@mui/material";

import LineChart from "../../component/LineChart";
import Header from "../../component/Header";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
