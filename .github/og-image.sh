#!/bin/sh
for arg in "$@"; do
  link=$(grep --only-matching --extended-regexp --max-count 1 '"[^"]+/banner.png' "$arg")
  [ "$link" != "" ] && sed -i "/<head>/a \        <meta property=\"og:image\" content=\"${link}\" />" "$arg"
done
exit 0
