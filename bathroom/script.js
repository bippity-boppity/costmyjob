document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.getElementById("size").value;
  const quality = document.getElementById("quality").value;
  const location = document.getElementById("location").value;

  const ufh = document.getElementById("ufh").checked;
  const walkin = document.getElementById("walkin").checked;

  let base = 4000;

  if (size === "small") base *= 0.8;
  if (size === "large") base *= 1.4;

  if (quality === "budget") base *= 0.85;
  if (quality === "luxury") base *= 1.6;

  if (location === "london") base *= 1.3;

  if (ufh) base += 500;
  if (walkin) base += 700;

  const min = Math.round(base * 0.9);
  const max = Math.round(base * 1.15);

  document.getElementById("result").innerText =
    `Estimated cost: £${min.toLocaleString()} – £${max.toLocaleString()}`;
});
