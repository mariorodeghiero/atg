import { useState, useEffect } from 'react'
import Header from '../components/Header';
import Input from '../components/Input';
import SectionGameInformation from '../components/SectionGameInformation';
import SectionRace from '../components/SectionRace';
import GlobalStyle from '../styles/global.styles'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://www.atg.se/services/racinginfo/v1/api/products/V75")
      .then(response => response.json())
      .then(response => setData(response.results))
  },[])

  return (
    <>
      <GlobalStyle/>
      <Header title="Challenge"/>
      <Input/>
      <SectionRace races={data}/>
      <SectionGameInformation/>
    </>
  );
}

export default App;
