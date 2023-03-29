# Bash

Bash is a command processor that typically runs in a text window where the user types commands that cause actions. Bash can also read and execute commands from a file, called a shell script.

It is a widely distributed command language is is the default login shell to macOS.

Bash supports filename globbing, piping, here documents, command substitution, variables, and control structures for condition-testing and iteration.

## features

When a user presses the tab key within an interactive command-shell, Bash automatically uses command line completion to match partly typed program names, filenames and variable names.

## anatomy

    (base) person-computer:directory person$ rm -f foo.txt

PROMPT: (base) person-computer:directory person$

COMMAND: rm

OPTIONS: -f

ARGUMENTS: foo.txt

## Commands

### navigate

    pwd: print working directory
    ls: list files in directory
    ls -a: list all files hidden or not
    cd: change directory

### files

    ~: user/root directory
    touch: create, change and modify timestamps of a file
    mkdir: make a directory/folder
    rm: remove/delete file
    mv: move a file/folder
    cp: copy a file/folder
    cat: reads the file and outputs the contents to the console
    echo: prints the arugments to the console
    >: redirect
    >>: append to
    curl: transfer data to or from a server

### apps

    less: read
    vim: write
    man: read the manual

### rights

    sudo: suprer user - dangerous to use cos can do anything

[essential cli commands](https://www.geeksforgeeks.org/essential-linuxunix-commands/?ref=gcse)
[touch cli](https://www.geeksforgeeks.org/touch-command-in-linux-with-examples/)
[cat cli](https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/?ref=rp)
[cURL](https://www.geeksforgeeks.org/curl-command-in-linux-with-examples/?ref=gcse)

#### examples

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
