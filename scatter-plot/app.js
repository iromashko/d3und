async function draw() {
  const dataset = await d3.json('data.json');

  let dimensions = {
    width: 800,
    height: 800,
  };

  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', dimensions.width)
    .attr('height', dimensions.height);
}

console.log(`Hello`)
draw();
