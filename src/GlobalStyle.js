import { createGlobalStyle } from 'styled-components';
import Pixelfont from 'asset/font/Pixelfont.woff';
import background from 'asset/background.jpg';
const GlobalStyle = createGlobalStyle`

@font-face {
      font-family: "pixelfont" ;
      src: url(${Pixelfont}) format("truetype");
      font-weight: normal;
    }


* {
  box-sizing: border-box;
}


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  font-family: "pixelfont";
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;


}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input{
  font-family: 'Pixelfont';
  line-height: 1;
}

textarea {
  font-family: 'Pixelfont'
}

button{
  font-family: 'Pixelfont';
}

select {
  font-family: 'Pixelfont';
}
p {
  font-family: 'Pixelfont';
}

`;

export default GlobalStyle;
