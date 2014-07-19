require 'sinatra'

get '/info' do
  "INFO"
end

get '/' do
    "
  <!DOCTYPE html>
  <html>
  <head>
  <script>
  function update(response) {
    document.getElementById('myDiv').innerHTML=response;
  }

  function loadXMLDoc(fct)
  {
    var xmlhttp=new XMLHttpRequest();

    xmlhttp.open('GET','info',true);
    xmlhttp.send();
    
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        fct.call(this, xmlhttp.responseText);
      }
    }  
  }
  </script>
  </head>
  <body>

  <div id='myDiv'><h2>Let AJAX change this text</h2></div>
  <button type='button' onclick='loadXMLDoc(update)'>Change Content</button>

  </body>
  </html>
  "
end