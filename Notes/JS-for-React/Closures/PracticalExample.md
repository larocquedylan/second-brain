# How to use Closures

## change font size

    body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
    }

    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.2em;
    }

    function makeSizer(size) {
        return function () {
            document.body.style.fontSize = `${size}px`;
        };
    }

    const size12 = makeSizer(12);
    const size14 = makeSizer(14);
    const size16 = makeSizer(16);

    document.getElementById("size-12").onclick = size12;
    document.getElementById("size-14").onclick = size14;
    document.getElementById("size-16").onclick = size16;

    <button id="size-12">12</button>
    <button id="size-14">14</button>
    <button id="size-16">16</button>

By clicking on the botton corresponding to a font size, we can create a helper function that changes the font size.
