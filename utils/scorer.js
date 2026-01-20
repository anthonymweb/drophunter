export function score(item) {
  let points = 0;

  if (item.reward) points += 4;
  if (item.deadline) points += 2;
  if (item.remote) points += 1;
  if (item.tags?.includes("bug")) points += 5;
  if (item.tags?.includes("testnet")) points += 3;

  return points;
}
