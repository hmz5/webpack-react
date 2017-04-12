import React, {Component} from 'react';
import { Link } from 'react-router';
import Header from '../../components/header';
import Tab from '../../components/tab';
import './menu.scss';
class menu extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		// 只会在装载之前调用一次，在 render 之前调用，你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
	}
	componentDidMount() {
		// 只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
	}
	render() {
		// console.log(this.state.title);
		return(
			<div className="view m-menu f-flex f-flexc">
				<Header title="Demo" />
		        <ul className="f-ot content f-flex1">
		        	<Link to={{ pathname: '/findDom' }}>
		                <div className="demos-item f-flex">
		                    <div className="icon menu-pull-refresh"></div>
		                    <div className="f-flex1 components">
		                        <span>findDom</span>(Dom操作)
		                    </div>
		                </div>
		            </Link>
		            <Link to={{ pathname: '/routerDemo', query: { id: '1' } }}>
		                <div className="demos-item f-flex">
		                    <div className="icon menu-pull-refresh"></div>
		                    <div className="f-flex1 components">
		                        <span>routerDemo</span>(router操作)
		                    </div>
		                </div>
		            </Link>
		            <Link to={{ pathname: '/reduxDemo' }}>
		                <div className="demos-item f-flex">
		                    <div className="icon menu-pull-refresh"></div>
		                    <div className="f-flex1 components">
		                        <span>reduxDemo</span>(reduxDemo)
		                    </div>
		                </div>
		            </Link>
		        </ul>
		        <Tab whichTab='2' />
		    </div>
		)
	}
}

export default menu