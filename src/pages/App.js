import { useState, useEffect } from 'react'
import Input from '../components/Input';
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
      <Input/>
      <SectionRace races={data}/>
    </>
  );
}

export default App;
