const lubricantRecommendations = {
  textile: {
    gear: {
      overheating: { type: "High-load synthetic gear oil", category: "Gear Oils", why: "Textile gearboxes often run continuously at elevated temperatures. A synthetic EP gear oil improves oxidation stability and protects gears under long duty cycles." },
      wear: { type: "EP gear oil with anti-wear additives", category: "Gear Oils", why: "Recurring wear in loom and processing gear trains usually points to boundary lubrication. EP protection helps minimize scuffing and micropitting." },
      noise: { type: "Synthetic gear oil with film strength", category: "Gear Oils", why: "Noise in textile gear drives often increases when the lubricant film weakens. Higher film strength supports smoother meshing and quieter operation." }
    },
    hydraulic: {
      overheating: { type: "High VI hydraulic oil", category: "Hydraulic Oils", why: "Hydraulic power packs in textile mills benefit from a stable viscosity profile, helping reduce heat buildup and maintain response." },
      wear: { type: "Anti-wear hydraulic oil", category: "Hydraulic Oils", why: "Pump and valve wear is often reduced by choosing a clean, anti-wear hydraulic fluid matched to system pressure and operating temperature." },
      noise: { type: "Low-foam hydraulic oil", category: "Hydraulic Oils", why: "Foam and air entrainment can create chattering and noise in hydraulic systems. Low-foam oils improve smooth power transmission." }
    }
  },
  steel: {
    gear: {
      overheating: { type: "Premium synthetic EP gear oil", category: "Gear Oils", why: "Steel plants expose gears to high shock loads and heat. Synthetic EP formulations maintain film strength and resist breakdown in severe duty." },
      wear: { type: "Heavy-duty EP gear oil", category: "Gear Oils", why: "Heavy rolling and auxiliary drives require strong load-carrying capacity to reduce abrasive wear and downtime." },
      noise: { type: "Shock-resistant gear lubricant", category: "Specialty Lubricants", why: "Intermittent shock loading can cause noise and surface distress. A shock-resistant lubricant helps cushion meshing surfaces." }
    },
    hydraulic: {
      overheating: { type: "Fire-resistant or high-performance hydraulic fluid", category: "Hydraulic Oils", why: "High ambient heat and furnace-side operations demand hydraulic fluids with strong thermal stability and, where required, fire resistance." },
      wear: { type: "Anti-wear hydraulic oil with clean filtration support", category: "Hydraulic Oils", why: "Steel plant hydraulics suffer when contamination and wear combine. Clean anti-wear fluids paired with filtration improve component life." },
      noise: { type: "Air-release hydraulic oil", category: "Hydraulic Oils", why: "Noise in steel mill hydraulics often relates to entrained air or varnish. Fast air release helps stabilize performance." }
    },
    compressor: {
      overheating: { type: "Synthetic compressor oil", category: "Compressor Oils", why: "Synthetic compressor oils withstand high outlet temperatures and reduce carbon deposits in demanding compressed air systems." },
      wear: { type: "Long-life compressor lubricant", category: "Compressor Oils", why: "Compressor wear is reduced by using lubricants with strong oxidation resistance and deposit control for longer service intervals." },
      noise: { type: "Compressor oil with deposit control", category: "Compressor Oils", why: "Deposits and lubrication loss can increase compressor noise. Clean-running compressor oils support smoother operation." }
    }
  },
  automotive: {
    gear: {
      overheating: { type: "Synthetic gear oil for precision drives", category: "Gear Oils", why: "Automotive component plants rely on precise, repeatable gearbox performance. Synthetic gear oils manage temperature and efficiency." },
      wear: { type: "EP gear oil for machine tool gearboxes", category: "Gear Oils", why: "A high-quality EP gear oil protects loaded gears in machining and handling equipment across auto component operations." },
      noise: { type: "Low-friction gear oil", category: "Gear Oils", why: "Low-friction additives help reduce vibration and noise in gear systems used in repetitive production environments." }
    },
    metalworking: {
      overheating: { type: "Semi-synthetic metal working fluid", category: "Metal Working Fluids", why: "Heat control during cutting and grinding improves surface finish, tool life, and machining consistency." },
      wear: { type: "High-lubricity cutting fluid", category: "Metal Working Fluids", why: "Tool wear often falls when lubricity, cooling, and concentration control are improved together." },
      noise: { type: "Coolant with stable concentration management", category: "Metal Working Fluids", why: "Coolant instability can affect machining smoothness and noise. Proper fluid quality helps keep processes stable." }
    },
    hydraulic: {
      overheating: { type: "High VI anti-wear hydraulic oil", category: "Hydraulic Oils", why: "Presses, molding units, and hydraulic machinery benefit from stable viscosity and wear control across shift cycles." },
      wear: { type: "Premium anti-wear hydraulic fluid", category: "Hydraulic Oils", why: "Hydraulic pumps and valves in production equipment need anti-wear protection to maintain uptime and accuracy." },
      noise: { type: "Hydraulic oil with fast air release", category: "Hydraulic Oils", why: "Noise and sluggish response can be improved by reducing air entrainment and maintaining fluid cleanliness." }
    }
  },
  manufacturing: {
    gear: {
      overheating: { type: "Synthetic gear oil for continuous duty", category: "Gear Oils", why: "General manufacturing plants with mixed machinery gain longer lubricant life and lower friction at higher operating temperatures." },
      wear: { type: "EP industrial gear oil", category: "Gear Oils", why: "EP gear oils help protect reducers and drives from wear during start-stop cycles and fluctuating loads." },
      noise: { type: "Low-noise industrial gear lubricant", category: "Gear Oils", why: "Film strength and anti-wear chemistry help reduce noise caused by surface contact and lubricant thinning." }
    },
    hydraulic: {
      overheating: { type: "High VI hydraulic oil with oxidation resistance", category: "Hydraulic Oils", why: "Mixed-duty plants benefit from hydraulic oils that stay stable across seasonal temperature swings and long shift hours." },
      wear: { type: "Clean anti-wear hydraulic oil", category: "Hydraulic Oils", why: "Reliable hydraulic performance depends on viscosity fit, cleanliness, and anti-wear chemistry." },
      noise: { type: "Hydraulic oil with foam control", category: "Hydraulic Oils", why: "Foam control improves responsiveness and reduces noisy operation in power packs and hydraulic machinery." }
    },
    compressor: {
      overheating: { type: "Long-drain synthetic compressor oil", category: "Compressor Oils", why: "For plant air systems, synthetic compressor oils help control heat and keep internals cleaner for longer." },
      wear: { type: "Oxidation-resistant compressor oil", category: "Compressor Oils", why: "Reduced oxidation and deposit formation support compressor efficiency and help minimize wear." },
      noise: { type: "Compressor lubricant with anti-deposit performance", category: "Compressor Oils", why: "Clean compression stages and stable lubrication often reduce harsh running and noise." }
    }
  },
  plastics: {
    hydraulic: {
      overheating: { type: "High VI hydraulic oil for molding machines", category: "Hydraulic Oils", why: "Injection molding systems need thermal stability and quick response to maintain cycle consistency and part quality." },
      wear: { type: "Anti-wear hydraulic oil for servo systems", category: "Hydraulic Oils", why: "Hydraulic wear can affect mold repeatability. Premium anti-wear fluids help preserve equipment precision." },
      noise: { type: "Low-foam hydraulic fluid", category: "Hydraulic Oils", why: "Low-foam fluids reduce erratic response and pump noise in molding operations." }
    },
    compressor: {
      overheating: { type: "Synthetic compressor oil", category: "Compressor Oils", why: "Plastics plants rely on consistent compressed air. Synthetic compressor oils handle heat while resisting varnish formation." },
      wear: { type: "Long-life compressor oil", category: "Compressor Oils", why: "Lower deposit formation and dependable lubrication improve compressor service life." },
      noise: { type: "High-cleanliness compressor lubricant", category: "Compressor Oils", why: "Cleaner compressor internals and stable lubrication can reduce noise and performance drift." }
    },
    grease: {
      overheating: { type: "High-temperature bearing grease", category: "Greases", why: "Extrusion and molding support equipment can need greases that resist softening and maintain protection near heat sources." },
      wear: { type: "EP lithium complex grease", category: "Greases", why: "Loaded bearings and ancillary equipment benefit from grease with good mechanical stability and wear protection." },
      noise: { type: "Low-noise bearing grease", category: "Greases", why: "Bearing noise often improves when grease selection matches speed, load, and relubrication practice." }
    }
  }
};

