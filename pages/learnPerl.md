## References
- https://qntm.org/perl_cn

## Hello world
```perl
use strict;
use warnings;

print "Hello world";
```

## Variables
### Scalar
```perl
my $undef = undef;
print $undef; # Output: "", and a warning

my $undef2;
print $undef2; # Output: "", and the same warning
```

```perl
my $num = 4040.5
print $num; # Output: "4040.5"
```

```perl
my $string = "world";
print $string; # Output: "world"
print "Hello ".$string; # Output: "Hello world"
```

```perl
my $str1 = "4G";
my $str2 = "4H";

print $str1 . $str2; # Output: "4G4H"
print $str1 + $str2; # Output: "8", and two warnings
print $str1 eq $str2; # Output: "" (false)
print $str1 == $str2; # Output: "1", and two warnings

# Value operator: <, >, <=, >=, ==, !=, <=>, +, *
# String operator: lt, gt, le, ge, eq, ne, cmp, ., x
```

## Array
```perl
my @array = (
    "print",
    "these",
    "strings",
    "out",
    "for",
    "me",
);

print $array[0]; # Output: "print"
print $array[1]; # Output: "these"
print $array[2]; # Output: "strings"
print $array[3]; # Output: "out"
print $array[4]; # Output: "for"
print $array[5]; # Output: "me"
print $array[6]; # Output: "", and a warning

print $array[-1]; # Output: "me"
print $array[-2]; # Output: "for"
print $array[-3]; # Output: "out"
print $array[-4]; # Output: "strings"
print $array[-5]; # Output: "these"
print $array[-6]; # Output: "print"
print $array[-7]; # Output: "", and a warning

print "This array has ".(scalar @array)."elements"; # Output: "This array has 6 elements"
print "The last populated index is ".$#array; # Output: "The last populated index is 5"

print "Hello $strings"; # Output: "Hello world"
print "@array"; # Output: "print these strings out for me"

print "Hello \$string"; # "Hello $string"
print 'Hello $string';  # "Hello $string"
print "\@array";        # "@array"
print '@array';         # "@array"
```

## Hash
```perl
my %scientists = (
    "Newton"    => "Isaac",
    "Einstein"  => "Albert",
    "Darwin"    => "Charles",
);

print $scientists{"Newton"};    # "Isaac"
print $scientists{"Einstein"};  # "Albert"
print $scientists{"Darwin"};    # "Charles"
print $scientists{Dyson};       # "", and a warning

my @scientists = %scientists;
print "@scientists"; # "Einstein Albert Darwin Charles Newton Isaac"

my $data = "orange";
my @data = ("purple");
my %data = ( "0" => "blue" );

print $data;        # "orange"
print $data[0];     # "purple"
print $data["0"];   # "purple"
print $data{0};     # "blue"
print $data{"0"};   # "blue"
```
- `=>` # Fat comma

```perl
my @array = ("Alpha", "Beta", "Goo");
my $scalar = "-X-";
print @array;               # "AlphaBetaGoo"
print $scalar, @array, 98;  # "-X-AlphaBetaGoo98"
```

```perl
my @outer = ("Sun", "Mercury", "Venus", undef, "Mars");
my @inner = ("Earth", "Moon");

$outer[3] = @inner;

print $outer[3]; # "2"
```
- `$outer[3]` # A scalar

```perl
my $colour      = "Indigo";
my $scalarRef   = \$color;

print $colour;          # "Indigo"
print $scalarRef;       # May be "IndigoSCALAR(0x564938f33d58)"
```

```perl
my @colours = ("Red", "Orange", "Yellow", "Green", "Blue");
my $arrayRef = \@colours;

print $colours[0];          # "Red"
print ${ $arrayRef }[0];    # "Red"
print $arrayRef->[0];       # "Red"

my %atomicWeights = ("Hydrogen" => 1.008, "Helium" => 4.003, "Manganese" => 54.94);
my $hashRef = \%atomicWeights;

print $atomicWeights{"Helium"}; # "4.003"
print ${ $hashRef }{"Helium"};  # "4.003"
print $hashRef->{"Helium"};     # "4.003"
```

