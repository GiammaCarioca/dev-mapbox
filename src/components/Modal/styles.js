import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  width: 20%;
  min-width: 320px;
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    flex: 1;
    height: 40px;
    width: 280px;
    padding: 0 20px;
    font-size: 15px;
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 10px;

    &::placeholder {
      color: #bbb;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 280px;

    button {
      height: 40px;
      width: 135px;
      border-radius: 3px;
      border: 0;
      color: #fff;
      padding: 0 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  #cancel {
    background: #bbb;
    &:hover {
      background: #929292;
    }
  }

  #save {
    background: #85c47c;
    &:hover {
      background: #4f8647;
    }
  }
`;
