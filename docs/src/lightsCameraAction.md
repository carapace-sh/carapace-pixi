# Lights, Camera, Action!

![](./lightsCameraAction/banner.png)

An [Action] defines how a position is completed in [Carapace].

It consists of either the static values to be inserted.
Or a function to generate them.
Also, some [metadata].

## Reusable

An [Action] is reusable.
It can be [prefixed], [filtered], [styled], converted to a [list], and even [cached].

Take the repository completion for example.
It consists of [ActionOwners] and [ActionRepositories] combined in various ways.
Originally written for `gh`, it is also used in `git`, `go`, and other commands.

![80x12@0:9](./lightsCameraAction/ownerRepositories.cast)

## Contextual

An [Action] is invoked with [Context].

This enables a modified behavior based on work directory, environment variables, or positional arguments.

![80x12@0:12](./lightsCameraAction/context.cast)

## Modular

Multiple [Action]s can be invoked [concurrently] and [merged] into one.

Like `tig`, which accepts subcommands, files, and git references like tags and branches.
Each of these is a separate [Action].

![80x12@0:5](./lightsCameraAction/modular.cast)

[Action]:https://carapace-sh.github.io/carapace/carapace/action.html
[ActionOwners]:https://pkg.go.dev/github.com/carapace-sh/carapace-bin/pkg/actions/tools/gh#ActionOwners
[ActionRepositories]:https://pkg.go.dev/github.com/carapace-sh/carapace-bin/pkg/actions/tools/gh#ActionRepositories

[Carapace]:https://carapace.sh
[Context]:https://carapace-sh.github.io/carapace/carapace/context.html

[cached]:https://carapace-sh.github.io/carapace/carapace/action/cache.html
[concurrently]:https://carapace-sh.github.io/carapace/carapace/batch.html
[filtered]:https://carapace-sh.github.io/carapace/carapace/action/filter.html
[list]:https://carapace-sh.github.io/carapace/carapace/action/list.html
[merged]:https://carapace-sh.github.io/carapace/carapace/invokedAction/merge.html
[metadata]:https://pkg.go.dev/github.com/carapace-sh/carapace/internal/common#Meta
[prefixed]:https://carapace-sh.github.io/carapace/carapace/action/prefix.html
[styled]:https://carapace-sh.github.io/carapace/carapace/action/style.html