## Declare data structure
```perl
my %owner1 = (
    "name" => "Santa Claus",
    "DOB"  => "1882-12-25",
);

my %owner2 = (
    "name" => "Mickey Mouse",
    "DOB"  => "1928-11-18",
);

my @owners = ( \%owner1, \%owner2 );

my %account = (
    "number" => "12345678",
    "opened" => "2000-01-01",
    "owners" => \@owners,
);
```
```perl
my %account = (
    "number" => "31415926",
    "opened" => "3000-01-01",
    "owners" => [
        {
            "name" => "Philip Fry",
            "DOB"  => "1974-08-06",
        },
        {
            "name" => "Hubert Farnasworth",
            "DOB"  => "2841-04-09",
        },
    ],
);
```

## Get information from data structure
```perl
my @owners = @{ $account{"owners"} };
my %owner1 = %{ $owners[0] };
my %owner2 = %{ $owners[1] };
print "Account #", $account{"number"}, "\n";
print "Opened on ", $account{"opened"}, "\n";
print "Joint owners:\n";
print "\t", $owner1{"name"}, " (born ", $owner1{DOB}, ")\n";
print "\t", $owner2{"name"}, " (born ", $owner2{"DOB"}, ")\n";
```
```perl
my $ownersRef = $account{"owners"};
my $owner1Ref = $ownersRef->[0];
my $owner2Ref = $ownersRef->[1];
print "Account #", $account{"number"}, "\n";
print "Opened on ", $account{"opened"}, "\n";
print "Joint owners:\n";
print "\t", $owner1Ref->{"name"}, " (born ", $owner1Ref->{"DOB"}, ")\n";
print "\t", $owner2Ref->{"name"}, " (born ", $owner2Ref->{"DOB"}, ")\n";
```
```perl
my @array1 = (1, 2, 3, 4, 5);
print @array1; # "12345"

my @array2 = [1, 2, 3, 4, 5];
print @array2; # e.g. "ARRAY(0x55b3e54c6168)"

my $array3Ref = [1, 2, 3, 4, 5];
print $array3Ref;       # e.g. "ARRAY(0x55919263dec0)"
print @{ $array3Ref };  # "12345"
print @$array3Ref;      # "12345"
```

# Conditional branch
- `if`...`elsif`...`else`
```perl
my $word = "antidisestablishmentarianism";
my $strlen = length $word;

if($strlen >= 15) {
    print "'", $word, "' is a very long word";
} elsif(10 <+ $strlen && $strlen < 15) {
    print "'", $word, "' is a medium-length word";
} else {
    print "'", $word, "' is a short word";
}
   
# Short "statement `if` condition"
print "'", $word, "' is actually enormous" if $strlen >= 20;
```
- `unless`...`else`...
```perl
# Don't use the long `unless` statement
my $temperature = 20;

unless($temperature > 30) {
    print $temperature, " degrees Celsius is not very hot";
} else {
    print $temperature, " degrees Celsius is actually pretty hot";
}

# Use the short statement because it makes code readable:
print "Oh no it's too cold" unless $temperature > 15;
```

# Ternary operator
```perl
# Write the complete singular and plural spellings
# to make the code searchable
my $gain = 48;
print "You gained ", $gain, " ", ($gain == 1 ? "experience point" : "experience points"), "!";

# The ternary can be nested
my $eggs = 5;
print "You have ", $eggs == 0 ? "no eggs" :
                   $eggs == 1 ? "an egg"  :
                   "some eggs";
```

# Loop
## While
```perl
my $i = 0;
while($i < scalar @array) {
    print $i, ": ", $array[$i];
    $i++;
}
```
## Until
```perl
my $i = 0;
until($i >= scalar @array) {
    print $i, ": ", $array[$i];
    $i++;
}
```

## Do
```perl
my $i = 0;
do {
    print 4i, ": ", $array[$i];
    $i++;
} while ($i < scalar @array);
```
```perl
my $i = 0;
do {
    print $i, ": ", $array[$i];
    $i++;
} until ($i >= scalar @array);
```

# For
```perl
# The kind of for loop is obsolete:
for(my $i = 0; $i < scalar @array; $i++) {
    print $i, ": ", $array[$i];
}

# The Foreach keyword and the For keyword are equivalent:
foreach my $staring ( @array ) {
    print $string;
}

foreach my $i ( 0 .. $#array ) {
    print $i, ": ", $array[$i];
}

foreach my $key (keys %scientists) {
    print $key, ": ", $scientists{$key};
}

foreach my $key (sort keys %scientists) {
    print $key, ": ", $scientists{$key};
}

# The default iterator is "$_"
foreach ( @array ) {
    print $_;
}

# Put one statement only into the loop
print $_ foreach @array;
```

