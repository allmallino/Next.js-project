import './globals.css'
import { Inter } from 'next/font/google'
import NavList from '/components/NavBar/NavList'
import ButtonToUp from '/components/ButtonToUp'
import StyledComponentsRegistry from '../../lib/registry'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoundWorld',
  description: 'Місце, де народжуються спогади',
}

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <html lang="ua">
        <body className={inter.className}>
          <NavList />
          <main className='container'>
            {children}
          </main>
          <ButtonToUp />
          <footer className='footer'><i>©RoundWorld 2023</i></footer>
        </body>
      </html>
    </StyledComponentsRegistry>
  )
}
