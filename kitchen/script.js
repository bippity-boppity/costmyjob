document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const size = document.getElementById("size").value;
  const quality = document.getElementById("quality").value;
  const appliances = document.getElementById("appliances").checked;
  const cabinets = document.getElementById("cabinets").checked;
  const plumbing = document.getElementById("plumbing").checked;

  let base = 6000;

  // Size multiplier
  if (size === "small") base *= 0.8;
  if (size === "large") base *= 1.5;

  // Quality multiplier
  if (quality === "budget") base *= 0.85;
  if (quality === "luxury") base *= 1.6;

  // Extras
  if (appliances) base += 1200;
  if (cabinets) base += 1500;
  if (plumbing) base += 800;

  const min = Math.round(base * 0.9);
  const max = Math.round(base * 1.15);

  document.getElementById("result").innerText =
    `Estimated cost: £${min.toLocaleString()} – £${max.toLocaleString()}`;
});