# Cycle control
```perl
# Find prime numbers less than one hundred
# The `next` same as `continue` of other programming language
CANDIDATE: for my $candidate ( 2 .. 100) {
    for my $divisor ( 2 .. sqrt $candidate ) {
        next CANDIDATE if $candidate % $divisor == 0;
    }
    print $candidate." is prime\n";
}
```

# Array function
```perl
my @stack = ("Fred", "Eileen", "Denise", "Charlie");
print @stack; # "FredEileenDeniseCharlie"

print pop @stack; # "Charlie"
print @stack;     # "FredEileenDenise"

push @stack, "Bob", "Alice";
print @stack; # "FredEileenDeniseBobAlice"

print shift @stack; # "Fred"
print @stack;       # "EileenDeniseBobAlice"

unshift @stack, "Hank", "Grace";
print @stack; # "HankGraceEileenDeniseBobAlice"

print splice(@stack, 1, 4, "<<<", ">>>"); # "GraceEileenDeniseBob"
print @stack;                             # "Hank<<<>>>Alice"
```

# Join function
```perl
my @elements = ("Antimony", "Arsenic", "Alumium", "Selenium");
print @elements;             # "AntimonyArsenicAlumiumSelenium"
print "@elements";           # "Antimony Arisenic Alumium Selenium"
print join(", ", @elements); # "Antimony, Arsenic, Aluminum, Selenium"
```

# Reverse function
```perl
print reverse("Hello", "World");        # "WorldHello"
print reverse("HelloWorld");            # "HelloWorld"
print scalar reverse("HelloWorld");     # "dlroWolleH"
print scalar reverse("Hello", "World"); # "dlroWolleH"
```

# Map function
```perl
my @capitals = ("Baton Rouge", "Indianapolis", "Columbus", "Montgomery", "Helena", "Denver", "Boise");
# "BATON ROUGE, INDIANAPOLIS, COLUMBUS, MONTGOMERY, HELENA, DENVER, BOISE"
print join ", ", map {uc $_ } @capitals;

# The Grep function
print join ", ", grep { length $_ == 6 } @capitals; # "Helena, Denver"

print scalar grep { $_ eq "Columbus" } @capitals; # "1"
```

# Sort function
```perl
my @elevations = (19, 1, 2, 100, 3, 98, 100, 1056);

print join ", ", sort @elevations; # "1, 100, 100, 1056, 19, 2, 3, 98"

# The `cmp` operator is for strings
print join ", ", sort { $a cmp $b } @elevations; # "1, 100, 100, 1056, 19, 2, 3, 98"

# The `<=>` (Spaceship) operator is for numeric values
print join ", ", sort { $a <=> $b } @elevations; # "1, 2, 3, 19, 98, 100, 100, 1056"

sub comparator {
    # lots of code...
    # return -1, 0 or 1
}

print join ", ", sort comparator @elevations;
```

# Subroutine
```perl
sub hyphenate {
    
    my $word = shift @_;

    $word = join "-", map { substr $word, $_, 1 } (0 .. (length $word) - 1);
    return $word;
}

print hyphenate("exterminate"); # "e-x-t-e-r-m-i-n-a-t-e"
```

```perl
my $x = 7;

sub reassign {
    $_[0] = 42;
}

reassign($x);
print $x; # "42"
```

```perl
# Call the "left_pad" subroutine
print left_pad("hello", 10, "+"); # "+++++hello"
```
```perl
sub left_pad {
    my $oldString = $_[0];
    my $width     = $_[1];
    my $padChar   = $_[2];
    my $newString = ($padChar x ($width - length $oldString)) . $oldString;
    return $newString;
}
print left_pad("hello", 10, "+"); # "+++++hello"
```
```perl
sub left_pad {
    my $oldString = shift @_;
    my $width     = shift @_;
    my $padChar   = shift @_;
    my $newString = ($padChar x ($width - length $oldString)) . $oldString;
    return $newString;
}
print left_pad("hello", 10, "+"); # "+++++hello"
```
```perl
sub left_pad {
    my $oldString = shift;
    my $width     = shift;
    my $padChar   = shift;
    my $newString = ($padChar x ($width - length $oldString)) . $oldString;
    return $newString;
}
print left_pad("hello", 10, "+"); # "+++++hello"
```
```perl
sub left_pad {
    my ($oldString, $width, $padChar) = @_;
    my $newString = ($padChar x ($width - length $oldString)) . $oldString;
    return $newString;
}
print left_pad("hello", 10, "+"); # "+++++hello"
```
```perl
# Call a subroutine with a large number of parameters
print left_pad("oldString" => "pod", "width" => 10, "padChar" => "+");
```
```perl
sub left_pad {
    my %args = @_;
    my $newString = ($args{"padChar"} x ($args{"width"} - length $args{"oldString"})) . $args{"oldString"};
    return $newString;
}
print left_pad("oldString" => "pod", "width" => 10, "padChar" => "+"); # "+++++++pod"
```

