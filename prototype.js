const createProduct = ({ shortCode, price }) => ({
  shortCode,
  price,
  orderDate: () => {
    console.log(`${shortCode} created at ${Date.now()}`);
  },
});

const broadband = createProduct({
  shortCode: "BROADBAND_SUBSCRIPTION",
  price: "$50",
});

const simOrder = createProduct({
  shortCode: "SIM_ORDER",
  price: "$10",
});
