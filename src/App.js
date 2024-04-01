import logo from './logo.svg';
import './App.css';

import Home from './Component/Home';
import About from './Component/About'
import Work from './Component/Work';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM6IPxWYhx0fgcdg9M6dmojUFd265WQ6M",
  authDomain: "toyota-60222.firebaseapp.com",
  projectId: "toyota-60222",
  storageBucket: "toyota-60222.appspot.com",
  messagingSenderId: "809096454231",
  appId: "1:809096454231:web:b594a4116b98ecf6fb8312",
  measurementId: "G-TCZ1FZ0048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
      <div className="App">
       
      <Home></Home>
      <About></About>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
      </div>
  );
}

export default App;
