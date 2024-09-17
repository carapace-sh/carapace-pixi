#!/bin/sh
for arg in "$@"; do
  link=$(grep --only-matching --extended-regexp --max-count 1 '"[^"]+/banner.png' "$arg" | cut -c4-)
  [ "$link" != "" ] && sed -i "/<head>/a \        <meta property=\"og:image\" content="https://pixi.carapace.sh/${link}" />" "$arg"
done
exit 0
