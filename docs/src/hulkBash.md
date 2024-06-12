# Hulk BASH!

![](./hulkBash/banner.png)

[Carapace] supports all major shells.
It does not rely on shell-specific functions and even has its own custom file completion.
This way it can provide features that not only are consistent across shells.
But exceed what they natively provide.

## Bash

Take [Bash] for example. What a nasty little bugger.
By default [Bash] has no support for descriptions.
But with some [trickery](https://stackoverflow.com/a/10130007), these can be added.

![80x12@0:3](./hulkBash/bashDescriptions.cast)

Then there are more complicated topics.
Like [Wordbreaks], where you must return a substring of the value to be inserted.
And [Redirects], which are passed unfiltered to the completion function.

[Carapace] had to resort to its [Lexer] to handle these correctly.

> You really don't want to write completions for [Bash]. I went all green on this one.

## Fish

[Fish] is a bit more advanced and has a modal completion menu with descriptions.

It also takes care of correctly escaping special characters in the values.
And provides a basic framework for creating completion scripts.

But replicating a complex argument structure isn't easy and subcommand determination is rather [optimistic](https://github.com/fish-shell/fish-shell/issues/7107#issuecomment-653951801).

```sh
function __fish_seen_subcommand_from
    set -l cmd (commandline -pxc)
    set -e cmd[1]
    for i in $cmd
        if contains -- $i $argv
            return 0
        end
    end
    return 1
end
```
[Carapace] relies on the work done in [spf13/cobra].
It is a widely adopted argument parser that does this without guesswork.

## Zsh

Between shells, [Zsh] so far has the most sophisticated framework for writing completions.

But it might be a bit too complex.
Learning it takes some effort and there are limitations and traps as well.
Coloring for example is done using complicated and slow regex matching.
It is thus mostly used for file completion (`LS_COLORS`) and rarely seen in custom scripts.


![80x12@0:11](./hulkBash/style.cast)

[Carapace] adopted [Styles] from [Elvish]. A human-readable abstraction of [ANSI Escape Sequences].

> See [Puking Rainbows] for how this works in detail.

[ANSI Escape Sequences]:https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
[Bash]:https://www.gnu.org/software/bash/
[Carapace]:https://carapace.sh
[Elvish]:https://elv.sh/
[Fish]:https://fishshell.com/
[Lexer]:https://github.com/carapace-sh/carapace-shlex
[Puking Rainbows]:https://dev.to/rsteube/puking-rainbows-1pje
[Redirects]:https://www.gnu.org/software/bash/manual/html_node/Redirections.html
[Wordbreaks]:https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html#index-COMP_005fWORDBREAKS
[spf13/cobra]:https://github.com/spf13/cobra
[Zsh]:https://www.zsh.org/

[Styles]:https://pkg.go.dev/github.com/rsteube/carapace/pkg/style#pkg-variables
