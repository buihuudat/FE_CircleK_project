import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Product from "../Product";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabsHeader = [
  {
    text: "Tất cả thức ăn",
  },
  {
    text: "Thức ăn đóng hộp",
  },
  {
    text: "Mì",
  },
  {
    text: "Bánh Mì",
  },
  {
    text: "Xúc Xích Nướng",
  },
  {
    text: "Bánh Bao/Bánh Giò",
  },
  {
    text: "Cơm Nắm",
  },
  {
    text: "Tráng Miệng",
  },
  {
    text: "Bánh tươi",
  },
];

export default function Tabsbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabsHeader.map((e, i) => (
            <Tab key={i} label={e.text} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Product />
      </TabPanel>
    </Box>
  );
}
