import { FormEvent } from "react";
import Modal from "react-modal";
import { Title, Text } from "./styles";

interface ExitUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ExitModal = ({ 
  isOpen, 
  onRequestClose 
}: ExitUserModalProps) => {
  async function handleExit(event: FormEvent) {
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
      <Title>Sair da Conta?</Title>
      <Text>Tem Certeza que deseja sair da conta?</Text>
      <button 
        onClick={handleExit}
      >
        Sair da Conta
      </button>
    </Modal>
  );
};
