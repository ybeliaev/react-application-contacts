import React, { useState, useEffect } from "react";

export const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // otherwise the name will be undefined
  const [isError, setIsError] = useState(false);

  const URL = "https://randomuser.me/api/?results=200";

  useEffect(() => {
    const getContacts = async (url) => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setData(results);
        setIsError(false);
      } catch (e) {
        setIsError(true);
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts(URL);
  }, []);
  return { data, isLoading, isError };
};
