var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
function disableScroll(disabled) {
  const element = document.querySelector(".chat__body");
  if (disabled) {
    element.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    element.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    element.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    element.addEventListener("keydown", preventDefaultForScrollKeys, false);

  } else {
    element.removeEventListener("DOMMouseScroll", preventDefault, false); // older FF
    element.removeEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    element.removeEventListener("touchmove", preventDefault, wheelOpt); // mobile
    element.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
}

export default disableScroll;
