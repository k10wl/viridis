import React, { useState } from "react";

import Button from "src/components/common/Button";

import { useGetAllProductsQuery } from "src/services/products";

const Homepage = () => {
  const [state, setState] = useState(false);
  const { data, isLoading } = useGetAllProductsQuery();

  console.log(data, isLoading);

  return (
    <div>
      Homepage
      <Button disabled={state} onClick={() => setState(!state)}>
        {"Next ->"}
      </Button>
      <button type="button" onClick={() => setState(!state)}>
        toggle
      </button>
    </div>
  );
};

export default Homepage;
