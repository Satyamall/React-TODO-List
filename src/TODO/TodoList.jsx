
import style from "./Todo.module.css";

const TodoList = ({id,status,title,handleDelete,handleToggle})=>{
    var listNumber = id;
   
    if(listNumber === 1)
    {
        return (
          ''
        );
    }

    if(status===true)
    {
        var Style = {
           color: "green",
           textDecoration: "line-through"
        }
    }
    return <div className={style.list}>
        <span onClick={()=>handleToggle(id)} className={style.title} style={Style}><input type="checkbox" style={{width: "30px",height: "15px"}}/>{title}</span>
        <button onClick={()=>handleDelete(id)} className={style.delete}>X</button>
    </div>
 }
 
 export default TodoList