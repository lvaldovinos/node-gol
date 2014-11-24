node-gol
========
<p>Game of Life example using node, to install do the following:</p>
  <ol>
    <li><p>Install node. If you need to install it, <a href="https://gist.github.com/isaacs/579814">this</a> 
        can help you.</p></li>
    <li><p>Clone code, then <pre> cd node-gol </pre></p></li>
    <li><p>To run the code, you can do <pre>npm start</pre></p></li>
    <li><p>If you want to run the tests, you can do <pre>npm install</pre><pre>npm test</pre></p></li>
  </ol>
<h3>GoL Constructor</h3>
<h4>space</h4>
<p>Default to 32, but basically defines the space inside a universe object, total of spaces on universe would be spaces x spaces, example if space were 32, total spaces would be <strong>1024</strong></p>
<h4>cells</h4>
<p>Only option available now is <strong>auto</strong>, this would populate every space in a universe object with either a dead cell(0) or an alive cell(1)</p>
<h4>maxTicks</h4>
<p>Value is 10 now, but this basically tells node, when to finish creating new generations in Game of Life, 1st generation is based on the first feed. If you want you can put this value to -1, this would instruct GoL to create new generations without stoping at all.</p>
<h4>tickFrecuency</h4>
<p>Parameter to know how often new generations would be created. Value is 1 second now.</p>
<h4>output</h4>
<p>Parameter to format the output of the whole universe, only values are:
  <ul><li>pretty</li><li>print</li></ul></p>
