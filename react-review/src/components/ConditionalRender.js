
// export default function ConditionalRender() {
//     const error = true;

//     if(!error) {
//         return <h1>Error...</h1>
//     };
     
//     return <h1>Success</h1>;
// }

// using ternary operator

// export default function ConditionalRender() {
//     const error = false;

//     return (
//         <div>
//             {error === false ? <h1>Error...</h1> : <h1>Success</h1>}
//         </div>
//     );
// }

// using short circuit operator evaluation

// export default function ConditionalRender() {
//     const error = [];

//     return (
//         <div>
//           {/* {!error ? <h1>Error...</h1> : null}
//           {error ? <h1>Success...</h1> : null} */}

//           {error >= 50 && <h1>success...</h1>}
//           {error || <h1>Error...</h1>}
//         </div>
//     );
// }

// export default function ConditionalRender() {
//     const error = false;

//     return (
//         <div>
//           {error ? 'Error' : 'success'}
//         </div>
//     );
// }


