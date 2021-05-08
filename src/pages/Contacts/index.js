import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useContacts = () => {
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

export function Contacts() {
  const contacts = useContacts();
  if (contacts.isLoading) {
    return <div>Loading..</div>;
  }
  if (contacts.isError) {
    return <div>Error!</div>;
  }
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>Contacts: {contacts.data[0].name.first}</div>
        </Grid>
      </Grid>
    </Container>
  );
}
