import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  OptionBar,
  NavButton,
  Button,
  Edit,
  Trash,
  Exit,
  UserInfo,
  Text
} from "./styles";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";
import { DeleteUserModal } from "../../components/DeleteUserModal";

interface User {
  firstName: string;
  lastName: string;
  createdAt: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const [logged, setLogged] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // const [logoutM, setLogoutM] = useState(false);

  const edit = () => {
    navigate("/update");
  };

  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

  function handleOpenDeleteUserModal() {
    setIsDeleteUserModalOpen(true);
  }

  function handleCloseDeleteUserModal() {
    setIsDeleteUserModalOpen(false);
  }

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
      const response = await api.get("/auth", config);
      const data = response.data.user;
      setUser(data);
    }

    loadUser();
  }, [logged]);

  return (
    <Container>
      <OptionBar>
        <Title>Conta</Title>
        <NavButton>
          <Button onClick={edit}>
            <Edit />
          </Button>
          {/* <Button onClick={() => setLogoutM(!logoutM)}>
                <Exit />
              </Button> */}
          <Button onClick={() => handleOpenDeleteUserModal()}>
            <Trash />
          </Button>
        </NavButton>
      </OptionBar>
      <UserInfo>
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
      </UserInfo>

      <DeleteUserModal
        isOpen={isDeleteUserModalOpen}
        onRequestClose={handleCloseDeleteUserModal}
      />
    </Container>
  );
};
