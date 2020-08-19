import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import Test from '@components/Test/test'
import { HashRouter,Route,Link,Redirect,Switch } from 'react-router-dom'
// import SideBar from '@components/SideBar/sideBar'
import comment from '@pages/comment/comment'
import todo from '@pages/todo/todo'
import shoppingCart from '@pages/shoppingCart/shoppingCart'
import common from './store/common'
import {observer} from 'mobx-react'

// const TestDemo = (props: any) => <>{props.children}</>
@observer
class Index extends Component<any,any>{
  constructor(props:any) {
    super(props)
    this.state={
      routerList:[
        {
          router:'/todo',
          label:'todoList',
          component:todo
        },
        {
          router:'/comment',
          label:'评论列表',
          component:comment
        },
        {
          router:'/shoppingCart',
          label:'购物车',
          component:shoppingCart
        }
      ]
    }
  }

  switchRouter(path:any){
    common.setPath(path)
  }

  render(){
    return [
      <HashRouter key='3'>
          <div className='m-main'>
            <div className='m-sidebar'>
              {
                this.state.routerList.map((item:any)=><Link key={item.router} to={item.router} className={common.nowPath===item.router?'cur':''} onClick={()=>{this.switchRouter(item.router)}}>{item.label}</Link>)
              }
            </div>
          <div className='m-content'>
              {/* <Route path='/comment' component={comment}/>
              <Route path='/todo' component={todo}/>
              <Route path='/shoppingCart' component={shoppingCart}/> */}
              <Switch>
                {
                  this.state.routerList.map((item:any)=><Route exact key={item.router} path={item.router} component={item.component}/>)
                }
                <Redirect exact from="/" to="/todo" />
              </Switch>
          </div>   
        </div>
      </HashRouter>
    ]
  }
}

ReactDOM.render(
  <Index />,
  document.querySelector('#app')
)

// const render=()=>{
//   ReactDOM.render(
//     [
//       // <HashRouter key="2">
//       //   <div>
//       //     <Link to="/about">首页</Link>
//       //     <SideBar></SideBar>
//       //     <Route path="/about" component={Test}/>
//       //   </div>
//       // </HashRouter>
//       <HashRouter key='3'>
//         <div className='m-main'>
//           <div className='m-sidebar'>
//             <Link to='/comment'>评论列表</Link>
//             <Link to='/todo'>todoList</Link>
//             <Link to='/shoppingCart'>购物车</Link>
//           </div>
//           <div className='m-content'>
//             <Route path='/comment' component={comment}/>
//             <Route path='/todo' component={todo}/>
//             <Route path='/shoppingCart' component={shoppingCart}/>
//           </div>   
//         </div>
//       </HashRouter>
//     ],
//     document.querySelector('#app')
//   )
// }
// render()