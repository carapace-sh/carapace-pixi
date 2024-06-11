# Overly Attached Argument

![](./overlyAttachedArgument/banner.png)

[Flags] can also take an argument. And there are multiple variants to this.


## POSIX

[Flags] that require an argument consume the one next on the command line.
But it can also be attached directly to the name with a `=` delimiter.
And for shorthands, the delimiter can even be left out.
[Flags] that take an optional argument do so only in the attached version.

![80x12@0:18](./overlyAttachedArgument/posix.cast)

> Not all commands support each of these variants.

## Non-POSIX

There are also some less recommended variants.

Like [Flags] consuming multiple arguments.
Or using a different delimiter than `=`.

![80x12@0:9](./overlyAttachedArgument/nonposix.cast)


[Flags]:https://en.wikipedia.org/wiki/Command-line_interface#Command-line_option
