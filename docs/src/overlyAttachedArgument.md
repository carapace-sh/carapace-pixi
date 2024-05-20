# Overly Attached Argument

![](./overlyAttachedArgument/banner.png)

[Flag]s can also take an argument. And there are multiple variants to this.


## POSIX

[Flag]s that require an argument consume the one next on the commandline.
But it can also attached directly to it with a `=` delimiter.
And for shorthands it can even be left out.
[Flag]s that take an optional argument do so only in the attached version.

![80x12@0:18](./overlyAttachedArgument/posix.cast)

> Not all commands support each of these variants.

## Non-POSIX

There are also some less recommended variants.

Like [Flag]s consuming multiple arguments.
Or using a different delimiter than `=`.

![80x12@0:9](./overlyAttachedArgument/nonposix.cast)
