const initialWrap = "M62.1,178.8V40.2c48.3,32.5,86.1,48.9,123.8,49c37.7,0,75-16.3,122.3-49v138.6c-48.8-32.7-86.9-49.2-124.6-49.3C145.9,129.4,108.8,145.9,62.1,178.8z";
const openWrap = "M62.1,178.8V40.2c40.2,0.9,81.2,1.4,122.9,1.4c41.9,0,82.9-0.5,123.2-1.4v138.6c-40.6,0.5-81.7,0.8-123.2,0.8C143.6,179.6,102.6,179.3,62.1,178.8z";

const candyAnimation = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 1000,
  autoplay: false
});

candyAnimation
  .add({
    targets: ".candy-wrap",
    d: [
      {value: openWrap}
    ]
  })
  .add({
    targets: '.line',
    opacity: 0
  }, "-= 1000")
  .add({
    targets: '.candy-line',
    stroke: '#FF45AA'
  }, "-= 1000")
  .add({
    targets: '.light-line',
    fill: '#FFC8E6'
  },"-= 1000")
  .add({
    targets: '.candy',
    fill: '#FF53B0',
    stroke: '#FF279C'
  },  "-= 1000")
  .add({
    targets: '.candy-wrap',
    translateX: -1000
  })
  .add({
    targets: '.candy, .light-line, .candy-line',
    translateX: -80
  })
  .add({
    targets: '.logo-name',
    translateX: 140,
    translateY: 280
  },  "-= 1000");

document.querySelector('.play').onclick = candyAnimation.play;
document.querySelector('.restart').onclick = candyAnimation.restart;
document.querySelector('.pause').onclick = candyAnimation.pause;

// Wrap every letter in a span
var textWrapper = document.querySelector('.logo-name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

candyAnimation.add({
    targets: '.logo-name .letter',
    scale: [0, 1],
    duration: 1000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })
  .add({
    targets: '.subtitle',
    translateX: 100
  }, "-= 1000")
  .add({
    targets: '.subtitle',
    opacity: 1
  });

anime({
  targets: '.heart',
  scale: 1.2,
  translateX: -9.4,
  translateY: -6.9,
  direction: 'alternate',
  easing: 'easeInExpo',
  loop: true,
});

