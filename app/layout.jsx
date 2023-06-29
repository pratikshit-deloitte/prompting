import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
git 
export const metadata={
    title:'Promting',
    discription:'this helps and generate AI tags'

}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default RootLayout