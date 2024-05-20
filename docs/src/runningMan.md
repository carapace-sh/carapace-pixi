# Running Man

![](./runningMan/banner.png)

[Spec]s containing a `run` field can be [executed] using [Shim]s.

## Alias

[Alias] bridges a command while retaining the argument completion.

![80x12@0:6](./runningMan/alias.cast)

## Script

A [Script] macro is executed with `sh` on unix systems and `pwsh` on windows.
Flags are used for environment substitution and positional arguments are passed to the script.

![80x12@0:6](./runningMan/script.cast)

## Subcommand

Subcommands can be used to create a reduced set of complex commands.
And enriched with custom [Script]s.

![80x12@0:10](./runningMan/subcommand.cast)

[Alias]:https://carapace-sh.github.io/carapace-bin/spec/run.html#alias
[executed]:https://carapace-sh.github.io/carapace-bin/spec/run.html
[Spec]:https://carapace-sh.github.io/carapace-bin/spec.html
[Shim]:https://carapace-sh.github.io/carapace-bin/spec/shim.html
[Script]:https://carapace-sh.github.io/carapace-bin/spec/run.html#script
