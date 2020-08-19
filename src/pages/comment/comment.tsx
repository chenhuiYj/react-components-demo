import React, {Component} from 'react'
import CommentInput from './components/commentInput'
import CommentList from './components/commentList'
import common from '../../store/common'
import '../../sass/comment.scss'
import '../../sass/reset.scss'

class Comment extends Component<any> {
    constructor(props:object) {
        super(props);
    }
    componentDidMount(){
        debugger
        common.setPath(this.props.location.pathname)
    }
    render() {
        return (
            <div className="p-comment">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}
export default Comment