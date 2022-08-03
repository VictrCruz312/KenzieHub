import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    input:focus {
        outline: none;
    }

    li {
        list-style: none;
    }
`;

export default Global;