function getRecommendation(industry, application, problem) {
  return lubricantRecommendations[industry]?.[application]?.[problem] || {
    type: "Application-specific industrial lubricant",
    category: "Technical Recommendation Required",
    why: "Your operating conditions may need a viscosity, additive package, or brand approval review. Our team can suggest the exact lubricant after a quick discussion."
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("finder-form");
  const result = document.getElementById("finder-result");
  if (!form || !result) return;
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const industry = data.get("industry");
    const application = data.get("application");
    const problem = data.get("problem");
    const recommendation = getRecommendation(industry, application, problem);
    
    const formatLabel = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
    const message = `*Lubricant Finder Inquiry* 🔍\n\nHello Lubricant Solutions, I used the online Lubricant Finder tool and would like to get an exact product/brand recommendation.\n\n🏭 *Industry:* ${formatLabel(industry)}\n⚙️ *Application:* ${formatLabel(application)}\n⚠️ *Problem:* ${formatLabel(problem)}\n\n💡 *Recommended Type:* ${recommendation.type}\n\nPlease share the recommended product grades and pricing.`;
    
    const widgetCard = form.closest(".finder-widget-card");
    
    result.innerHTML = `
      <h3>Recommended Lubrication Direction</h3>
      <p><strong>Recommended lubricant type:</strong> ${recommendation.type}</p>
      <p><strong>Suggested product category:</strong> ${recommendation.category}</p>
      <p><strong>Why this fits:</strong> ${recommendation.why}</p>
      <div class="pill-row"><span class="pill">${formatLabel(industry)}</span><span class="pill">${formatLabel(application)}</span><span class="pill">${formatLabel(problem)}</span></div>
      <div class="stack-actions">
        <a class="btn btn-primary" href="${buildWhatsAppLink(message)}" target="_blank" rel="noopener">Get Recommendation on WhatsApp</a>
        ${widgetCard ? `<button type="button" class="btn btn-ghost" id="finder-reset-btn">Find Another Lubricant</button>` : `<a class="btn btn-ghost" href="/contact.html">Request a Site Consultation</a>`}
      </div>
    `;
    
    if (widgetCard) {
      result.style.display = "block";
      widgetCard.classList.add("has-result");
      
      const resetBtn = document.getElementById("finder-reset-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          form.reset();
          widgetCard.classList.remove("has-result");
          result.style.display = "none";
        });
      }
    }
  });
});
