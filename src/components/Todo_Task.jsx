import React, { useEffect, useRef, useState } from 'react'

export default function Todo_Task() {
    let taskref= useRef("");
    let [tasks,setTasks]=useState([{date:"28feb2022",task:"welcome"}])
 
    function handletaskadd(){
        if (taskref.current.value != ""){
            let newtask=taskref.current.value;
            let obj={
                date:"27Feb2022",task:newtask
            }
            setTasks(t=>{
                return [...t, obj];
            });
            taskref.current.value="";
            
        }
      



    }
    useEffect(
        ()=>{
            console.log(tasks)

        }
        ,[tasks]
    )
   let fillterlist=tasks.filter((i)=>(i.date)==="27Feb2022"
    );
 

  return (

    <div>
      <input  placeholder='Add a new task' type='text' ref={taskref}   />
      <button onClick={handletaskadd}>+</button>
      <div><ol style={{listStyleType:'none'}}>{   tasks.map((i, index) => {
        return(<li key={i.date}><span>{i.task}</span></li>);
        

          
      }
)
}
        </ol>
        <ul>{fillterlist.map((i,index)=>(<li key={index}><span>{i.task}</span></li>))}</ul></div>

      
    </div>
  )
}
