import styled from '@emotion/styled';

export const ContactFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContactFormText = styled.label`
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const ContactFormField = styled.input`
  margin-left: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const ContactFormButton = styled.button`
  align-self: center;
  margin-top: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  padding: 6px 10px;
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
