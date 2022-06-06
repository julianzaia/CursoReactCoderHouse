
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer  from './components/NavBar/ItemListContainer/ItemListContainer.jsx'
import Counter  from './components/NavBar/ItemListContainer/ItemCount.jsx'

//import Counter  from './components/NavBar/ItemListContainer/ItemCount.jsx'




function app() {  
    return (
      <>
      <NavBar />
      
      <ItemListContainer  name= "East Coast BPM 110"  price="90.00" currency="$"  stock= "10" imgSrc=" "/>
      <Counter /> 

   
            
      </>
   )
}

export default app