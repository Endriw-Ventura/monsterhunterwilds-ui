import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './router';
import { MonsterListProvider } from "./context/MonsterListContext";
import { ThemeProviderWrapper } from './context/ThemeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './styles/global/GlobalStyle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <MonsterListProvider>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <Footer />
      </MonsterListProvider>
    </ThemeProviderWrapper>
  </StrictMode>,
)
