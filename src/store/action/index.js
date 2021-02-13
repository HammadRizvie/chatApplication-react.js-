
import firebase from '../../config/firebase';
// const set_state = () =>
// {
//     return (dispatch)=>{
//         dispatch({
//             type:"Go",
//             name:"Hammad"
//         })
//     }   
// }
const facebook_login = (history) =>
{
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
  .then( (result)=> {
    var credential = result.credential;
    var user = result.user;
    console.log("user===>",user);
    let obj = {
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
      uid: user.uid
    }
    firebase.database().ref('/').child(`user/${user.uid}`).set(obj)
    .then(()=>
    {
      history.push('/chat')
    })
     
  
  })
  .catch( (error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage)
  });
    }
}
export {
    // set_state ,
    facebook_login
}
