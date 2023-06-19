import './globals.css'
import { Inter } from 'next/font/google'
import NavList from './components/NavBar/NavList'
import NavLogo from './components/NavBar/NavLogo'
import ButtonToUp from './components/ButtonToUp'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoundWorld',
  description: 'Місце, де народжуються спогади',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <NavList />
        <main className='container'>
          {children}
        </main>
        <ButtonToUp />
      </body>
    </html>
  )
}
