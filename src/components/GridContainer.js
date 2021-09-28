import styled from 'styled-components';

import Button from './Button';

const StyledGridContainer = styled.div`
    background: ${({ theme }) => theme.backgrounds.keypad};
    
    border-radius: .5em;
    display: grid;
    grid-gap: .75em;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    padding: 1.25em;
    z-index: 2;
`;

const GridContainer = () => {
    return (
        <StyledGridContainer>
            <Button actionType='APPEND_NUMBER_INPUT' value='7' />
            <Button actionType='APPEND_NUMBER_INPUT' value='8' />
            <Button actionType='APPEND_NUMBER_INPUT' value='9' />
            {/* Delete button */}
            <Button actionType='DELETE_LAST_VALUE' value='Del' />
            <Button actionType='APPEND_NUMBER_INPUT' value='4' />
            <Button actionType='APPEND_NUMBER_INPUT' value='5' />
            <Button actionType='APPEND_NUMBER_INPUT' value='6' />
            <Button actionType='SET_ARITHMETIC_OPERATOR' value='+' />
            <Button actionType='APPEND_NUMBER_INPUT' value='1' />
            <Button actionType='APPEND_NUMBER_INPUT' value='2' />
            <Button actionType='APPEND_NUMBER_INPUT' value='3' />
            <Button actionType='SET_ARITHMETIC_OPERATOR' value='-' />
            <Button actionType='APPEND_NUMBER_INPUT' value='.' />
            <Button actionType='APPEND_NUMBER_INPUT' value='0' />
            <Button actionType='SET_ARITHMETIC_OPERATOR' value='/' />
            <Button actionType='SET_ARITHMETIC_OPERATOR' value='*' />
            {/* Reset button */}
            <Button actionType='RESET_CALC' value='Reset' />
            {/* Equals button (=) */}
            <Button actionType='CALCULATE_RESULT' value='=' />
        </StyledGridContainer>
    );
};

export default GridContainer;
