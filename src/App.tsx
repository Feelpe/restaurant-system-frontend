import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
import { GlobalStyle } from "./styles/global";

import { Header } from './components/Header';

export function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Header />
        <Router />
      </>
    </BrowserRouter>
  );
}
