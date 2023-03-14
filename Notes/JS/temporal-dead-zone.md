# Temporal Deadzone

    const temporalDeadzone(){
        console.log(myVar);
        console.log(myLet);
        console.log(myConst);

        var myVar = 'var'
        let myLet = 'let'
        const myConst = 'const'

        return {myVar: myVar, myLet: myLet, myConst: myConst }
    }

This will return an error, not my `myVar`, but for `myLet` and `myConst`. `myVar` even though declared after it is console logged doesn't throw an error because `var` declarations are hoisted!

the block including `   let myLet = 'let const myConst = 'const'`is the temporal deadzone!
