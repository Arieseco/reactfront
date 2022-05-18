import React,{ useEffect,useState } from 'react';

const App = () => {
  const[attend, setAttend] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/api/v1/attendance/')
    .then(res => res.json())
    .then(data => {setAttend(data)
    })
  },[])

  const x = attend.map((item)=>{
    return <ul key={item.name}>
      <li >{item.name}</li>
      <li>{item.attendance}</li>
    </ul>
  })

  return (
    <div>
      {x}
    </div>
  );
}

export default App;
