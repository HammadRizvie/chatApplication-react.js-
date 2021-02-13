import React from 'react';
class Chat extends React.Component
{
    fun=()=>
    {
        this.props.history.push('/home');
    }
    render()
    {
        return(
            <div>
                <h1>WELCOME</h1>
                <button onClick={this.fun} >HOME</button>
            </div>
        )
    }
}
export default Chat;