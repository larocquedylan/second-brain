# Spread syntax

## Arrays

    const numberX = [1, 2, 3];
    const numberY = [4, 5, 6];

    const fullRange = [numberX, numberY];
    // [[1,2,3], [4,5,6]]

    const spreadRange = [...numberX, ...numberY];
    // [1,2,3,4,5,6]
