import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  return <TotalWrapper>{children}</TotalWrapper>;
}

export default Background;

const TotalWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  position: relative;
`;
