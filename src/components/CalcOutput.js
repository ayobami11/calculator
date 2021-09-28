import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../App';

/**
 * Formats a number to include commas in appropriate places
 *
 * @param {number} number The number which is formatted to include commas
 */
const formatWithComma = (number) => {
    // Ensures the number input is a valid, finite number
    if (isNaN(number) || !isFinite(number)) {
        return number;
    }

    const [digitsBeforePoint, digitsAfterPoint = ''] =
        String(number).split('.');

    const digitsBeforePointArray = [...digitsBeforePoint];

    for (let i = digitsBeforePointArray.length - 3; i > 0; i -= 3) {
        digitsBeforePointArray[i] = ',' + digitsBeforePointArray[i];
    }

    return String(number).includes('.')
        ? [...digitsBeforePointArray.join(''), '.', ...digitsAfterPoint].join(
              ''
          )
        : digitsBeforePointArray.join('');
};

const StyledCalcOutput = styled.div`
    background: ${({ theme }) => theme.backgrounds.screen};

    border-radius: 0.25em;

    color: ${({ theme }) =>
        theme.text['light-yellow'] ||
        theme.text['vdgy'] ||
        theme.text['white']};

    font-size: 32px;
    margin: 0.5em 0;
    padding: 0.5em;
    overflow: hidden;
    text-align: right;
`;

const CalcOutput = () => {
    const {
        appState: { isFirstOperand, firstOperand, secondOperand }
    } = useContext(AppContext);

    return (
        <StyledCalcOutput>
            {/* returns the current operand */}
            {formatWithComma(isFirstOperand ? firstOperand : secondOperand)}
        </StyledCalcOutput>
    );
};

export default CalcOutput;
