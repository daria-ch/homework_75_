import React, {Component} from 'react';
import './App.css';
import {decodeMessage, encodeMessage, getMessage} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className='App'>
                <form>
                    <div className='message'>
                        <label htmlFor="decoded">Decoded message:</label>
                        <textarea required id='decoded' name='decoded'
                                  value={this.props.decoded}
                                  onChange={event => this.props.getMessage(event.target.name, event.target.value)}
                        />
                    </div>
                    <div className='buttons'>
                        <label htmlFor="password">Password:</label>
                        <input type="text" id='password' name="password" autoComplete='off' required
                               value={this.props.password}
                               onChange={event => this.props.getMessage(event.target.name, event.target.value)}/>
                        <button
                            onClick={(event) => this.props.encodeMessage(event, {
                                password: this.props.password,
                                message: this.props.decoded
                            })}
                        >&#8595;</button>
                        <button
                            onClick={(event) => this.props.decodeMessage(event, {
                                password: this.props.password,
                                message: this.props.encoded
                            })}
                        >&#8593;</button>
                    </div>
                    <div className='message'>
                        <label htmlFor="encoded">Encoded message:</label>
                        <textarea required name='encoded' id='encoded'
                                  value={this.props.encoded}
                                  onChange={event => this.props.getMessage(event.target.name, event.target.value)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    encoded: state.encoded,
    decoded: state.decoded,
    password: state.password
});

const mapDispatchToProps = dispatch => ({
    getMessage: (name, value) => dispatch(getMessage(name, value)),
    encodeMessage: (event, message) => dispatch(encodeMessage(event, message)),
    decodeMessage: (event, message) => dispatch(decodeMessage(event, message))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
