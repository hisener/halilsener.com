---
title: "The dollar sign in *nix"
path: "/the-dollar-sign-in-nix/"
date: "2018-02-06T15:00:00.000Z"
tags: TL;DR, Linux, Unix, Bash
---

I wrote this post to use it when I forget the usage of `$` sign.
And, I think it would be useful for beginners like me, too.

Also, this is the first post of the [TL;DR series][0]. I am planning to have less
writing and more coding in posts of this series. And, I hope this one won't be
the last.

Let's get started.

## First things first: Positional Parameters

* `$1, $2 $3, ...` are the [positional parameters][1] that are assigned from the shell's arguments.
* `$0` is the name of the shell script.
* `$#` is the number of positional parameters.

Let's have a quick example of these.

`command.sh`
```bash
#!/usr/bin/env bash

echo $0
echo $1
echo $2
echo $#
```

Run `command.sh` as follows:

```bash
$ ./command.sh dollar sign
```

Its result:

```
./command.sh
dollar
sign
2
```

## All the positional parameters

* `$@` and `$*` expand to the positional parameters, starting from one.
* `"$@"` is an array-like construct of all the positional parameters, `[$1, $2, $3, ...]`
* `"$*"` is the IFS expansion of all the positional parameters, `$1 $2 $3, ...`
* `$IFS`, internal field separator, is used for word splitting. The default value of `$IFS` is `<space><tab><newline>`, and may be changed.

Let's change `command.sh` a little bit

```bash
#!/usr/bin/env bash

# Set IFS to see the difference
IFS='-' 

echo $@
echo $*
echo "$@"
echo "$*"
```

```
$ ./command.sh dollar sign
dollar sign
dollar sign
dollar sign
dollar-sign
```

## Iterate over the arguments

As I mentioned above, `"$@"` is an array-like construct. We can iterate over the arguments using it.

```bash
for arg in "$@"
do
    echo $arg
done
```

```
$ ./command.sh dollar sign
dollar
sign
```


## More $

`$?` - The exit status of the most recent foreground command ([pipeline][7]).

```bash
$ non-existing-command
$ echo $?
127 # which means "command not found"
```

`$!` - The process ID of the most recent background command executed from the current shell.

```bash
$ echo "background" &
[1] 16422
background
[1]+  Done  echo "background"
$ echo $!
16422
```

`$$` - The process ID of the current shell.

```bash
$ echo $$
15699
```

---

Your comments and suggestions are welcome. Also, you can edit this page [on GitHub][8].

[0]: /tag/tl-dr/
[1]: https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html
[2]: http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_05_02
[3]: https://stackoverflow.com/questions/5163144/what-are-the-special-dollar-sign-shell-variables
[4]: https://bash.cyberciti.biz/guide/$IFS
[5]: https://stackoverflow.com/questions/255898/how-to-iterate-over-arguments-in-a-bash-script
[6]: http://tldp.org/LDP/abs/html/exitcodes.html
[7]: http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_09_02
[8]: https://github.com/hisener/halilsener.com/blob/master/src/pages/2018-02-05---the-dollar-sign-in-nix/index.md
