import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Product from "../Product";
import productApi from "../../api/productApi";
import { productType } from "../../access/dataType/TypeProducts";
import AboutPrroductModal from "../modals/AboutProductModal";
import _ from "lodash";
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
          <Box display={"flex"} flexDirection="row" gap={3}>
            {children}
          </Box>
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

export default function Tabsbar({ header }) {
  const [value, setValue] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [type, setType] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const getProducts = async () => {
      const productsData = await productApi.getAllProducts();
      setProducts(productsData);
      // setType(productsData[header].data[0].type);
    };
    getProducts();
  }, []);

  const getProduct = (t) =>
    _.filter(products, (e) => e.type.split("/")[1] === t);

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
          {productType[header].data.map((e, i) => (
            <Tab
              key={i}
              label={e.text}
              {...a11yProps(i)}
              onClick={() => setType(e.type)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {getProduct(type)?.map((product, i) => (
          <Product
            img={product.image}
            text={product.name}
            product={product}
            key={i}
          />
        ))}
      </TabPanel>
      <AboutPrroductModal />
    </Box>
  );
}
