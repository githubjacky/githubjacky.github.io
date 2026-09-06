#!/bin/bash
set -e

# The github-pages gem (jekyll 3.10 / liquid 4.0.4) does not support Ruby 4.x,
# so pin the build to the rbenv Ruby in .ruby-version and run through bundler.
cd "$(dirname "$0")"

if ! command -v rbenv >/dev/null 2>&1; then
  echo "rbenv not found. Install it with: brew install rbenv" >&2
  exit 1
fi

eval "$(rbenv init - bash)"
rbenv exec bundle exec jekyll serve -l -H 0.0.0.0
