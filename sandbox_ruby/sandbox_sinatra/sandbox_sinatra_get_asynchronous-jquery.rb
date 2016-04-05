require 'sinatra'

get '/info' do
  'INFO'
end

get '/' do
    "
  <!DOCTYPE html>
  <html>
  <head>
  <!--script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script--> <!-- version 1.x -->
  <script src='//code.jquery.com/jquery-1.11.0.min.js'></script>
  <script src='//code.jquery.com/jquery-migrate-1.2.1.min.js'></script> <!-- version 2.x -->
  <script>
  var info = function(result){
    $('#div1').html(result);
  };
  
  $(document).ready(function(){
    $('button').click(function(){
      $.ajax({
        url:'info',
        success: info
      });
    });
  });
  </script>
  </head>
  <body>

  <div id='div1'><h2>Let jQuery AJAX Change This Text</h2></div>
  <button>Get External Content</button>

  </body>
  </html>
  "
end

get '/callback' do
    "
  <!DOCTYPE html>
  <html>
  <head>
  <!--script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script--> <!-- version 1.x -->
  <script src='//code.jquery.com/jquery-1.11.0.min.js'></script>
  <script src='//code.jquery.com/jquery-migrate-1.2.1.min.js'></script> <!-- version 2.x -->
  <script>
  
  var a_callback = function(){
    alert('I was called back asynchronously');
  };
  
  ASYNCHRONOUS = true
  
  var getResource = function(path, synchronous_asynchronous, callback) {
    var xmlhttp = new XMLHttpRequest();

    if (synchronous_asynchronous == ASYNCHRONOUS) {
      xmlhttp.onreadystatechange=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          callback.call(this, xmlhttp.responseText);
        }
      }
      xmlhttp.open('GET', path, true, callback);
      xmlhttp.send();    
    } else {
      xmlhttp.open('GET', path, false);
      xmlhttp.send();    
      return xmlhttp.responseText;
    }
  };  
  
  $(document).ready(function(){
    $('button').click(function(){
      // -----
      // getResource('/info', ASYNCHRONOUS, a_callback)
      // -----      
      //$.ajax({ 
      //  type: 'GET', 
      //  url: 'info', 
      //}).done(a_callback)
      // -----
      $.ajax({ 
        type: 'GET', 
        url: 'info',
        success: a_callback
      })     
    });
  });
  
  </script>
  </head>
  <body>

  <button>Get Asynchronous</button>

  </body>
  </html>
  "
end





