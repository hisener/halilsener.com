---
title: "The dollar sign in *nix"
path: "/the-dollar-sign-in-nix/"
date: "2018-02-03T08:00:00.000Z"
tags: TL;DR, Linux, Unix, Bash
draft: true
---

I wrote this post to use it when I forget the usage of `$` sign.
And, I think it would be useful for beginners like me, too.

Also, this is the first post of the TL;DR series. I am planning that posts
in this series contain less writing and more coding. I hope it won't be the last.

Let's get started.

## First things first: Positional Parameters

* `$1`, `$2`, `$3`, ... are the [positional parameters][0] that are assigned from the shell's arguments.
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

`$?` - The exit status of the most recent command.

```bash
$ non-existing-command
$ echo $?
127 # which means "command not found"
```

[0]: https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html
[1]: http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_05_02
[2]: https://stackoverflow.com/questions/5163144/what-are-the-special-dollar-sign-shell-variables
[3]: https://bash.cyberciti.biz/guide/$IFS
[4]: https://stackoverflow.com/questions/255898/how-to-iterate-over-arguments-in-a-bash-script
[5]: http://tldp.org/LDP/abs/html/exitcodes.html
