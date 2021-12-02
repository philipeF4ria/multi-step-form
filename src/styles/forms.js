import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const Input = styled.input`
  width: 360px;
  height: 40px;
  padding: 6px;
  margin: 6px 0;
  border: 1px solid #666;
  border-radius: 4px;
  background: transparent;
  outline: none;
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  margin-top: 46px;
`;

export const Button = styled.button`
  border: 2px solid ${props => props.borderColor ? props.borderColor : '#FC6557'};
  background: ${props => props.backgroundColor ? props.backgroundColor : '#FC6557'};;
  color: ${props => props.fontColor ? props.fontColor : '#FFF'};
  font-weight: bold;
  width: 100px;
  height: 40px;
  padding: 6px;
  border-radius: 18px;
`;
