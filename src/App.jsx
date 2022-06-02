
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer  from './components/NavBar/ItemListContainer/ItemListContainer.jsx'




function app() {  
    return (
      <>
      <NavBar />
      
      <ItemListContainer  name= "East Coast BPM 110"  price="90.00" currency="$" imgSrc=" "/>
      
      </>
   )
}

export default app