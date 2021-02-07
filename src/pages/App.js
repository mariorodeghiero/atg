import { useState, useEffect } from 'react'
import Header from '../components/Header';
import Input from '../components/Input';
import SectionGameInformation from '../components/SectionGameInformation';
import SectionRace from '../components/SectionRace';
import GlobalStyle from '../styles/global.styles'

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <Header title="Challenge"/>
      <Input/>
      <SectionRace/>
      <SectionGameInformation/>
    </>
  );
}

export default App;
