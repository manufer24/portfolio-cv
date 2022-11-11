const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const isOnLine = () => {
    const $online = d.querySelector(".online"),
      $offline = d.querySelector(".offline");

    if (n.onLine) {
      $online.classList.remove("none");
      $offline.classList.add("none");
    } else {
      $online.classList.add("none");
      $offline.classList.remove("none");
    }

    setTimeout(() => $online.classList.add("none"), 4000);
  };

  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
