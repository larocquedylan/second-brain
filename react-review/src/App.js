import './App.css'; 
// import SayHello from './components/SayHello';
import Hello from './components/Hello';
import Comment from './components/Comment';
import ConditionalRender from './components/ConditionalRender';
import Props from './components/Props';

function App() {


  return (
    <div className="App">

      <Hello name="Tyson" /> 
      <Hello name="Dylan" />
      {/* <Hello />

      <Comment username="tyson" time={(new Date()).toString()}> 
        <p> this is a comment</p>
        <div> hehedjasdlkjsafls</div>
      </Comment> */}

    {/* <ConditionalRender /> */}
    <Props />
    </div>
  );
}


export default App;



// function Hello(props){
//   return <h1>Hello {props.name}!</h1>;
// }





// Hello.defaultProps = {
//   name: "user"
// }



// by defining this function outside of the App function React will not re-render the function which makes it more efficient. If we define in the function body before return statement, React will re-render the function every time the App function is called.

// this function is hoisted to the top of the file
// function SayHello() {
//   return <h1>Hello World!</h1>;
// } 