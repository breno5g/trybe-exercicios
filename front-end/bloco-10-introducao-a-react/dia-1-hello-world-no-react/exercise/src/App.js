import './App.css';
// import Todo from './components/todo';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      {/* <Todo /> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
