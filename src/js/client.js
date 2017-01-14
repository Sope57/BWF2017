import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout'

require('../sass/styles.sass');

const app = document.getElementById('app');

/*function resize(){
    if ($(window).width() < 1200) { 
      document.getElementById("main").style.backgroundImage="url(images/bg-mobil.jpg)";
  } else {
    document.getElementById("main").style.backgroundImage="url(images/bg-desktop.jpg)";
  }
}
resize();
$(window).on('resize', resize);*/

ReactDOM.render(<Layout/>, app);