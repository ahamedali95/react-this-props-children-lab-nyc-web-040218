import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedDecorations';

const m1 = "Hey, you should totally come to this awesome party I'm throwing!";
ReactDOM.render(
  <div>
   <Invitation>{m1}</Invitation>
   <ThemedParty theme="heaven">
     <p>A decoration</p>
     <p>Some other decoration</p>
     <p>A last decoration</p>
   </ThemedParty>
 </div>,
  document.getElementById('global')
);
