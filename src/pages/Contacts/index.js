import React, { useState, useEffect } from "react";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const URL = "https://randomuser.me/api/?results=200";

  useEffect(() => {
    setIsLoading(true);
    const getContacts = async (url) => {
      try {
        const response = await fetch(url);
        const { results } = await response.json();
        setContacts(results);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getContacts(URL);
  }, []);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return <div>Contacts: {contacts[0].name.first}</div>;
}
