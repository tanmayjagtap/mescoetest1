import React from 'react';
import 'tachyons';

const SignIn = ({user_type}) => {
	return(
	<main className="pa4 black-80">
	  <form className="measure center br3 pa3 shadow-2 cardContainer">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f2 fw6 ph0 mh0">{user_type} Sign-In</legend>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
	        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
	        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
	      </div>
	      <label className="pa0 ma0 lh-copy f5 pointer"><input type="checkbox" /> Remember me</label>
	    </fieldset>
	    <div className="">
	      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Sign in" />
	    </div>
	    <div className="lh-copy mt3">
	      <a href="#0" className="f5 link dim black db">Sign up</a>
	      <a href="#0" className="f5 link dim black db">Forgot your password?</a>
	    </div>
	  </form>
	</main>
	);
}

export default SignIn;