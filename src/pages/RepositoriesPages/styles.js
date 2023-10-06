import { Link } from "react-router-dom";
import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background-color: transparent;
  }
`;

export const Main = styled.section`
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.erro ? "center" : "flex-start")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "")};
`;

export const Button = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 1rem;
  margin: 1rem;
  text-decoration: none;
`;

export const TextButton = styled.span`
  font-size: large;
  font-weight: 600;
`;
