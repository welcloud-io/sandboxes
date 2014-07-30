// STACKOVERFLOW EXAMPLE FOR AJAX CALL (3 WAYS) with jasmine (1.3)

describe('Ajax Fake', function() {

  it("should make an AJAX request to the correct URL", function() {
      spyOn($, "ajax");
      getProduct(123);
      expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/products/123");
  });

  function getProduct(id) {
      $.ajax({
          type: "GET",
          url: "/products/" + id,
      });
  }

})

describe('Ajax callback Fake', function() {
  
  it("should execute the callback function on success", function () {
      spyOn($, "ajax").andCallFake(function(options) {
          options.success();
      });
      var callback = jasmine.createSpy();
      getProduct(123, callback);
      expect(callback).toHaveBeenCalled();
  });

  function getProduct(id, callback) {
      $.ajax({
          type: "GET",
          url: "/products/" + id,
          success: callback
      });
  }

})

ASYNCHRONOUS = true
var requeteOK = function(xmlhttp) {
  return (xmlhttp.readyState==4 && xmlhttp.status==200)
}

var getResource = function(path, synchronous_asynchronous, callback) {
  var xmlhttp = new XMLHttpRequest();

  if (synchronous_asynchronous == ASYNCHRONOUS) {    
    xmlhttp.onreadystatechange=function()
    { 
      if (requeteOK(xmlhttp))//(xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        callback.call(this, xmlhttp.responseText);
      }
    }
    xmlhttp.open("GET", path, true, callback);
    xmlhttp.send();    
  } else {
    xmlhttp.open("GET", path, false);
    xmlhttp.send();    
    return xmlhttp.responseText;
  }
};

describe('Ajax Async', function() {
  
    beforeEach(function() {
      requeteOK = jasmine.createSpy().andReturn(true);
      callback = jasmine.createSpy();
    });  

  it("should make a real AJAX request", function () {
      // ONLY WORKS IF A SERVER IS RUNNING (DOES NOT WORK YET)
      //~ var callback = jasmine.createSpy(); 
      //~ getProduct(123, callback);
      //~ waitsFor(function() {
          //~ return callback.callCount > 0;
      //~ });
      //~ runs(function() {
      //~ expect(callback).toHaveBeenCalled();
      //~ });
      getResource('info', ASYNCHRONOUS, callback)
      expect(callback).toHaveBeenCalled();
  });

  function getProduct(id, callback) {
      $.ajax({
          type: "GET",
          url: "http://localhost:4567/info",
          success: callback
      });
  }
  
})