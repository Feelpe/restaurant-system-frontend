import Modal from "react-modal";
import { Navigate } from "react-router-dom";

export function DeleteUserModal () {
  // const deleteAccount = () => {
  //   navigate("/delete");
  // };

  return (
    <Modal show={trash} onHide={() => setTrash(!trash)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Deletar Conta?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Tem Certeza que deseja deletar a conta?</h1>
      </Modal.Body>
      <Modal.Footer>
        <Nav>
          <Button variant="danger" onClick={deleteAccount}>
            Deletar
          </Button>
        </Nav>
      </Modal.Footer>
    </Modal>
  );
};
