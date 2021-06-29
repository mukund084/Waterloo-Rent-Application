import './App.css';
import ResidencesList from './components/ResidencesList';

function App(props) {
  return (
    <div>
      <>
      <h1> {props.name} </h1>
        <img src="/images/homepage-image.jpg.jpg" alt="" />
      <ResidencesList />
    </>
    </div>
  );
}

export default App;
