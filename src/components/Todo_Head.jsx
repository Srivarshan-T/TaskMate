import React, { useState, useRef, useEffect } from "react";

export default function Todo_Head() {
  // State and refs for task management
  let taskref = useRef("");


  let data= window.localStorage.getItem('TASKLIST');
  if (data === null){
    data=JSON.stringify([]);
   
  }
  let [tasks, setTasks] = useState(JSON.parse(data));
  
   
  let [id, setId] = useState(1);

  // State for handling the current date
  const today = new Date();
  const options = { month: "short" };
  const initialDate = `${today.getDate()} ${today.toLocaleString(
    "en-US",
    options
  )} ${today.getFullYear()}`;

  const dateInputRef = useRef(null);
  const [current, setCurrent] = useState(initialDate);

  // Function to add a new task
  function handletaskadd() {
    setId(id + 1);
    if (taskref.current.value !== "") {
      let newtask = taskref.current.value;
      let newid = id;

      let obj = {
        taskid: newid,
        date: current, // Use the current selected date
        task: newtask,
         
      };
      setTasks((t) => {
        return [...t, obj];
      });
      

     
      taskref.current.value = "";
    }
  }
  

  // Function to handle date change
  const handleDateChange = () => {
    const selectedDate = new Date(dateInputRef.current.value);
    const formattedDate = `${selectedDate.getDate()} ${selectedDate.toLocaleString(
      "en-US",
      options
    )} ${selectedDate.getFullYear()}`;
    setCurrent(formattedDate);
  };

  // Function to handle calendar button click
  const handleImageClick = () => {
    dateInputRef.current.style.visibility = "visible";
    dateInputRef.current.showPicker();
  };

  // Filter the task list based on the current date
  let [filterlist, setFilterlist] = useState([]);
  let completed_data = window.localStorage.getItem('COMPLETEDLIST');
  if (completed_data === null) {
    completed_data=JSON.stringify([])
  }
  let [completed_list, setCompleted_list] = useState(JSON.parse(completed_data));

  //funtion to delete task
  function handledelete(id) {
    setTasks(tasks.filter((i) => i.taskid != id));

  }

  //function to create completedlist
  let [completed_task, setCompleted_task] = useState(0);
  function handleFinish(index, taskid) {
    let completed = filterlist.filter((_, i) => i === index);

    setCompleted_list((c) => [...c, ...completed]);

    handledelete(taskid);
    if (completed_list.length > 10) {
      completed_list.shift();
    }
    setCompleted_task(completed_list.length+1)
  }
  //function to handle enter key

  function handleEnter(e) {
    if (e.key === "Enter") {
      handletaskadd();
    }
  }
  //function to show the completed
  let [show,setShow] =useState(false) ; 
  function showCompleted(e) {
    if (!show) {
      e.target.textContent = `\u25BC Completed (${completed_task})`;
      document.getElementById("completedlist").style = "display:block";
      setShow(true);
    } else {
      e.target.textContent = `\u25BA Completed  `;
      document.getElementById("completedlist").style = "display:none";
      setShow(false)
    }
  }
  //function to undo the completed task
  function revcomplete(revtask) {
    let undotask = revtask;
    setTasks((t) => [...t, undotask]);
    setCompleted_list(completed_list.filter((i) => i.taskid != revtask.taskid));
   
  }

  useEffect(()=>{
     
   window.localStorage.setItem('COMPLETEDLIST',JSON.stringify(completed_list))

  },[completed_list])

 

  useEffect(() => {
    setFilterlist(tasks.filter((i) => i.date === current));
    window.localStorage.setItem('TASKLIST',JSON.stringify(tasks));

    setCompleted_task(completed_list.length);
    
  }, [current, tasks, completed_list]);

  return (
    <div className="todo-app">
      <div className="head_container">
        <div className="todo-head">
          <div className="calender">
            <h2 className="todo">Todo</h2>
          </div>
          <div className="calender">
            <div className="date">{current}</div>
            <button
              onClick={handleImageClick}
              style={{ border: "none", background: "none" }}
            >
              <img
                src="/calender.png"
                className="calender-img"
                alt="Calendar"
              />
            </button>
            <input
              type="date"
              ref={dateInputRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                zIndex: "-1",
              }}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="tasklist">
          <div className="input-container">
            <hr></hr>
            <input
              placeholder="Add a new task"
              type="text"
              ref={taskref}
              className="input-task"
              onKeyDown={handleEnter}
            />
            <button onClick={handletaskadd} className="input-btn">
              +
            </button>
          </div>
          <div className="width-con">
            <ol style={{ listStyleType: "none" }} className="list-task">
              {filterlist.map((i, index) => (
                <li key={index}>
                  <div className="task-sen">
                  <div>  <img
                      src="/emptybox.png"
                      className="emptybox-img"
                      onClick={() => handleFinish(index, i.taskid)}
                    ></img>
                    <span>{i.task}</span></div>
                 <div>  <button
                      className="delete-btn"
                      onClick={() => handledelete(i.taskid)}
                    >
                      x
                    </button></div> 
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <hr className="custom-line"></hr>
          <button className="completed-btn" onClick={showCompleted}>
            &#9658; Completed ({completed_task})
          </button>
          <div className="completed-list" id="completedlist">
            <ol style={{ listStyleType: "none" }}>
              {completed_list.map((i, index) => (
                <li key={index}>
                  <div>
                    <img
                      src="/completed2.png"
                      className="completed-img"
                      onClick={() => revcomplete(i)}
                    ></img>
                  </div>
                  <span
                    style={{
                      textDecoration: "line-through",
                      textDecorationColor: "rgb(29, 139, 230)",
                      color: "gray",
                      fontSize: "1.2rem",
                    }}
                  >
                    {i.date.slice(0, 6)} ({i.task})
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
 
