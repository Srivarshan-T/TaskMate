 
import Todo_Head from '../components/Todo_Head';
import { useLocation } from 'react-router-dom'
 
 

const Todo = () => {
  const location = useLocation();
 let user=location.state?.user||'guest';
   
  
  return (
    <div>
      <div className='welcome-msg'>Hello,&nbsp;{user} 
       

      </div>
   
   <Todo_Head></Todo_Head>
  
   
    </div>
  )
}

export default Todo
