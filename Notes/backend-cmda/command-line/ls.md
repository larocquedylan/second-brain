# ls commands

## ls

will list all files or directories in current working directory

    $ ls foo
    ls: foo: No such file or directory
    $ touch foo
    $ ls foo
    foo

## \*

wildcard character \* (read “star”). For example, to list all files ending in “.txt”, we would type this:

    $ ls \*.txt
    sonnet_1.txt
    sonnet_1_reversed.txt

## -l

    $ ls -l *.txt
    total 16
    -rw-r--r-- 1 mhartl staff  87 Jul 20 18:05 sonnet_1.txt
    -rw-r--r-- 1 mhartl staff 294 Jul 21 12:09 sonnet_1_reversed.txt

## rtl

“list by reversed time of modification (long format)”, or ls -rtl, which lists the long form of each file or directory in order of how recently it was modified (reversed so that the most recently modified entries appear at the bottom of the screen for easy inspection).

commonly used compact form, but you can also pass the options individually, like this:

    $ ls -rtl
    <results system-dependent>

    $ ls -r -t -l

## .

“hidden files (and directories)”, which don’t show up by default when listing files. Hidden files and directories are identified by starting with a dot ., and are commonly used for things like storing user preferences.

running ls here, won't show the fitignore file cos it is hidden. but with flag -a, it shows up

    $ echo "*.txt" > .gitignore
    $ cat .gitignore
    *.txt
    $ ls
    sonnet_1.txt
    sonnet_1_reversed.txt

    $ ls -a
    . .gitignore sonnet_1_reversed.txt
    .. sonnet_1.txt
