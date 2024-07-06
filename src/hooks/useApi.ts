import { useContext } from "react";
import ApiContext, { ApiContextType } from "../context/ProductContext";

const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};

export default useApi;
