import styled from "styled-components";
export const TextStyled = styled.p`
    line-height:2rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:normal;
    &.primary {
        font-weight:500;
        max-height:4rem;
        font-size:14px;
    }

    &.secondary {
       color:var(--textWhiteLight);
       font-size:12px;
    }
`

