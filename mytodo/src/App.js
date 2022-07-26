
import './App.css';
import Todo  from './components/todo';
function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      backgroundColor: 'lightblue',
      backgroundSize: 'cover'
    }}
    >
      <Todo/>
    </div>
      
  );
}

export default App;
