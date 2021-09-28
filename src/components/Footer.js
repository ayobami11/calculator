import styled from 'styled-components';

const StyledFooter = styled.footer`
    color: ${({ theme }) =>
        theme.text['light-yellow'] ||
        theme.text['vdgy'] ||
        theme.text['white']};

    font-size: 11px;
    text-align: center;
`;

const A = styled.a`
    color: inherit;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>
                Challenge by{' '}
                <A
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener'
                >
                    Frontend Mentor
                </A>
                . Coded by{' '}
                <A
                    href='https://www.github.com/ayobami11/calculator'
                    target='_blank'
                    rel='noopener'
                >
                    Ayobami Tunwase
                </A>
                .
            </p>
        </StyledFooter>
    );
};

export default Footer;
