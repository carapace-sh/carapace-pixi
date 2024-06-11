# Running Man

![](./runningMan/banner.png)

[Specs] containing a `run` field can be [executed] using [Shims].

## Alias

[Alias] bridges a command while retaining the argument completion.

![80x12@0:6](./runningMan/alias.cast)

## Script

A [Script] macro is executed with `sh` on unix systems and `pwsh` on windows.
Flags are exposed for environment variable substitution and positional arguments are passed to the script.

![80x12@0:6](./runningMan/script.cast)

## Subcommand

Subcommands can be used to create a reduced set of complex commands.
And enriched with custom [Script]s.

![80x12@0:10](./runningMan/subcommand.cast)

[Alias]:https://carapace-sh.github.io/carapace-bin/spec/run.html#alias
[executed]:https://carapace-sh.github.io/carapace-bin/spec/run.html
[Specs]:https://carapace-sh.github.io/carapace-bin/spec.html
[Shims]:https://carapace-sh.github.io/carapace-bin/spec/shim.html
[Script]:https://carapace-sh.github.io/carapace-bin/spec/run.html#script
