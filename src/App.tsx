import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
import { Container, GlobalStyle } from "./styles/global";

import { Header } from './components/Header';
import { ExitModal } from './components/ModalExit';

export function App() {
  const [isExitUserModalOpen, setIsExitUserModalOpen] = useState(false);
  
  function handleOpenExitUserModal() {
    setIsExitUserModalOpen(true);
  }

  function handleCloseExitUserModal() {
    setIsExitUserModalOpen(false);
  }

  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Header onOpenExitUserModal={handleOpenExitUserModal}/>

        <ExitModal 
          isOpen={isExitUserModalOpen}
          onRequestClose={handleCloseExitUserModal}
        />

        <Container>
          <Router />
        </Container>
      </>
    </BrowserRouter>
  );
}
