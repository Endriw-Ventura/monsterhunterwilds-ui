import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './router';
import { MonsterListProvider } from "./context/MonsterListContext";
import { ThemeProviderWrapper } from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <MonsterListProvider>
        <AppRoutes />
      </MonsterListProvider>
    </ThemeProviderWrapper>
  </StrictMode>,
)
