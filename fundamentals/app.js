const el = d3
  .select('body')
  .append('p')
  // .attr('class', 'foo')
  // .attr('class', 'bar')
  .classed('foo', true)
  .classed('bar', true)
  .text('Hello World')
  .style('color', 'blue');

console.log(el);
