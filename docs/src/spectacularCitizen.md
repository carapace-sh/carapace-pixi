# Spec-tacular Citizen

![](./spectacularCitizen/banner.png)

[Spec]s enable the creation of simple completions using `YAML` files.
They are first-class citizens in [Carapace] and behave similar to the internal completers.


## Basic

[Flags] are defined as a map of name and description.
And [Completion]s using an array of [Values] and [Macros].

![80x12@0:10](./spectacularCitizen/user.cast)

## Macro

[Macros] are [Action]s exposed with a little regex and reflection magic.
There are [Core], [Modifier], and [Custom Macros].

![80x12@0:10](./spectacularCitizen/macro.cast)

## Envsubst

Contextual completion is possible using [variable substitution].

![80x12@0:10](./spectacularCitizen/envsubst.cast)

## Plugin

[Spec]s can also be [embedded] as subcommands for plugin completion.

![80x12@0:20](./spectacularCitizen/plugin.cast)


[Carapace]:https://carapace.sh
[Core]:https://carapace-sh.github.io/carapace-spec/carapace-spec/macros/core.html
[Custom Macros]:https://carapace-sh.github.io/carapace-bin/spec/macros.html
[Modifier]:https://carapace-sh.github.io/carapace-spec/carapace-spec/macros/modifier.html
[variable substitution]:https://carapace-sh.github.io/carapace-spec/carapace-spec/variables.html

[Action]:https://carapace-sh.github.io/carapace/carapace/action.html
[Spec]:https://carapace-sh.github.io/carapace-bin/spec.html
[Flags]:https://carapace-sh.github.io/carapace-spec/carapace-spec/command/flags.html
[Completion]:https://carapace-sh.github.io/carapace-spec/carapace-spec/command/completion.html

[Values]:https://carapace-sh.github.io/carapace-spec/carapace-spec/values.html
[Macros]:https://carapace-sh.github.io/carapace-spec/carapace-spec/macros.html

[embedded]:https://carapace-sh.github.io/carapace-bin/spec/embed.html
