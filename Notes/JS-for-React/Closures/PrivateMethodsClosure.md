# Emulating private methods with Closures

## Why are private methods useful?

By using class or closures to emulate private methods, we can create functions that are only accessible within the scope of another function.

It also prevents naming conflicts by keeping the global namespace clean.

In this example, one of the methods references the outer variable `PrivateCounter` and so the state is stored in memory

    const makeCounter = function () {
        let privateCounter = 0;
        function changeBy(val) {
            privateCounter += val;
        }
        return {
            increment() {
            changeBy(1);
            },

            decrement() {
            changeBy(-1);
            },

            value() {
            return privateCounter;
            },
        };
    };

    const counter1 = makeCounter();
    const counter2 = makeCounter();

    console.log(counter1.value()); // 0.

    // can access private methods of the counter object
    counter1.increment();
    counter1.increment();
    console.log(counter1.value()); // 2.

    counter1.decrement();
    console.log(counter1.value()); // 1.
    console.log(counter2.value()); // 0.

    // we can't access private count variable directly, we can only access g
    console.log(counter1.privateCounter) // undefined

    // we can override the PrivateCounter field
    counter2.PrivateCounter = 2;

    // But it still doesn't override our  the acutal PrivateCounter variable in the method
    console.log(counter2.value(), 'value')
    console.log(counter2.PrivateCounter, 'counter')

As we can see, we are not able to modify the PrivateValue within the function. We can change the field value but it doesn't influence our actual private method.

## More Practically

Let say we have a web app that allows users to upload and manage their files. We might have a `FileUpload` object that handles the uploading and management of this. The object likely has some sort of array called `files` or something. The `files` array stores the users uploaded files and perhaps some other methods that perform operation on those files i.e. renaming or alerting success or something etc.

We don't want the user's inputs or some external code to be able to directly modify this state of `FileUploader`. So, by making the `files` object private we can ensure a few things.

    function FileUploader(){
            let files = []; // private variables

            function addFile(file){
                files.push(file);
            }

            function deleteFile(file){
                files = files.filter(f => f != file);
            }

            function getFiles(){
                    return [...files]; // this will return a copy of the private array
            }

            return {
                addFile,
                deleteFile,
                getFiles.
            };
    }

    const upload = FileUploader();

    upload.addFile('file1);

    console.log(upload.files) // undefined cos private variable

    console.log(upload.getFiles()) // ['file1']
    <!-- The only way to see the files is by using the method. The onyl way to change them is through the method too -->

### Security

We can ensure that only authorized code can modify the state of `FileUploader`. This protects sensitive data in our customer's files.

### Data Integrity

By controlling how `files` array is modified we can ensure that only valaid data is contained. For instance, how it is named and then stored on our server. Or, making sure there isn't uneccssary info such as duplicates.

### Modularity/Encapsulation

By encapsulating our methods in a private object, we make it easier to modify or maintain the operations. Which means something won't break if we decide to change the one operation in how it is stored or named.
