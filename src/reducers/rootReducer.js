const calculateResult = (operator, operand1, operand2) => {
    let result = '0';

    // returns 0 if the values of the first and second operands are unchanged
    if (operand1 === '0' && operand2 === '0') {
        return result;
    }

    // returns the first operand when its value changes no arithmetic operator is selected
    if (operand1 !== '0' && operand2 === '0') {
        result = operand1;
        return result;
    }

    switch (operator) {
        case '+':
            // operands are explicitly converted to numbers to prevent string concatenation
            result = Number(operand1) + Number(operand2);
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            console.log('Invalid arithmetic operation.');
    }

    // checks if the result is a float
    if (Number(result) && result % 1 !== 0) {
        // rounds a float to 1 decimal place if the result is too long
        if (String(result).length > 8) {
            return String(result.toFixed(1));
        }
    }

    return String(result);
};

const initialState = {
    firstOperand: '0',
    secondOperand: '0',
    isFirstOperand: true,
    currentOperator: '',
    theme: '1'
};

const reducer = (state, action) => {
    const currentOperand = state.isFirstOperand
        ? 'firstOperand'
        : 'secondOperand';

    switch (action.type) {
        case 'APPEND_NUMBER_INPUT':
            // Prevents multiple decimal points in the current operand
            if (
                String(state[currentOperand]).includes('.') &&
                action.payload.value === '.'
            ) {
                return state;
            }

            // Appends decimal point when to 0 if no number input was selected and decimal point button is clicked
            if (state[currentOperand] === '0' && action.payload.value === '.') {
                return {
                    ...state,
                    [currentOperand]:
                        state[currentOperand] + action.payload.value
                };
            }

            // Replaces the default value of 0 when a number input is clicked
            if (state[currentOperand] === '0') {
                return {
                    ...state,
                    [currentOperand]: action.payload.value
                };
            }

            return {
                ...state,
                [currentOperand]: state[currentOperand] + action.payload.value
            };

        case 'SET_ARITHMETIC_OPERATOR':
            console.log(state.firstOperand);
            console.log(state.secondOperand);
            if (state.firstOperand === '0') {
                return {
                    ...state
                };
            } else if (state.secondOperand === '0') {
                return {
                    ...state,
                    isFirstOperand: false,
                    currentOperator: action.payload.value
                };
            } else {
                const result = calculateResult(
                    state.currentOperator,
                    state.firstOperand,
                    state.secondOperand
                );

                return {
                    ...state,
                    firstOperand: result,
                    currentOperator: action.payload.value,
                    secondOperand: '0'
                };
            }

        case 'CALCULATE_RESULT':
            const result = calculateResult(
                state.currentOperator,
                state.firstOperand,
                state.secondOperand
            );

            return {
                ...state,
                firstOperand: result,
                secondOperand: '0',
                isFirstOperand: true
            };

        case 'RESET_CALC':
            return {
                ...initialState,
                // preserves the current theme
                theme: state.theme
            };

        case 'DELETE_LAST_VALUE':
            const currentOperandString = String(state[currentOperand]);

            if (
                !isNaN(state[currentOperand]) &&
                isFinite(state[currentOperand]) &&
                String(state[currentOperand]).length > 1
            ) {
                return {
                    ...state,
                    [currentOperand]: currentOperandString.substr(
                        0,
                        currentOperandString.length - 1
                    )
                };
            } else {
                // Resets the value of the currentOperand to 0 if the output is a non-numeric value (NaN or Infinity)
                return {
                    ...state,
                    [currentOperand]: '0'
                };
            }

        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload.value
            };

        default:
            return state;
    }
};

export { initialState, reducer };
