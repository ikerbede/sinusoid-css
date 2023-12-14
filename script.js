/** STEP 4: FLUID DYNAMIC SINUSOID */
const container = document.querySelector("ul");
const elements = document.querySelectorAll("li");

const updateMouseLocalCoordinates = (ev) => {
  const element = ev.currentTarget;
  const elementRect = element.getBoundingClientRect();
  const x = (ev.clientX - elementRect.left) / elementRect.width - 0.5; // -0.5 to 0.5
  container.style.setProperty("--pX", x);
};

const resetMouseLocalCoordinates = () => {
  container.style.setProperty("--pX", 0);
};

const iniFollowCursor = () => {
  elements.forEach((element) => {
    element.addEventListener("mousemove", updateMouseLocalCoordinates);
    element.addEventListener("mouseleave", resetMouseLocalCoordinates);
  });
};

iniFollowCursor();
