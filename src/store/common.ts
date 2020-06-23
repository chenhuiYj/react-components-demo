import {observable, action} from 'mobx'
class Common {
    @observable nowPath:string = ''
    /**
    * 添加评论
    **/
    @action setPath(path:any) {
        this.nowPath=path
    }
}
const common = new Common()

export default common;
