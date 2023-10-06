import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid
    ${(props) => props.color || props.theme.colors.champagneDark};
  padding: 1rem;
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: normal;
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1.25;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  max-height: 3rem;
  display: -webkit-box; 
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color || props.theme.colors.champagneDark};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;
