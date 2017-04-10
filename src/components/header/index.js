import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	goBack() {
		console.log(this.props);
		const { router } = this.context;
		router.goBack(); // router.go(-1)
	}
	render() {
		return(
			<div className="f-pr m-header">
		        {this.props.isGoBack ? <div className="u-herder-btn u-back" onClick={this.goBack.bind(this)}></div> : ''}
		        <div className="u-header-title f-toe">{this.props.title}</div>
		    </div>
		)
	}
}

// 默认 Prop 值
Header.defaultProps = {
    isGoBack: true
}

// Prop 验证
Header.propTypes = {
	title: React.PropTypes.string.isRequired
}

// 你可以定义一个js原始类型的prop,默认请情况下，这是都是可选的
/* 
 React.PropTypes.array
 React.PropTypes.bool
 React.PropTypes.func
 React.PropTypes.number
 React.PropTypes.object
 React.PropTypes.string
 React.PropTypes.symbol
 */
// 任何可以渲染的东西：数字，字符串，元素或数组（或片段）。
/*
 React.PropTypes.node
*/


Header.contextTypes = {
  	router: React.PropTypes.object.isRequired
};

export default Header