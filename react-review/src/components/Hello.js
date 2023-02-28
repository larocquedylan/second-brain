function Hello({name}){
    Hello.defaultProps = {
        name: "user"
    }
    
    return <h1>Hello {name}!</h1>;
   
}

export default Hello;