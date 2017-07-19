var CLRF = '\r\n';

export default function parseResponseHeaders(headersString) {
  var headers = Object.create(null);

  if (!headersString) {
    return headers;
  }

  var headerPairs = headersString.split(CLRF);
  for (var i = 0; i < headerPairs.length; i++) {
    var header = headerPairs[i];
    var j = 0;
    var foundSep = false;

    for (; j < header.length; j++) {
      if (header.charCodeAt(j) === 58 /* ':' */) {
          foundSep = true;
          break;
        }
    }

    if (foundSep === false) {
      continue;
    }

    var field = header.substring(0, j).trim();
    var value = header.substring(j + 1, header.length).trim();

    if (value) {
      headers[field] = value;
    }
  }

  return headers;
}