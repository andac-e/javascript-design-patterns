let price;
const broadband = () => {
  price = "$50";
};
const simOrder = () => {
  price = "$10";
};
const device = () => {
  price = "$500";
};

const createProduct = (type) => {
  let product;

  switch (type) {
    case "BROADBAND":
      product = broadband();
      break;
    case "SIM_ORDER":
      product = simOrder();
      break;
    case "DEVICE":
      product = device();
      break;
  }

  product.type = type;
  return product;
};

const exec = () => {
  let products = [];
  products.push(createProduct("BROADBAND"));
  products.push(createProduct("SIM_ORDER"));
  products.push(createProduct("DEVICE"));
};
