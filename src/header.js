const header = () => {
  let currentYear = 2010; // Initial year

  const floatingText = document.getElementById("floating-text");
  const changeTextButton = document.getElementById("change-text-button");

  // Set initial text
  floatingText.textContent = currentYear;

  changeTextButton.addEventListener("click", () => {
    if (currentYear < 2021) {
      currentYear += 1;
      floatingText.textContent = currentYear;
      if (currentYear === 2021) {
        changeTextButton.disabled = true;
        changeTextButton.style.backgroundColor = "#808080";
        changeTextButton.style.cursor = "not-allowed";
      }
    }
  });
};

export default header;
