#!/usr/bin/env raku
use v6.d;

# This script subsets all .otf font files in the current directory to include
# only the unicode ranges specified in the 'unicode-range.txt' file, and saves
# the subsetted fonts as .woff2 files with the suffix '-FR'.

# Read the _font.css file
my $css-content = slurp "./src/assets/styles/_font.css";

# Extract the unicode range from the CSS content
my $unicode-range = $css-content.match(/"--unicode-range:"\s*(.+?)";"/)[0];

# Convert space-separated unicode ranges to a comma-separated list
$unicode-range .= subst(/\s+/, ",", :g);

# Set path to fonts
my $fonts-path = "./src/assets/fonts";

# Loop through all .otf files in the current directory
for dir($fonts-path).grep(/\.otf$/) -> $font {
    # Extract the base name of the font file (without extension)
    my $name = $font.basename.subst(/\.otf$/, "");

    # Create a corresponding French + Spanish subset
    run "pyftsubset", $font,
        "--output-file={$fonts-path}/{$name}-FR.woff2",
        "--unicodes={$unicode-range}",
        "--ignore-missing-glyphs",
        "--flavor=woff2",
        "--with-zopfli";
}
