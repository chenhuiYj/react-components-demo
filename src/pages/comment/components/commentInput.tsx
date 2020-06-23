import React, {Component} from 'react'
import comment from '../../../store/commentData'
import '../../../sass/commentInput.scss'

interface ICommentInputProps{
  id:number,
  commentContent:string
}

class CommentInput extends Component<any, ICommentInputProps> {
    constructor(props:object) {
        super(props);
        this.state = {
            id: 0,
            commentContent: ''
        };
    }
    /**
     * @description 失去焦点，改变commentContent
     */
    handleBlur(e:any) {
        this.setState({
            commentContent: e.target.value,
        });
    }
    /**
     * @description 添加评论
     */
    addComment() {
        let _id=this.state.id
        comment.addComment({'content': this.state.commentContent, 'id': ++_id,'apply':[]});
        this.setState({
            commentContent: '',
            id:_id
        });
    }

    render() {
        return (
            <div className="m-comment-input">
                <textarea placeholder="请输入评论" value={this.state.commentContent} onChange={this.handleBlur.bind(this)}/>
                <button onClick={this.addComment.bind(this)}>提交评论</button>
            </div>
        )
    }
}

export default CommentInput
