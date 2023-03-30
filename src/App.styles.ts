import styled, { createGlobalStyle } from 'styled-components';
import background from './assets/background.jpg';


export const GlobalStyle = createGlobalStyle`html {
  height: 100%;
}

body {
  background-image: url(${background});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  font-family: 'Catamaran', sans-serif;
  box-sizing: border-box;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Catamaran';
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    font-size: 70px;
    text-align: center;
    margin: 80px;
  }

  .start, .next {
    cursor: pointer;
    border: 2px solid grey;
    box-shadow: 0px 5px 10px ;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;