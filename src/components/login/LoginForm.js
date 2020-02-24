import React, { Component } from 'react'
import styled from 'styled-components';
class LoginForm extends Component {
    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input type="email" required/>
                            <label>Email ou Numéro de téléphone</label>
                        </div>
                        <div className="input-container">
                            <input type="password" required/>
                            <label>Mot de passe</label>
                        </div>
                        <div className="input-container">
                           <a type="submit">Sign In</a>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}
export default LoginForm;


//form container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index:5;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
    }

`