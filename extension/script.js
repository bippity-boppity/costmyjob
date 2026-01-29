document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const size = parseFloat(document.getElementById("size").value) || 0;
  const quality = document.getElementById("quality").value;
  const bedroom = document.getElementById("bedroom").checked;
  const bathroom = document.getElementById("bathroom").checked;
  const kitchen = document.getElementById("kitchen").checked;

  let base = 1500 * size; // cost per m²

  // Quality multiplier
  if (quality === "budget") base *= 0.85;
  if (quality === "luxury") base *= 1.6;

  // Extras
  if (bedroom) base += 5000;
  if (bathroom) base += 7000;
  if (kitchen) base += 6000;

  const min = Math.round(base * 0.9);
  const max = Math.round(base * 1.15);

  document.getElementById("result").innerText =
    `Estimated cost: £${min.toLocaleString()} – £${max.toLocaleString()}`;
});
