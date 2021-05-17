import { useState, useEffect } from "react";
import { DATA_VIEW_MODE } from "../../../constants/constants";

const getInitialDataViewMode = () =>
  localStorage.getItem("dataViewMode") || DATA_VIEW_MODE.TABLE;

export const useDataViewMode = () => {
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode);
  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);
  return [dataViewMode, setDataViewMode];
};
