import React from 'react'

function Login (props) {
   
   
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, sethasAccount, emailError, passwordError} = props;
    
  
    return (
    <section className='login'>
        <div className='loginContainer'>
            <h1>Welcome to Agronomy </h1>
                <br/><span>Please Login to continue</span>
            <label>Username</label>
            <input type="text" autoFocus required 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            />
            <p className='errorMsg'>{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password}
             onChange={(e)=> setPassword(e.target.value)}
            />
            <p className='errorMsg'>{passwordError}</p>
            <div className='btnContainer'>
                {hasAccount ? (
                    <>
                     <button onClick={handleLogin}>Log In</button>
                     <p>Don't have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span></p>
                    </>

                ) : (
                    <>
                     <button onClick={handleSignup}>Create Your Account</button>
                     <p>Have an account? <span onClick={() => sethasAccount(!hasAccount)}>Log  In</span></p>
                    </>

                )}
            </div>

        </div>

    </section>
  )
};

export default Login;