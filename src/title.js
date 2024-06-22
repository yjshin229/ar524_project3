const Title = () => {
  const enterWorldText = document.getElementById("enter-world");
  const titlePage = document.getElementById("title-page");

  enterWorldText.addEventListener("click", () => {
    titlePage.style.display = "none";
  });
};

export default Title;
