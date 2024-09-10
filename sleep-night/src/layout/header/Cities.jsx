import React, { useContext } from "react";
import { MY_CONTEXT } from "../../hooks/Context";

export const Cities = () => {
  const { data } = useContext(MY_CONTEXT);
  console.log(data);

  return <div>{data}</div>;
};
