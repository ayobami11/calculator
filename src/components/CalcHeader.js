import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../App';

const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
`;

const H1 = styled.h1`
    color: ${({ theme }) =>
        theme.text['light-yellow'] ||
        theme.text['vdgy'] ||
        theme.text['white']};

    font-size: 2rem;
`;

const ThemeSlider = styled.div`
    align-items: flex-end;
    display: flex;
`;

const Label = styled.label`
    color: ${({ theme }) =>
        theme.text['light-yellow'] ||
        theme.text['vdgy'] ||
        theme.text['white']};

    font-size: 0.8rem;
    margin-right: 1.5em;
    padding-bottom: 0.4em;
    text-transform: uppercase;
`;

const ThemeLabel = styled.span`
    color: ${({ theme }) =>
        theme.text['light-yellow'] ||
        theme.text['vdgy'] ||
        theme.text['white']};

    font-size: 0.9em;
    display: block;
    letter-spacing: 0.3em;
    margin-bottom: 0.4em;
    padding: 0 0.25em;
    text-align: center;
`;

const Input = styled.input`
    -webkit-appearance: none;
    border-radius: 0.75em;
    cursor: ew-resize;
    width: 60px;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;

        background: ${({ theme }) =>
            theme.keys?.['red-bg-toggle'] ||
            theme.keys?.['orange-bg-toggle'] ||
            theme.keys?.['pure-cyan-bg-toggle']};

        border-radius: 50%;
        height: 12px;
        width: 12px;
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;

        background: ${({ theme }) => theme.backgrounds.keypad};

        border-radius: 0.75em;
        padding: 0.3em;
    }
`;

const CalcHeader = () => {
    const {
        appState: { theme },
        appDispatch
    } = useContext(AppContext);

    return (
        <Header>
            <H1>calc</H1>
            <ThemeSlider>
                <Label htmlFor='theme'>Theme</Label>
                <div>
                    <ThemeLabel>1 2 3</ThemeLabel>
                    <Input
                        type='range'
                        name='theme'
                        id='theme'
                        min='1'
                        max='3'
                        value={theme}
                        onChange={({ target: { value } }) =>
                            appDispatch({
                                type: 'SET_THEME',
                                payload: { value }
                            })
                        }
                    />
                </div>
            </ThemeSlider>
        </Header>
    );
};

export default CalcHeader;
