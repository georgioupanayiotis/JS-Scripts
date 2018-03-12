//Here is one way to URLIfy a string (replacing ‘ ‘ with ‘%20’)
function URLify(string) {
  return string.trim().replace(/\s/g, '%20');
}
