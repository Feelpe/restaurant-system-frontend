import Modal from "react-modal";

export const ExitModal = () => {
  return (
    <>
      <Modal show={logoutM} onHide={() => setLogoutM(!logoutM)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sair da Conta?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Tem Certeza que deseja sair da conta?</h2>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={logout}>
            Sair da Conta
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

