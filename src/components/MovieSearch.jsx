import React,{useState} from 'react';
export default function MovieSearch(props){
    const[title,setTitle]=useState('');
    const getTitle = (e) => {
        setTitle(e.target.value);    
    }
    const onSubmitHandler=()=>{
        const title1=title;
        console.log(title1);
        props.usersData(title1);
        setTitle("");
    }
    return(
      <div className="container">
      <div className="form-inline my-2 my-lg-6" style={{'margin-top':'25px'}}>
          <input className="form-control mr-sm-2" type="text" onChange={getTitle} placeholder="Movie Title"  style={{'width':'60vw','margin-left':'6px'}} value={title} />
          <button className="btn btn-success" onClick={onSubmitHandler}>Search</button>
      </div>
      </div>
    )
}

