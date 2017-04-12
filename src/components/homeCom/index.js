import React, {Component} from 'react';
import logoImg from '../../assets/images/logo.png';
import './index.scss';

class homeCom extends Component {
	componentWillMount() {
		// 组件开始加载
	}
	goMenu() {
		const { router } = this.context;
		router.push({ pathname: 'menu' });
		// v2.0.0
		// router.push(path)
		// router.push({ pathname, query, state }) // new "location descriptor"

		// router.replace(path)
		// router.replace({ pathname, query, state }) // new "location descriptor"
	}
	goGithub() {
		window.open("https://github.com/hmz5/webpack-react");
	}
	render() {
		// console.log(this.context, this.props)
		return(
			<div className="m-home f-pr">
		        <div className="u-logo f-pa">
		            <img src={logoImg} alt="" />
		            <p className="version">cubeex - v1.0</p>
		        </div>
		        <div className="m-homeBtn f-pa">
		            <div className="u-button u-demo f-pr" onClick={this.goMenu.bind(this)}>
		                <div className="f-pa">
		                    <span className="menu_icon f-fl"></span><span className="f-fl">Demo</span>
		                </div>
		            </div>
		            <div className="u-button u-github f-pr" onClick={this.goGithub.bind(this)}>
		                <div className="f-pa">
		                    <span className="git_icon f-fl"></span><span className="f-fl">Github</span>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
}

homeCom.contextTypes = {
  	router: React.PropTypes.object.isRequired
};

export default homeCom