import React from 'react';
import * as S from './styled';

type Props = React.HTMLProps<HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
