count++;
//console.log(' run: %s', count);
this.count++;
this['v' + this.count] = count;
this.print = function() {
  console.log('hello ' + this.count + 1);
};
this.getCount = function() {
  return count + 'ab';
};
