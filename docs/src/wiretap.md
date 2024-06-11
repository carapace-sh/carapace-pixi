# Wiretap

![](./wiretap/banner.png)

[Carapace] can tap into other completion sources and [bridge] them.

## Command

Commands using the [combined] or [detached] approach can be invoked for completion.

![80x12@0:6](./wiretap/command.cast)

## Shell

Shells are a bit trickier and may require [nasty scripting].

![80x12@0:16](./wiretap/shell.cast)

## Embed

[Carapace] invokes itself for continuous [embedding].

![80x12@0:19.5](./wiretap/embedding.cast)


## Explicit

[Bridges] can be registered using [Specs].
There is also a [config] alternative for convenience.

![80x12@0:10](./wiretap/explicit.cast)

## Implicit

Other completion sources can [implicitly] be used for commands unknown to [Carapace].

![80x12@0:11.5](./wiretap/implicit.cast)


[Carapace]:https://carapace.sh
[combined]:./porcelainShop.md#the-combined-approach
[config]:https://carapace-sh.github.io/carapace-bin/bridges.html
[detached]:./porcelainShop.md#the-detached-approach
[bridge]:https://github.com/carapace-sh/carapace-bridge
[embedding]:https://carapace-sh.github.io/carapace-bin/spec/embed.html
[Specs]:https://carapace-sh.github.io/carapace-bin/spec.html
[nasty scripting]:https://github.com/Valodim/zsh-capture-completion/blob/master/capture.zsh
[implicitly]:https://carapace-sh.github.io/carapace-bin/setup/environment.html#carapace_bridges
[Bridges]:https://carapace-sh.github.io/carapace-bin/spec/bridge.html
