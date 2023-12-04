import { StrictMode } from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Toolbar from "./components/Toolbar";
import Characters from "./components/Characters";
import "./language/i18n";

const queryClient = new QueryClient();

const Main = styled.main`
  background-color: black;
  color: white;
`;

function App() {
  const { t } = useTranslation();

  return (
    <StrictMode>
      <Main>
        <QueryClientProvider client={queryClient}>
          <Toolbar title={t("title")} />
          <Characters />
        </QueryClientProvider>
      </Main>
    </StrictMode>
  );
}

export default App;
