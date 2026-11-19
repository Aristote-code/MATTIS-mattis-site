// Local asset paths (copied from reference/mattis/assets into /public).
// Hash-prefixed filenames are kept as-is so they map 1:1 to the capture.
const IMG = "/images";
const VID = "/videos";

export const assets = {
  grain: `${IMG}/1dae10b6-rR6HYXBrMmX4cRpXfXUOvpvpB0.png`,

  // hero
  heroVideo: `${VID}/91bd8e31-YUc1UMqfu6cFqEbpKpI1dpKqoes.mp4`,
  heroBgVideo: `${VID}/20c46ead-Upkc3M9FymIbhcQFUfu8txagv8.mp4`,
  annaAvatar: `${IMG}/58fe4b14-dvRbwMeyo4vxcTj90QvjS6MdQ.avif`,

  // about (orange) — runner
  aboutRunner: `${IMG}/a2ee9050-eFCg3n7XxnLCImN4MelOsAGvIUY.avif`,

  // showreel
  showreel: `${IMG}/0b2d0529-ROGfhegDuACLsAjwXl6Yy1kaYzM.avif`,

  // works
  boxMode: `${IMG}/dd8ffccf-RFACYseyJUnIgKpC8Ji85GEz4.avif`,
  nomadStays: `${IMG}/73100a27-qtQPMLsOZSfMrr1H8paEqfCmqjQ.avif`,
  weRunBrand: `${IMG}/b41673ca-nr593SABZlC19HZOrgnV0sWc8A.avif`,

  // reputation
  reviewer: `${IMG}/33e981b7-zEI0hdyA7XwBgF3OgjoRGPVMk.avif`,

  // services phone screens
  service1: `${IMG}/fb56afed-V4ZkWaLPRZ6Dp0De8M0jUyQIc.avif`,
  service2: `${IMG}/11ac623b-R8DWarznw4xTxUguf9qS1vaU0A.avif`,
  service3: `${IMG}/318c972b-lcNzeG9RhgOhjPwtCyEu0UULtC0.avif`,
  service4: `${IMG}/ef8482fe-iKu3BZinxyUoaGwZRZSSbtwnugk.avif`,
  service5: `${IMG}/24eeb999-uUK7snanCm0W5wfsCQFrajzteoY.avif`,

  // numbers (orange) — Jennifer
  jennifer: `${IMG}/7b2435d0-wlJMtkRVckBTirLzGQd8qmCMDw.avif`,

  // pricing quote — Anna portrait
  annaPortrait: `${IMG}/5f4227b1-ncY5akdtmiquhkDxINCBcqKRm8.avif`,

  // testimonials — Sophie
  sophie: `${IMG}/b0c2360d-mORiocPNTtVLJZs2cAljPc1iMeE.avif`,

  // articles
  article1: `${IMG}/19eb4c1f-LPSVulPRLpcRP2J08Ln0raAcQ.avif`,
  article2: `${IMG}/66beabc8-kM932F9EcDwrzgr753VM8bb6pIg.avif`,
  article3: `${IMG}/8d6bd7ab-MF8lvEusopYl3xxox4RCKrziJ0c.avif`,
  authorAvatar: `${IMG}/471c2432-4eISosOoYjMJ3exo170tf63A0Z4.avif`,
} as const;
