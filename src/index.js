import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Parent from './components/Parent';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App'
import Movie from './components/Movie';
import MovieUpdate from './components/MovieUpdate';
import MovieDelete from './components/MovieDelete';
import PostData from './components/PostData';

//import {createStore} from 'redux';
//const addData=(data)=>{
   // return {
     //   type:'AddItem',
       // title:'Sample'
   // }
//}
//const reducer=(state=[],action)=>{
  //  switch(action.type){
    //    case 'AddItem':
      //      return[...state,action.title]
        //    default:
          //      return state;
  //  }
//}
//const store=createStore(reducer)
//store.dispatch(addData('Legato'));
//store.dispatch(addData('Company'));
//console.log(store.getSate());


ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <Header/>
    
    <Movie/>
    <PostData/>
    <MovieUpdate/>
    <MovieDelete/>
   <Footer/> 
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
