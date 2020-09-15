const homeButtonColorSwitcher = () => {
  const [homeButton] = document.getElementsByClassName(
    "tk-main-heading__title"
  );
  const colors = ["red", "green", "yellow"];

  let colorIndex = 0;

  homeButton.onmouseenter = () => {
    homeButton.children[0].classList.add(colors[colorIndex]);
  };

  homeButton.onmouseleave = () => {
    homeButton.children[0].classList.remove(colors[colorIndex++]);
    if (colorIndex % 3 === 0) colorIndex = 0;
  };
}

const colourSwitching = false;
if (colourSwitching) homeButtonColorSwitcher();
