require('./css/background_lines.css');
require('./css/logo_lines.css');
require('./css/logo_rythm.css');

module.exports =  function(){
  return {
    pixel: 15,
    offset: { x: -1, y: -1 },
    mutation: 25,
    counter: {x: 0, y: 0},
    color: [255, 255, 255, 1],
    structure: {
      config: {
        depth: 5,
        branches: 2
      },
      data: [{
        value: {
          canDivide: true,
          coords: {x: 170, y:15},
          dimensions: {width: 300, height: 600},
          color: 'rgba(255,255,255,1)',
        }
      }]
    }
  }
}