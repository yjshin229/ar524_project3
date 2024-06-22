const countCarousel = ($counter, initial, max) => {
  let now = initial;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(now);

    if (now >= max) {
      clearInterval(handle);
    }

    const step = (max - initial) / 50;

    now += step;
  }, 50);
};

export default countCarousel;
