const countCarousel = ($counter, initial, max) => {
  let now = initial;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(now);
    console.log(now);

    // 목표수치에 도달하면 정지
    if (now >= max) {
      clearInterval(handle);
    }

    // 증가되는 값이 계속하여 작아짐
    const step = (max - initial) / 50;

    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now += step;
  }, 50);
};

export default countCarousel;
