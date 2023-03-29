$ echo "From fairest creatures we desire increase," > sonnet*1.txt
-- write "From fairest creatures we desire increase," to sonnet file.
$ cat sonnet_1.txt
-- From fairest creatures we desire increase,
$ echo "That thereby beauty's Rose might never die," >> sonnet_1.txt
-- appends this line to file
$ cat sonnet_1.txt
-- From fairest creatures we desire increase,
-- That thereby beauty's Rose might never die,
$ echo "hello" > new.txt
-- writes hello to new.txt
$ diff sonnet1*.txt new.txt
-- `<From fairest creatures we desire increase,`
-- `<That thereby beauty's Rose might never die,>`
--
-- `> hello`

This will show which type of shell we are running

    $ echo $SHELL
    /bin/bash

could be

     $ echo $SHELL
    /bin/zsh

to change

    $ chsh -s /bin/bash
    // to confirm change
    $ echo $SHELL
    /bin/bash
