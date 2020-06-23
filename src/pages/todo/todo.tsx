  
import React , {Component} from 'react'
import common from '../../store/common'
import './../../sass/reset.scss'
import './../../sass/todo.scss'

interface ITodoListProps {
    isAddToDo:boolean,
    id:number,
    updateIndex: number|string,
    updateInput: number|string,
    todoList: any[]
}

class TodoList  extends Component <any, ITodoListProps> {
    constructor(props:object) {
        super(props);
        this.state = {
            isAddToDo:false,
            id:1,
            todoList:[
                {
                    id:1,
                    content:'Javascript',
                    status:false
                }
            ],
            updateIndex:-1,
            updateInput:''
        };
    }
    componentDidMount(){
        common.setPath(this.props.location.pathname)
    }
    /**
    * @description 添加todo
    */
    addTodo(e:any){
        //如果按得不是回车键，不做任何处理
        if(e.keyCode!==13){
            return;
        }
        let _id=this.state.id
        let _list=this.state.todoList;
        _list.push({
            id:_id,
            content:e.target.value,
            status:false
        });
        e.target.value="";
        this.setState({
            id:_id,
            todoList:_list
        });
    }
    /**
    * @description 切换编辑状态
    */
    switchStatus(index:number){
        let _list=this.state.todoList;
        _list[index].status=!_list[index].status;
        this.setState({
            todoList:_list
        });
    }
    /**
    * @description 删除todo
    */
    deleteTodo(index:number){
        let _list=this.state.todoList;
        _list.splice(index,1);
        this.setState({
            todoList:_list
        });
    }
    /**
    * @description 编辑todo
    */
    updateTodo(index:number){
        this.setState({
            updateIndex:index,
            updateInput:this.state.todoList[index].content
        });
    }
    /**
    * @description 执行编辑todo
    */
    handleUpdateTodo(e:any){
        if(e.keyCode!==undefined&&e.keyCode!==13){
            return;
        }
        let _list=JSON.parse(JSON.stringify(this.state.todoList));
        _list[this.state.updateIndex].content=e.target.value;
        this.setState({
            todoList:_list,
            updateIndex:-1,
            updateInput:''
        });
        e.target.value="";
    }

    render(){
        return (
            <div className="m-todo">
                <input type="text" placeholder="输入 todo ,回车确定" onKeyUp={(e)=>{this.addTodo(e)}} className="u-todo-input"/>
                <ul>
                    {this.state.todoList.map((item,index)=> {
                        return (<li key={item.id}>
                            <span className={`u-icon-status ${item.status ? "yes" : "no"}`} onClick={()=>{this.switchStatus(index)}}/>
                                {this.state.updateIndex===index?<input className="u-input-update" defaultValue={this.state.updateInput} onKeyUp={(e)=>{this.handleUpdateTodo(e) }} onBlur={(e)=>{this.handleUpdateTodo(e) }} autoFocus/>:<span onClick={()=>{this.updateTodo(index)}}>{item.content}</span>}

                            <span className="u-icon-delete" onClick={()=>{this.deleteTodo(index)}}>删除</span>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}
export default TodoList