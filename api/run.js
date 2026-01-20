import { fetchBounties } from "../scrapers/bounties.js";
import { fetchTestnets } from "../scrapers/testnets.js";
import { fetchGigs } from "../scrapers/gigs.js";
import { score } from "../utils/scorer.js";
import { send } from "../utils/telegram.js";

export default async function handler(req, res) {

  try {

    const bounties = await fetchBounties();
    const testnets = await fetchTestnets();
    const gigs = await fetchGigs();

    let alerts = [];

    [...bounties, ...testnets, ...gigs].forEach(item => {
      const s = score(item);
      if (s >= 6) alerts.push({ ...item, s });
    });

    if (alerts.length === 0) {
      await send("⚠ No high-signal fast-money tasks found.");
      return res.json({ ok: true });
    }

    for (const a of alerts.slice(0,5)) {
      await send(
`🚨 FAST OPPORTUNITY

Score: ${a.s}
Title: ${a.title || a.name}
Reward: ${a.reward || "varies"}

ACT FAST ⚡`
      );
    }

    res.json({ ok: true });

  } catch (e) {
    await send("❌ Error: " + e.message);
    res.status(500).json({ fail: true });
  }
}
