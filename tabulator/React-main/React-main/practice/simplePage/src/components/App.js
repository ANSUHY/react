import Header from './layout/Header';
import Page from './layout/Page';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import 'src/css/App.css';
import 'src/css/common/common.css';
import 'src/css/colorthemes/default.css';
// import 'src/css/colorthemes/dark.css';
import 'src/css/library/tabulator.css';
import 'src/css/library/material.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Page></Page>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
