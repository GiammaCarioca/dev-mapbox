import styled from 'styled-components';

export const Container = styled.aside`
  height: 80vh;
  min-width: 320px;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  z-index: 19999;
`;

export const Dev = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    font-size: 20px;
    color: #999;
  }

  .remove {
    color: #d45454;
    margin-right: 20px;
  }
`;

export const DevInfo = styled.div`
  display: flex;
  max-width: 230px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 18px;

    strong {
      font-weight: bold;
      font-size: 16px;
      color: #333;
      font-family: Helvetica, sans-serif; /* verificar fonte instalada */
    }

    small {
      font-weight: normal;
      font-size: 14px;
      color: #999;
      font-family: Helvetica, sans-serif;
    }
`;
