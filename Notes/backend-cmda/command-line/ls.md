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

A detailed listing of the files and directories in the current directory.

    $ ls -l
    total 196168
    -rw-r--r--  1 dylan  staff  10203960 15 Feb 16:36 1.wav
    -rw-r--r--  1 dylan  staff   5292044 15 Feb 16:36 2.wav
    -rw-r--r--  1 dylan  staff  14112044 15 Feb 16:36 3.wav

The first column represents the file type and permissions. The first character indicates the file type - "-" for a regular file, "d" for a directory, "l" for a symbolic link, and so on. The next nine characters represent the file permissions for the owner, group, and others. The letters "r", "w", and "x" indicate read, write, and execute permissions, respectively.

The second column represents the number of hard links to the file or directory.

The third column represents the owner of the file or directory.

The fourth column represents the group that the file or directory belongs to.

The fifth column represents the file size in bytes.

The sixth column represents the date and time when the file or directory was last modified.

The seventh column represents the name of the file or directory.

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
