import styled from 'styled-components';

export const ContainerStyl = styled.div`
  /* min-width: 320px; */
  padding: 0 15px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  display: block;
  width: 320px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
  /* background-color: #bceeae; */
  /* border: 1px solid black; */
  /* border-radius: 40px; */
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center; */
`;
export const HomePageStyl = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  max-width: 720px;
  h1 {
    font-size: 48px;
    margin-top: 17%;
  }
  p {
    font-size: 20px;
    margin-top: 7%;
  }
`;
