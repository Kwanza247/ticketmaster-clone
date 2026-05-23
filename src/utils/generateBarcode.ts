const generateBarcode = () => {
  let barcode = "";

  for (let i = 0; i < 16; i++) {
    barcode += Math.floor(Math.random() * 10);
  }

  return barcode;
};

export default generateBarcode;
