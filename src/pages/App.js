import { useState, useEffect } from 'react'
import Input from '../components/Input';
import SectionGameInformation from '../components/SectionGameInformation';
import SectionHeader from '../components/SectionHeader';
import SectionRace from '../components/SectionRace';
import GlobalStyle from '../styles/global.styles'

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <SectionHeader/>
      <Input/>
      <SectionRace/>
      <SectionGameInformation/>
    </>
  );
}

export default App;
