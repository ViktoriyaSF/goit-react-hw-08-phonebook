import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background: rgb(174,238,203);
background: radial-gradient(circle, rgba(174,238,203,0.7455357142857143) 0%, rgba(148,187,233,1) 100%);

}
header {
  height: 60px;
  place-items: center;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  justify-items:center;
  align-items: center;

background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  font-size: 18px;
  padding: 0 15px;
  a {
    color: white;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
}
a.active {
  color: #fbff02;
}
}
nav {
  display: flex;
   flex-wrap: nowrap;
  gap:20px;
    justify-items:center;
  align-items: center;
  svg:hover,
svg:focus {
    color: #0de30d;
  }
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* --------- */
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
ul, li {
	margin: 0;
	padding: 0;
	/* list-style: none; */
    text-decoration: none
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  display: block;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover,&:focus {
      transform: scale(1.025);
    }
}

  form {
  max-width: 480px;
}


`;
