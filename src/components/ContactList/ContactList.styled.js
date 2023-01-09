import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ContactListItem = styled.li`
  position: relative;
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const ContactListButtonDelete = styled.button`
  position: absolute;
  right: 0;
  align-self: center;

  margin-left: ${props => props.theme.space[4]}px;
  padding: 4px 10px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.space[2]}px;
  border-style: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.button};

  &:not(:last-child) {
    margin-right: ${props => props.theme.space[3]}px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
    box-shadow: none;
  }
`;

export const ContactFormTitle = styled.h2`
  margin-top: ${props => props.theme.space[3]}px;
`;