# Return value
```perl
sub contextualSubroutine {
    return ("Everest", "K2", "Etna") if wantarray;
    
    return 3;
}

my @array = contextualSubroutine();
print @array; # "EverestK2Etna"

my $scalar = contextualSubroutine();
print $scalar; # "3"
```

# System call
```perl
my $rc = system "perl", "anotherscript.pl", "foo", "bar", "baz";
$rc >>= 8;
print $rc; # "37"
```
```perl
my $text = `perl anotherscript.pl foo bar baz`;
print $text; # "foobarbaz"
```
```perl
# The anotherscript.pl
use strict;
use warnings;

print @ARGV;
exit 37;
```

# File and file handle
```perl
my $f = "text.txt";
my $result = open my $fh, "<", $f;

if(!$result) {
    die "Couldn't open '".$f."' for reading because: ".$!;
}
```
```perl
# The common way of writing
open(my $fh, "<", $f) || die "Couldn't open '".$f."' for reading because: ".$!;
```
```perl
while(1) {
    my $line = readline $fh;
    last unless defined $line;
    # Deal with $line...
}
```
```perl
while(my $line = <$fh>) {
    # Deal with $line...
}
```
```perl
while(<$fh>) {
    # Deal with $_...
}
```
```perl
open(my $fh2, ">", $f) || die "Couldn't open '".$f."' for writing because: ".$!;
print $fh2 "The eagles have left the nest"
```
```perl
close $fh2;
close $fh;
```
```perl
# Read a line of user input
my $line = <STDIN>;
```
```perl
# Wait for the user to press enter
<STDIN>;
```

# File detection
```perl
# `-e` is exist; `-d` is directory; `-f` is file
# Search for "Perl file test" to get more information in web browser
print "what" unless -e "/usr/bin/perl";
```

# Regular expression
```perl
# Use the `=~ m//` operator to match
my $string = "Hello world";
if($string =~ m/(\w+)\s+(\w+)/) {
    print "success";
}

print $1; # "Hello"
print $2; # "world"
```
```perl
my $string = "colourless green ideas sleep furiously";
my @matches = $string =~ m/(\w+)\s+((\w+)\s+(\w+))\s+(\w+)\s+(\w+)/;

print join ", ", map { "'".$_."'" } @matches; # "'colourless', 'green ideas', 'green', 'ideas', 'furiously'"
```
```perl
# Use the `=~ s///` operator to replace
my $string = "Good moring world";
$string =~ s/world/Vietnam/;
print $string; # "Good moring Vietnam"
```
```perl
# Use the `=~ m//g` operator
my $string = "a tonne of feathers or a tonne of bricks";
while($string =~ m/(\w+)/g) {
    print "'".$1."'\n";
}

my @matches = $string =~ m/(\w+)/g;
print join ", ", map { "'".$_."'" } @matches;

# Use the `=~ s///g` operator
# The `g` is global
$string =~ s/[aeiou]/r/;
print $string; # "r tonne of feathers or a tonne of bricks"

$string =~ s/[aeiou]/r/;
print $string; # "r trnne of feathers or a tonne of bricks"

$string =~ s/[aeiou]/r/g;
print $string, "\n"; # "r trnnr rf frrthrrs rr r trnnr rf brrcks"
```
```perl
"Hellow world" =~ m/
    (\w+) # One or more word characters
    [ ]   # Single literal space, stored inside a character class
    world # Literal "world"
/x;
```

# Module and package
## Module
```perl
use strict;
use warnings;

sub zombify {
    my $word = shift @_;
    $word =~ s/[aeiou]/r/g;
    returen $word;
}

return 1;
```
```shell
# Put the directory to $PERL5LIB
export PERL5LIB=$PERL5LIB:/foo/bar/baz
```
```perl
use strict;
use warnings;

require Demo::StringUtils;

print zombify("i want brains"); # "r wrnt brrrns"
```

# Package
```perl
use strict;
use warnings;

sub subroutine {
    print "universe";
}

package Food::Potatoes;

