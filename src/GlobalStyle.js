import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        display: grid;
        place-items: center;
        height: 100vh;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
        font-family: "Poppins", sans-serif;
    }
`;
