import Image from './components/Image';
import Main from './components/Main';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Image />
        <Main />
        <Footer />
      </div>
    </div>
  );
}