# No complicting:
sub subroutine {
    print "kingedward";
}

# The `::` is delimiter
subroutine();                 # "kingedward"
main::subroutine();           # "universe"
Food::Potatoes::subroutine(); # "kingedward"
```
- `vim /foo/bar/baz/Demo/StringUtils.pm`
```perl
use strict;
use warnings;

package Demo::StringUtils;

sub zombify {
    my $word = shift @_;
    $word =~ s/[aeiou]/r/g;
    return $word;
}

return 1;
```
- `vim main.pl`
```perl
use strict;
use warnings;

require Demo::StringUtils;

print Demo::StringUtils::zombify("i want brains") # "r wrnt brrrns"
```
# Object oriented
```perl
use strict;
use warnings;

package Animal;

sub eat {
    my $self = shift @_;
    
    foreach my $food ( @_ ) {
        if($self->can_eat($food)) {
            print "Eating ", $food;
        } else {
            print "Can't eat ", $food;
        }
    }
}

sub can_eat {
    return 1;
}

return 1;
```
```perl
require Animal;
my $animal = {
    "legs"   => 4,
    "colour" => "brown",
};
print ref $animal;
bless $animal, "Animal";
print ref $animal;
```
```perl
print "Animal has ", $animal->{"legs"}, " leg(s)";
```
```perl
# The last sentence is equivalent to `Animal::eat($animal, "insects", "curry", "eucalyptus")`
$animal->eat("insects", "curry", "eucalyptus");
```

# Build function
```perl
use strict;
use warnings;

package Animal;

sub new {
    my $class = shift @_;
    return bless { "legs" => 4, "colour" => "brown" }, $class;
}

# ...etc.
```
```perl
my $animal = Animal->new();
```

# Integrate
```perl
use strict;
use warnings;

paackage Koala;

# Integrate from Animal
use parent ("Animal");

# Reload a method
sub can_eat {
    my $self = shift @_;
    my $food = shift @_;
    return $food eq "eucalyptus";
}

return 1;
```
# Example
```perl
use strict;
use warnings;

require Koala;

my $koala = Koala->new();

$koala->eat("insects", "curry", "eucalyptus");
```

# BEGIN block
```perl
use strict;
use warnings;

print "This gets printed second";

BEGIN {
    print "This gets printed first";
}

print "This gets printed third";
```
```perl
use strict;
use warnings;

print "This 'print' statement gets parsed successfully but never executed";

BEGIN {
    print "This gets printed first";
}

print "This, also, is parsed successfully but never executed";

...because e4h8v3oitv8h408gch3o84c3 there is a huge parsing error down here.
```
```perl
if(0) {
    BEGIN {
        print "This will definitely get printed";
    }
    print "Even though this won't";
}
```
```perl
BEGIN {
    if($condition) {
        # etc.
    }
}
```
# The use function
```perl
use Caterpillar ("crawl" "pupuate");
use Caterpillar ();
use Caterpillar;
```
```perl
BEGIN {
    require Caterpillar;
    Caterpillar->import("crawl", "pupate");
}
BEGIN {
    require Caterpillar;
}
BEGIN {
    require Caterpillar;
    Caterpillar->import();
}
```

# Exporter
```perl
use strict;
use warnings;

package Caterpillar;

# Integrate from Exporter
use parent ("Exporter");

sub crawl  { print "inch inch";   }
sub eat    { print "chomp chomp"; }
sub pupate {print "bloop bloop"; }

our @EXPORT_OK = ("crawl", "eat");

return 1;
```
```perl
use strict;
use Caterpillar ("crawl");

crawl(); # "inch inch"
```
```perl
use strict;
use warnings;
use Caterpillar ();

Caterpillar::crawl();
Caterpillar::eat();
Caterpillar::pupate();
```
# @EXPORT
```perl
use strict;
use warnings;

package Caterpillar;

# Integrate from Exporter
use parent ("Exporter");

sub crawl   { print "inch inch"; }
sub eat     { print "chomp chomp"; }
sub pupate  { print "bloop bloop"; }

our @EXPORT = ("crawl", "eat", "pupate");

return 1;
```
```perl
use strict;
use warnings;
use Caterpillar;

crawl();    # "inch inch"
eat();      # "chomp chomp"
pupate();   # "bloop bloop"
```
# Miscellaneous
```perl
use Account qw{create open close suspend delete};
```
```perl
print foreatch @array;
```
```perl
foreach ( @array ) {
    next unless defined;
}
```
