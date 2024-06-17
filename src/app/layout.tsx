import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from '@mui/material/styles';
import theme from '../theme';
import AppBar from '../components/AppBar';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
     <html lang="en">
       <body>
          <AppRouterCacheProvider>
           {/* <ThemeProvider theme={theme}> */}
           <AppBar/>
              {children}
           {/* </ThemeProvider> */}
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
