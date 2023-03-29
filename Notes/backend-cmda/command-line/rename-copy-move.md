# Renaming, Copying, Delete files

    $ echo "test text" > test
    $ mv test test_file.txt
    $ ls
    test_file.txt

## copy

    $ cp test_file.txt second_test.txt
    $ ls
    second_test.txt
    test_file.txt

## delete

    $ rm second_test.txt
    remove second_test.txt? y
    $ ls second_test.txt
    ls: second_test.txt: No such file or directory

### -f

Force flag/option

    $ rm -f *.txt
