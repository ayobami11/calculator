import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../App';

const StyledButton = styled.button`
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding: calc(0.25em + 0.1em) 0.5em 0.1em;

    // this style is applied to only numbers
    ${({ theme, actionType }) =>
        (actionType === 'APPEND_NUMBER_INPUT' ||
            actionType === 'SET_ARITHMETIC_OPERATOR') &&
        css`
            font-size: 32px;

            background: ${theme.keys?.['lgo-bg'] ||
            theme.keys?.['lgy-bg'] ||
            theme.keys?.['vdv-bg']};

            color: ${theme.text?.['vdgb'] ||
            theme.text?.['vdgy'] ||
            theme.text?.['light-yellow']};

            border-bottom: 5px solid
                ${theme.keys?.['grayish-orange-shadow'] ||
                theme.keys?.['dgo-shadow'] ||
                theme.keys?.['dark-magenta-shadow']};
        `}

    ${({ theme, actionType }) =>
        (actionType === 'RESET_CALC' || actionType === 'DELETE_LAST_VALUE') &&
        css`
            text-transform: uppercase;

            background: ${theme.keys?.['ddb-bg'] ||
            theme.keys?.['dmc-bg'] ||
            theme.keys?.['dark-violet-bg']};

            border-bottom: 5px solid
                ${theme.keys?.['ddb-shadow'] ||
                theme.keys?.['vdc-shadow'] ||
                theme.keys?.['vivid-magenta-shadow']};

            color: ${theme.text?.['white']};
            padding: 1em 0;
        `}
            
            
            ${({ theme, actionType }) =>
        actionType === 'CALCULATE_RESULT' &&
        css`
            background: ${theme.keys?.['red-bg-toggle'] ||
            theme.keys?.['orange-bg-toggle'] ||
            theme.keys?.['pure-cyan-bg-toggle']};

            /* applies the color vdb for the third theme */
            color: ${theme.text?.['vdb'] || theme.text?.['white']};

            border-bottom: 5px solid
                ${theme.keys?.['dark-red-shadow'] ||
                theme.keys?.['dark-orange-shadow'] ||
                theme.keys?.['soft-cyan-shadow']};

            font-size: 1.25rem;
        `}
        
        ${({ actionType }) =>
        (actionType === 'RESET_CALC' || actionType === 'CALCULATE_RESULT') &&
        css`
            grid-column: span 2;
        `}
`;

const Button = ({ actionType, value }) => {
    const { appDispatch } = useContext(AppContext);

    return (
        <StyledButton
            value={value}
            actionType={actionType}
            onClick={() =>
                appDispatch({
                    type: actionType,
                    payload: { value }
                })
            }
        >
            {/* Replaces the multiplication sign with 'x' */}
            <span>
                {actionType === 'SET_ARITHMETIC_OPERATOR' && value === '*'
                    ? 'x'
                    : value}
            </span>
        </StyledButton>
    );
};

export default Button;
