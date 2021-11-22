import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.container}> 
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
