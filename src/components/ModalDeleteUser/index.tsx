import { FormEvent } from "react";
import Modal from "react-modal";
import { Title, Text } from "./styles";

interface DeleteUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const DeleteUserModal = ({
  isOpen,
  onRequestClose,
}: DeleteUserModalProps) => {
  async function handleDelete(event: FormEvent) {
    event.preventDefault();
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>Deletar Conta?</Title>
      <Text>Tem Certeza que deseja deletar a conta?</Text>
      <button 
        onClick={handleDelete}
      >
        Deletar
      </button>
    </Modal>
  );
};
