# cURL

curl is a command-line tool to transfer data to or from a server, using any of the supported protocols (HTTP, FTP, IMAP, POP3, SCP, SFTP, SMTP, TFTP, TELNET, LDAP, or FILE).

## display info from url

    curl https://www.geeksforgeeks.org

## progress meter

We can see the progress of a data transfer containing info about the speed, the amount of data, time left, etc.

    curl -# -O ftp://ftp.example.com/file.zip

We can also do this silently

    curl --silent ftp://ftp.example.com/file.zip

## saving the data

    curl -o [file_name] [URL...]

    // curl -o hello.zip ftp://speedtest.tele2.net/1MB.zip

Here the data transfer from "ftp://speed ...." is saved in the file 'hello.zip'

## continuing download if failed

    curl -C - [URL...]

    // curl -C - -O ftp://speedtest.tele2.net/1MB.zip

This will resume the download should something fail in the middle of it... typically due to large transfers.
