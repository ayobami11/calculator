import { createContext, useReducer } from 'react';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// components
import CalcHeader from './components/CalcHeader';
import CalcOutput from './components/CalcOutput';
import GridContainer from './components/GridContainer';
import Footer from './components/Footer';

// reducers
import { initialState, reducer } from './reducers/rootReducer';

// themes
import themeOne from './themes/themeOne';
import themeTwo from './themes/themeTwo';
import themeThree from './themes/themeThree';

// contexts
export const AppContext = createContext(null);

const StyledApp = styled.div`
    background: ${({ theme }) => theme.backgrounds.main};
    display: grid;
    min-height: 100vh;
    place-items: center;
`;

const Main = styled.main`
    margin: 0 auto;
    min-width: 250px;
    max-width: 550px;
    width: 90%;
`;

const ResetStyles = createGlobalStyle`
        * {
            box-sizing: border-box;
            font-family: 'Spartan', sans-serif;
            font-weight: 700;
            margin: 0;
            padding: 0;
        }
    `;

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
            <ThemeProvider
                theme={
                    state.theme === '1'
                        ? themeOne
                        : state.theme === '2'
                        ? themeTwo
                        : themeThree
                }
            >
                <StyledApp>
                    <Main>
                        <ResetStyles />
                        <section>
                            <CalcHeader />
                            <CalcOutput />
                            <GridContainer />
                        </section>
                    </Main>
                    <Footer />
                </StyledApp>
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default App;
