import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';
import getData from './api/dataFetch'
import { useSelector } from 'react-redux';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Tabs from './components/Tabs/Tabs';
import SearchResultPages from './pages/SearchResultPages/SearchResultPages';
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
  const countries = useSelector(state => state.country)
  const [country, setCountry] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      let cityStop = null;
      let stops = null

      await getData(`/v2/Bus/Route/City/${countries}?$top=30`)
        .then(res => {
          cityStop = res;
        });

      await getData(`/v2/Bus/Route/City/${countries}/${cityStop[0].RouteName.Zh_tw}`)
        .then(res => {
          stops = res;
        });

      setCountry(stops[0])
    }

    fetchData();

  }, [countries])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header />
      </div>

<SearchPage/>
      {/* <div className={style.wrapper}>
        {
        <div style={{height: '100%'}}>
          <div style={{height: '50%', background: 'red'}}></div>
          <div style={{height: '50%', background: 'green'}}></div>
        </div> }
        <SearchPanel />
        <div> 
          <SearchResultPages/> 
          <Map countries={country}/>
        </div> 
      </div> */}

      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
