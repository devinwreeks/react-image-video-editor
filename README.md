# React Image Editor


### Initial scope


The initial scope was video & image editor, however this was reduced drastically at the exponentially complex prospect.
https://www.youtube.com/watch?v=GsGPWSUmP8s - this video further explains the difficult involved in client-side video editing (even in wasm).



### Features

Image only (at this stage, and possibly forever). 

Can add an image, create layers, draw on those layers, add filter, etc

This project is merely proof of concept, for educational purposes
& should not be used in production.

Feel free to fork and build it better.

### Get Started

git clone this repo and you will find an example playground. 

The export component is MediaEditor, and it will accept optional props: height, width and ratio. 
These props set the canvas size and default to window width, and ratio of 1.5 with height calculated as window width * ratio;

Import into your component something like this:

`<MediaEditor height={100} width={100} ratio={1.4} />`

or

`<MediaEditor />`

which will fill the width of your window.

### Dependencies used: 

#### State management

Zustand 

#### Drag & Drop (for sorting layers)

React-dragula




