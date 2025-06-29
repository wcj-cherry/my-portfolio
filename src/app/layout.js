import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sujit Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gradient-to-r from-purple-500 to-indigo-600 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
