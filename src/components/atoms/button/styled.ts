import styled from "styled-components";
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)`
    &.primary {
        background-color: var(--mainPrimary);
    }

    &.secondary {
        background: var(--mainSecondary);
    }
`

