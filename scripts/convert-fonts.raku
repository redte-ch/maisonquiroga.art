#!/usr/bin/env raku

# This script subsets all .otf font files in the current directory to include
# only the unicode ranges specified in the 'unicode-range.txt' file, and saves
# the subsetted fonts as .woff2 files with the suffix '-FR'.

# Set path to unicode ranges file
my $unicode-ranges = './scripts/unicode-ranges.txt';

# Set path to fonts
my $fonts-path = './src/assets/fonts';

# Loop through all .otf files in the current directory
for dir($fonts-path).grep(/\.otf$/) -> $font {
    # Extract the base name of the font file (without extension)
    my $name = $font.basename.subst(/\.otf$/, '');

    # Create a corresponding French + Spanish subset
    run 'pyftsubset', $font,
        "--output-file={$fonts-path}/{$name}-FR.woff2",
        "--unicodes-file={$unicode-ranges}",
        "--ignore-missing-glyphs",
        "--flavor=woff2",
        "--with-zopfli";
}
