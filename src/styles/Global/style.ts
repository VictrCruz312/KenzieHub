import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
        :root {
            --Font-inter: 'Inter', sans-serif;

            --Color-white: 255, 255, 255;

            --Color-primary: 255, 87, 127;
            --Color-primary-Focus: 255, 66, 127;
            --Color-primary-Negative: 89, 50, 63;

            --Grey-4: 18, 18, 20;
            --Grey-3: 33, 37, 41;
            --Grey-2: 52, 59, 65;
            --Grey-1: 134, 142, 150;
            --Grey-0: 248, 249, 250;

            --Sucess: 63, 232, 100;
            --Negative: 232, 63, 91;
        }

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: var(--Font-inter);
        transition: 300ms;
    }

    input:focus {
        outline: none;
    }

    select:focus {
        outline: none;
    }

    li {
        list-style: none;
    }

    button, a, select {
        cursor: pointer;
        text-decoration: none;
    }
`;

export default Global;
