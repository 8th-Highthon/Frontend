import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import theme from "../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import Background from "./components/background";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter>
            <Background>
              <Routes>
                <Route path="/" element={<>1234</>} />
                <Route path="/" element={<></>} />
                <Route path="/" element={<></>} />
                <Route path="/" element={<></>} />
                <Route path="/" element={<></>} />
                <Route path="/" element={<></>} />
              </Routes>
            </Background>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
