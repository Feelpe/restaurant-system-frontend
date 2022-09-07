import axios from "axios";
import { useState, useEffect } from "react";

import { Loading } from "../Loading";
import { Container, Card, Title, Text } from "./styles";

export const Mesa = () => {
  const [mesa, setMesa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios.get('/mesa').then((response) => {
      setMesa(response.data)
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <Container className="d-flex flex-column align-items-center">
      <Card className="mb-2 mt-2 p-3 shadow-sm w-50">
        <Title>Mesas</Title>
      </Card>
      <Container className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <Card className="d-flex m-2 p-3 shadow-sm align-items-center justify-content-center">
            <Loading />
          </Card>
        ) : (
          <>
            {/* {mesa.map((item) => (
              <a href={`/mesa/${item.id}`} key={item.id}>
                <Card className="d-flex m-2 p-3 shadow-sm">
                  <Text>Mesa: {item.mesaNumber}</Text>
                </Card>
              </a>
            ))} */}
          </>
        )}
      </Container>
    </Container>
  );
};