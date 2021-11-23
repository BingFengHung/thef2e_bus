import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import { useEffect, useState } from 'react';
import getData from './api/dataFetch'
import { useSelector } from 'react-redux';

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
      <Header/>
      <Map countries={country}/>
      <Footer/>
    </div>
  );
}

export default App;
