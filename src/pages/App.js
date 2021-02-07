import SectionGameInformation from '../components/SectionGameInformation';
import SectionHeader from '../components/SectionHeader';
import SectionResults from '../components/SectionResults';
import SectionSearch from '../components/SectionSearch';
import GlobalStyle from '../styles/global.styles'

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <SectionHeader/>
      <SectionSearch/>
      <SectionResults/>
      <SectionGameInformation/>
    </>
  );
}

export default App;
