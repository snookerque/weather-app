import React from 'react';
import AppTheme1 from "./components/AppTheme1";
import AppTheme2 from "./components/AppTheme2";
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Start extends React.Component{
    render(){
        return(
			<div className="routeLink">
				<BrowserRouter>
					<div>
						<ul>
							<li><Link to="/Theme1">Theme A</Link></li>
							<li><Link to="/Theme2">Theme B</Link></li>
						</ul>
				
						<hr/>
				
						<Route exact path="/" component={AppTheme1}/>
						<Route path="/Theme1" component={AppTheme1}/>
						<Route path="/Theme2" component={AppTheme2}/>
					</div>
				</BrowserRouter>
			</div>  		
        )
    }
}

export default Start;