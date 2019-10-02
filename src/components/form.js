import React from 'react';

const Form = props => (<div className="for">
    <h2>Just type your city here </h2>
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" id="city" placeholder="Enter your city"></input>
        <button>Get the weather</button>
    </form>
</div>);

export default Form;
