#!/bin/bash

# This script subsets all .otf font files in the current directory to include
# only the unicode ranges specified in the 'unicode-range.txt' file, and saves
# the subsetted fonts as .woff2 files with the suffix '-FR'.

# Loop through all .otf files in the current directory
for font in *.otf; do
  # Extract the base name of the font file (without extension)
  name=$(basename "$font" .otf)

  # Create a corresponding French + Spanish subset
  pyftsubset "$font" \
    --output-file="${name}-FR.woff2" \
    --unicodes-file="./unicode-range.txt" \
    --ignore-missing-glyphs \
    --flavor="woff2" \
    --with-zopfli
done
