export default function circleAnimation() {
  const ovals = [];
  for (let i = 0; i < 36; i++) {
    let oval = {};
    oval.w = `${12.5 + i}vw`;
    oval.h = `${4 + i / 2}vw`;
    oval.m = `${i * 6}px 0px 0px ${i * 4}px`;
    oval.a = `appearAnimation ${i * 0.3}s forwards`;

    if (i % 2 && i > 21) {
      oval.a = `appearAnimationUp ${i * 0.3}s forwards`;
    }
    if (i % 3 && i > 25) {
      oval.a = `appearAnimationMid ${i * 0.3}s forwards`;
    }
    if (i > 22) {
      oval.w = `${15 + i * 0.8}vw`;
      oval.h = `${4 + i / 3}vw`;
    }

    ovals.push(oval);
  }
  return ovals;
}
