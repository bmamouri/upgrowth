import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem;
`;

export function Header() {
    return (
        <HeaderStyled>
            <Link href='/' as='/'>
                <a>
                    <img
                        width='180'
                        alt='Upgrowth'
                        src='https://www.upgrowth.com.au/static/media/up-logo-dark.c0849559.svg'/>
                </a>
            </Link>
        </HeaderStyled>
    )
}