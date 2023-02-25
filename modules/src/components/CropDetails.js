import React, { useState } from "react";

import Crop from "./Crop.js";
import Menu from "./CropApi.js";

const CropDetails = () => {
  const [cropData, setcropData] = useState(Menu);
  console.log(cropData);
  return (
    <>
      <Crop cropData={cropData} />
    </>
  );
};

export default CropDetails;
