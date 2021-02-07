import { useState, useEffect } from 'react'
import SectionGameInformation from '../components/SectionGameInformation';
import SectionHeader from '../components/SectionHeader';
import SectionRace from '../components/SectionRace';
import SectionSearch from '../components/SectionSearch';
import GlobalStyle from '../styles/global.styles'

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <SectionHeader/>
      <SectionSearch/>
      <SectionRace/>
      <SectionGameInformation/>
    </>
  );
}

export default App;
