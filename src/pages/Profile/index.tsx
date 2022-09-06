import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Edit,
  Trash,
  Exit,
  Container,
  Card,
  Nav,
  Title,
  Text
} from "./styles";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";

interface User {
  firstName: string;
  lastName: string;
  createdAt: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [trash, setTrash] = useState(false);
  const [logoutM, setLogoutM] = useState(false);

  const edit = () => {
    navigate("/update");
  };

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    } else {
      setLogged(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // api.get<User[]>("/auth", config)
    // .then((response) => {
    //   setUser(response.data);
    //   setLogged(true);
    //   setIsLoading(false);
    // });

    async function loadUser() {
      const response = await api.get('products', config);
      const data = response.data.user;
      setUser(data);
    }

    loadUser();
  }, [logged]);

  return (
    <Container>
      <>
        <Card>
          <Nav>
            <Title>Conta</Title>
            <Nav>
              <button onClick={edit}>
                <Edit />
              </button>
              <button onClick={() => setLogoutM(!logoutM)}>
                <Exit />
              </button>
              <button onClick={() => setTrash(!trash)}>
                <Trash />
              </button>
            </Nav>
          </Nav>
        </Card>
        <Card>
          {/* {isLoading ? (
            <Card className="align-items-center border-0">
              <Loading />
            </Card>
          ) : (
            <>
              <Text>{`${user.firstName} ${user.lastName}`}</Text>
              <span>{user.createdAt}</span>
            </>
          )} */}
        </Card>
      </>
    </Container>
  );
};
