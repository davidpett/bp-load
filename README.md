#BP Load [![Build Status](https://travis-ci.org/davidpett/bp-load.svg?branch=master)](https://travis-ci.org/davidpett/bp-load)

a responsive breakpoint loader - WIP

view demo here: http://davidpett.github.io/bp-load/

Will only load the CSS file when it is needed, breaks apart the SASS files into the correct CSS output, requires all SASS to be written using mixins, example:
```.foo {
  @include bp('base') {
    background-color: #ff0000;
  }
}```

The 'base.css' file will have ```.foo {
  background-color: #ffcc00;
}```
