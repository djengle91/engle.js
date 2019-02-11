(function() {
  var getAsciiCodes = function() {
    var arr = [];
    'Engle'.split('').forEach(function(a, i) {
      arr[i] = a.charCodeAt(0);
    });
    return arr;
  }

  var engle = function(str) {
    return str ? str.toLowerCase() === 'engle' : 'Engle';
  };

  engle.reverse = function() {
    return 'Elgne';
  }

  engle.ascii = function() {
    return getAsciiCodes().join(' ');
  }

  engle.binary = function() {
    var s = '';
    getAsciiCodes().forEach(function(n) {
      s += (n.toString(2));
    });
    return s;
  }

  engle.octal = function() {
    var s = '';
    getAsciiCodes().forEach(function(n) {
      s += (n.toString(8));
    });
    return s;
  }

  engle.hex = function() {
    var s = '';
    getAsciiCodes().forEach(function(n) {
      s += (n.toString(16));
    });
    return s;
  }

  engle.list = function() {
    return [
      'Rodney',
      'Lisa',
      'Jaimie',
      'Daniel',
      'Eric',
      'Tori'
    ];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = engle;
  } else if (window) {
    window.engle = engle;
  }
}());