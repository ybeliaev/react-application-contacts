import React, { useState, useEffect } from "react";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const URL = "https://randomuser.me/api/?results=200";
  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return <div>Contacts</div>;
}
