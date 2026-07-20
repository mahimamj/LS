const lubricantRecommendations = {
  textile_hosiery: {
    "Circular Knitting Machines": {
      "Fabric/Yarn Staining": { type: "Washable Needle/Knitting Oil (ISO VG 22/32)", category: "Specialty Lubricants", why: "Formulated with self-emulsifying surfactants that easily wash out of yarn and fabric during scouring, preventing permanent oil spots." },
      "Needle Wear": { type: "Anti-wear Needle/Sinker Lubricant", category: "Specialty Lubricants", why: "Specially formulated anti-wear additives protect high-speed needles and sinkers from friction and wear, extending mechanical life." },
      "Oil Carry-over/Dripping": { type: "Cohesive Anti-drip Knitting Oil", category: "Specialty Lubricants", why: "High-cohesion additives prevent oil misting and dripping on high-speed hosiery machinery." },
      "Excess Heat at High Speed": { type: "Low-Friction Synthetic Spindle/Needle Lubricant", category: "Specialty Lubricants", why: "Low coefficient of friction reduces heat buildup and power consumption under high-speed operation." },
      "Smoking/Oil Consumption": { type: "High-Flash Point Spindle Oil", category: "Specialty Lubricants", why: "Resists thermal evaporation and smoking under high operating temperatures." },
      "Machine Vibration/Noise": { type: "Viscous Spindle/Needle Lubricant", category: "Specialty Lubricants", why: "Cushions high-speed spindles and needles, dampening vibration and reducing machine noise." }
    },
    "Flat Knitting Machines": {
      "Fabric/Yarn Staining": { type: "Washable Needle Oil (ISO VG 22)", category: "Specialty Lubricants", why: "Self-emulsifying formula ensuring clean washout from flat-knitted panels during scouring." },
      "Needle Wear": { type: "Anti-wear Needle Lubricant", category: "Specialty Lubricants", why: "Protects complex needle beds and selectors from abrasive wear." },
      "Oil Carry-over/Dripping": { type: "Cohesive Needle Lubricant", category: "Specialty Lubricants", why: "Tackiness agents prevent oil from flying off or dripping onto the fabric bed." },
      "Excess Heat at High Speed": { type: "Low-Friction Synthetic Needle Oil", category: "Specialty Lubricants", why: "Minimizes drag in high-speed linear carriages, lowering motor heat." },
      "Smoking/Oil Consumption": { type: "Low-Volatility Needle Oil", category: "Specialty Lubricants", why: "Low evaporation prevents smoke generation on hot needles." },
      "Machine Vibration/Noise": { type: "Premium Shock-Dampening Needle Lubricant", category: "Specialty Lubricants", why: "Cushions linear carriage movements to reduce noise." }
    },
    "Spinning Frames": {
      "Fabric/Yarn Staining": { type: "Non-staining Spindle Oil (ISO VG 10/15)", category: "Specialty Lubricants", why: "Highly refined spindle oil that prevents yellowing or staining of cotton/synthetics." },
      "Needle Wear": { type: "High-Speed Anti-wear Spindle Oil", category: "Specialty Lubricants", why: "Protects high-speed spindle bolster bearings from boundary wear." },
      "Oil Carry-over/Dripping": { type: "Anti-mist Spindle Oil", category: "Specialty Lubricants", why: "Prevents oil misting and dripping onto yarn paths." },
      "Excess Heat at High Speed": { type: "Synthetic Spindle Lubricant (ISO VG 10)", category: "Specialty Lubricants", why: "Reduces internal fluid shear, cooling bolster bearings running at 15,000+ RPM." },
      "Smoking/Oil Consumption": { type: "Thermal-stable Spindle Oil", category: "Specialty Lubricants", why: "Resists thermal degradation and smoking under continuous high speeds." },
      "Machine Vibration/Noise": { type: "Dampening Spindle Lubricant", category: "Specialty Lubricants", why: "High bolster cushioning reduces high-frequency frame vibrations." }
    },
    "Weaving Looms": {
      "Fabric/Yarn Staining": { type: "Scourable Loom Gear Oil (ISO VG 150)", category: "Gear Oils", why: "Non-staining loom gear oil that easily washes out of woven fabric in scour." },
      "Needle Wear": { type: "EP Loom Gear Oil (ISO VG 150/220)", category: "Gear Oils", why: "Extreme-pressure (EP) protection preserves heavily loaded loom gears." },
      "Oil Carry-over/Dripping": { type: "Tacky Loom Gear Lubricant", category: "Gear Oils", why: "Prevents oil fling-off and dripping from open gears onto fabric." },
      "Excess Heat at High Speed": { type: "Synthetic PAO Gear Oil (ISO VG 220)", category: "Gear Oils", why: "Reduces friction drag in high-torque loom gearboxes, lowering heat." },
      "Smoking/Oil Consumption": { type: "High-stability Gear Oil", category: "Gear Oils", why: "Resists thermal oxidation and oil breakdown, minimizing top-ups." },
      "Machine Vibration/Noise": { type: "High-Film Strength Loom Gear Oil (ISO VG 320)", category: "Gear Oils", why: "Dampens gear vibrations and cushions gear tooth impacts." }
    },
    "Sizing Machines": {
      "Fabric/Yarn Staining": { type: "High-cleanliness Cylinder Lubricant", category: "Specialty Lubricants", why: "Prevents contamination of yarn during drying sizing cycles." },
      "Needle Wear": { type: "High-temp Bearings Lubricant", category: "Specialty Lubricants", why: "Protects dry-can bearings from thermal wear." },
      "Oil Carry-over/Dripping": { type: "Tacky Anti-drip Lubricant", category: "Specialty Lubricants", why: "Stops oil leakage near hot sizing cylinders." },
      "Excess Heat at High Speed": { type: "Synthetic Sizing Lubricant", category: "Specialty Lubricants", why: "Withstands high sizing drying heats without drying out." },
      "Smoking/Oil Consumption": { type: "Low-evaporation Sizing Fluid", category: "Specialty Lubricants", why: "High flash point base oils eliminate smoking on drying cylinders." },
      "Machine Vibration/Noise": { type: "Heavy-duty Sizing Gear Lubricant", category: "Specialty Lubricants", why: "Dampens squeals and vibrations in sizing roll drives." }
    },
    "Texturizing Machines": {
      "Fabric/Yarn Staining": { type: "Washable Texturizing Oil (ISO VG 15)", category: "Specialty Lubricants", why: "Easily washes off texturized yarn during scouring." },
      "Needle Wear": { type: "Anti-wear Texturizing Spindle Lubricant", category: "Specialty Lubricants", why: "Protects high-speed texturizing twist spindles." },
      "Oil Carry-over/Dripping": { type: "Anti-throw Texturizing Lubricant", category: "Specialty Lubricants", why: "Tacky formulation avoids oil fling off high-speed texturizing drums." },
      "Excess Heat at High Speed": { type: "Synthetic Texturizing Spindle Oil", category: "Specialty Lubricants", why: "Minimizes fluid shear at high RPM, keeping spindles cool." },
      "Smoking/Oil Consumption": { type: "Low-smoke Texturizing Fluid", category: "Specialty Lubricants", why: "Eliminates smoking in draw-texturizing heater zones." },
      "Machine Vibration/Noise": { type: "Shock-resistant Spindle Oil", category: "Specialty Lubricants", why: "Dampens vibrations in texturizing frame assemblies." }
    },
    "Winding Machines": {
      "Fabric/Yarn Staining": { type: "Clean Winder Oil (ISO VG 22)", category: "Specialty Lubricants", why: "Guarantees zero discoloration of wound cones." },
      "Needle Wear": { type: "Anti-wear Winder Bearings Lubricant", category: "Specialty Lubricants", why: "Protects winder drum bearings from frictional wear." },
      "Oil Carry-over/Dripping": { type: "Anti-drip Winder Oil", category: "Specialty Lubricants", why: "Prevents oil dripping onto active yarn packages." },
      "Excess Heat at High Speed": { type: "Synthetic Winder Lubricant", category: "Specialty Lubricants", why: "Withstands high speeds on automatic winders." },
      "Smoking/Oil Consumption": { type: "High-stability Winder Oil", category: "Specialty Lubricants", why: "Minimizes evaporation losses during continuous operations." },
      "Machine Vibration/Noise": { type: "Cushioning Winder Gear Oil", category: "Specialty Lubricants", why: "Dampens noise in automatic winder package drives." }
    }
  },
  bicycle: {
    "Chain & Sprocket Assembly": {
      "Chain Rust/Corrosion": { type: "Tacky Moisture-repellent Chain Lubricant", category: "Greases", why: "Creates a water-resistant film that stops chain corrosion under outdoor wet conditions." },
      "Bearing Noise/Wear": { type: "EP Chain Grease/Spray", category: "Greases", why: "Extremely sticky grease with EP protection to silence squeaking and protect sprocket teeth." },
      "Tool Wear in Stamping": { type: "Drawing/Stamping Fluid", category: "Metal Working Fluids", why: "High extreme-pressure chemistry protects tooling during plate/link stamping." },
      "Rust During Storage/Transit": { type: "Dewaxed Rust Preventive Oil", category: "Specialty Lubricants", why: "Displaces water and leaves a thin anti-rust film for chains in packaging." },
      "High Friction/Squeaking": { type: "Synthetic Friction-reducing Chain Lubricant", category: "Greases", why: "Significantly lowers friction and stops chain squeaking instantly." }
    },
    "Hub/Freewheel Bearings": {
      "Chain Rust/Corrosion": { type: "Water-resistant Bearing Grease", category: "Greases", why: "Prevents water entry into hub assemblies, stopping rust." },
      "Bearing Noise/Wear": { type: "Lithium Complex EP-2 Grease", category: "Greases", why: "Extreme-pressure additives protect ball bearings and cups from pitting." },
      "Tool Wear in Stamping": { type: "Cold Heading Lubricant", category: "Metal Working Fluids", why: "Extends tool life in cold forming bearing balls." },
      "Rust During Storage/Transit": { type: "Rust Preventive Bearing Grease", category: "Greases", why: "Protects bearings from oxidation during transit and warehouse storage." },
      "High Friction/Squeaking": { type: "Low-torque Ball Bearing Grease", category: "Greases", why: "Reduces rolling resistance and quietens dry squeaking hubs." }
    },
    "Tube Forming & Welding": {
      "Chain Rust/Corrosion": { type: "Water-soluble Forming Lubricant", category: "Metal Working Fluids", why: "Lubricates rolls and prevents frame rust during forming." },
      "Bearing Noise/Wear": { type: "Anti-wear Hydraulic Fluid", category: "Hydraulic Oils", why: "Protects forming roll drive mechanisms from wear." },
      "Tool Wear in Stamping": { type: "Heavy-duty Forming Emulsion", category: "Metal Working Fluids", why: "High boundary lubrication extends forming roll life." },
      "Rust During Storage/Transit": { type: "Inter-operational Rust Preventive", category: "Specialty Lubricants", why: "Prevents rust on newly formed steel frames before welding." },
      "High Friction/Squeaking": { type: "High-lubricity Weld-line Lubricant", category: "Metal Working Fluids", why: "Reduces friction in tube forming dies, ensuring smooth weld lines." }
    },
    "Wire/Spoke Drawing": {
      "Chain Rust/Corrosion": { type: "Corrosion-protected Wire Drawing Oil", category: "Metal Working Fluids", why: "Lubricates drawing dies while protecting raw wire from rust." },
      "Bearing Noise/Wear": { type: "Drawing Die Lubricant Powder/Oil", category: "Metal Working Fluids", why: "Reduces friction inside wire drawing dies, extending die life." },
      "Tool Wear in Stamping": { type: "EP Wire Drawing Oil", category: "Metal Working Fluids", why: "Protects drawing tools under massive boundary pressures." },
      "Rust During Storage/Transit": { type: "Water-displacing Rust Preventive", category: "Specialty Lubricants", why: "Coats drawing wire/spokes with a clear protective film." },
      "High Friction/Squeaking": { type: "High-lubricity Drawing Lubricant", category: "Metal Working Fluids", why: "Eradicates drawing squeaks and reduces heat buildup." }
    },
    "Stamping (Forks/Handles)": {
      "Chain Rust/Corrosion": { type: "Anti-corrosion Stamping Fluid", category: "Metal Working Fluids", why: "Stamps sheets while providing temporary rust protection." },
      "Bearing Noise/Wear": { type: "EP Press Gear Lubricant", category: "Gear Oils", why: "Protects press machinery gearboxes from wear under high loads." },
      "Tool Wear in Stamping": { type: "Chlorine-free EP Stamping/Press Oil", category: "Metal Working Fluids", why: "Extends stamping die and punch life during deep drawing." },
      "Rust During Storage/Transit": { type: "Solvent-based Rust Preventive Oil", category: "Specialty Lubricants", why: "Guarantees rust protection for stamped components in transit." },
      "High Friction/Squeaking": { type: "High-boundary Stamping Lubricant", category: "Metal Working Fluids", why: "Prevents metal friction squeak during heavy pressing." }
    },
    "Chrome Plating Line": {
      "Chain Rust/Corrosion": { type: "Acid-resistant Conveyor Chain Lubricant", category: "Specialty Lubricants", why: "Resists acid wash and plating chemistry, stopping chain rust." },
      "Bearing Noise/Wear": { type: "Chemical-resistant Fluorinated Grease (PFPE)", category: "Greases", why: "Withstands plating tank chemical vapours without breaking down." },
      "Tool Wear in Stamping": { type: "Plating line mechanism oil", category: "Specialty Lubricants", why: "Protects lifting and handling gear from wear." },
      "Rust During Storage/Transit": { type: "Post-plating Clear Rust Preventive", category: "Specialty Lubricants", why: "Creates a thin glossy anti-corrosion coating on finished chrome parts." },
      "High Friction/Squeaking": { type: "Acid-vapor Resistant Grease", category: "Greases", why: "Maintains film strength in humid plating chambers to stop friction noise." }
    }
  },
  auto_engineering: {
    "CNC Machining": {
      "Tool Wear": { type: "High-EP Semi-Synthetic Coolant", category: "Metal Working Fluids", why: "Excellent cooling and boundary lubrication protect CNC tools in high-speed machining." },
      "Poor Surface Finish": { type: "Synthetic Grinding/Cutting Coolant", category: "Metal Working Fluids", why: "Flushes metal chips efficiently, preventing chip recutting for superior surface finish." },
      "Rust Between Operations": { type: "Water-soluble Coolant with Rust Inhibitors", category: "Metal Working Fluids", why: "Lubricates while depositing a thin anti-corrosion barrier on parts." },
      "Coolant Foaming/Bacterial Growth": { type: "Biostatic Low-foam Coolant", category: "Metal Working Fluids", why: "Formulated to resist bacterial growth and foaming in high-pressure coolant systems." },
      "Hydraulic Overheating": { type: "High VI Anti-wear Hydraulic Oil (ISO VG 46)", category: "Hydraulic Oils", why: "Ensures stable hydraulic valve response in CNC systems, preventing heat." }
    },
    "Turning/Milling": {
      "Tool Wear": { type: "Premium Neat Cutting Oil (EP)", category: "Metal Working Fluids", why: "Friction-reducing EP additives protect cutting tool tips." },
      "Poor Surface Finish": { type: "High-lubricity Neat Cutting Fluid", category: "Metal Working Fluids", why: "Produces smooth surface profiles on turned auto parts." },
      "Rust Between Operations": { type: "Inter-operational Rust Preventive Oil", category: "Specialty Lubricants", why: "Protects turned parts from rust before they move to washing/assembly." },
      "Coolant Foaming/Bacterial Growth": { type: "Low-foam Neat Cutting Lubricant", category: "Metal Working Fluids", why: "Prevents foaming and oil misting during high-speed turning." },
      "Hydraulic Overheating": { type: "Anti-wear Hydraulic Oil (ISO VG 32)", category: "Hydraulic Oils", why: "Prevents pump slip and fluid breakdown in milling machines." }
    },
    "Stamping/Press Shop": {
      "Tool Wear": { type: "Heavy-duty Stamping & Drawing Oil", category: "Metal Working Fluids", why: "Extends tool and punch die life during high-impact stamping." },
      "Poor Surface Finish": { type: "Lubricious Deep Stamping Fluid", category: "Metal Working Fluids", why: "Avoids tearing and metal splits, keeping stamped surface clean." },
      "Rust Between Operations": { type: "Solvent-based Rust Preventive", category: "Specialty Lubricants", why: "Prevents rust on stamped sheets during warehouse storage." },
      "Coolant Foaming/Bacterial Growth": { type: "Chlorine-free Press Lubricant", category: "Metal Working Fluids", why: "Low odor and low residue formula reduces cleanup requirements." },
      "Hydraulic Overheating": { type: "Synthetic Fire-resistant Hydraulic Fluid", category: "Hydraulic Oils", why: "Protects press shop hydraulics from hot operating failures." }
    },
    "Heat Treatment (Quenching)": {
      "Tool Wear": { type: "Cold Quenching Oil / Quench Accelerant", category: "Specialty Lubricants", why: "Controlled cooling ensures component hardness and minimizes cracking." },
      "Poor Surface Finish": { type: "Bright Quenching Oil", category: "Specialty Lubricants", why: "Leaves quenched auto parts clean and bright, minimizing cleaning time." },
      "Rust Between Operations": { type: "Dewaxed Rust Preventive Oil", category: "Specialty Lubricants", why: "Protects heat-treated components from rust before final assembly." },
      "Coolant Foaming/Bacterial Growth": { type: "Thermal-stable Quenching fluid", category: "Specialty Lubricants", why: "Resists oxidation and sludge formation under extreme heat." },
      "Hydraulic Overheating": { type: "High-Temp Hydraulic Oil", category: "Hydraulic Oils", why: "Protects furnace doors and charger hydraulics from overheating." }
    },
    "Assembly Line": {
      "Tool Wear": { type: "Premium EP Lithium Grease", category: "Greases", why: "Reduces friction on automated conveyer tracks and tools." },
      "Poor Surface Finish": { type: "Clean Assembly Spray/Grease", category: "Greases", why: "Prevents component marking and scratching during assembly." },
      "Rust Between Operations": { type: "Light Protective Assembly Fluid", category: "Specialty Lubricants", why: "Provides touch-safe rust protection during assembly." },
      "Coolant Foaming/Bacterial Growth": { type: "Clean-room Assembly Grease", category: "Greases", why: "Low-evaporation, non-dripping grease keeps assembly beds clean." },
      "Hydraulic Overheating": { type: "High-performance Hydraulic Fluid (ISO VG 46)", category: "Hydraulic Oils", why: "Controls heat in pneumatic/hydraulic assembly jigs." }
    },
    "Testing/Running-in": {
      "Tool Wear": { type: "Low-viscosity Running-in Oil", category: "Specialty Lubricants", why: "Speeds up initial wear-in of gears/engines while flushing particles." },
      "Poor Surface Finish": { type: "Friction-reducing Testing Fluid", category: "Specialty Lubricants", why: "Ensures smooth contact faces during component running-in." },
      "Rust Between Operations": { type: "Testing Oil with Rust Inhibitor", category: "Specialty Lubricants", why: "Provides internal rust protection after test drainage." },
      "Coolant Foaming/Bacterial Growth": { type: "Thermal-stable Testing Lubricant", category: "Specialty Lubricants", why: "Resists foaming in testing pumps." },
      "Hydraulic Overheating": { type: "Premium Hydraulic Oil", category: "Hydraulic Oils", why: "Ensures clean pressure readings in component test rigs." }
    }
  },
  machine_tools: {
    "CNC/VMC Machines": {
      "Stick-Slip on Slideways": { type: "Premium Way Lube (ISO VG 68)", category: "Specialty Lubricants", why: "Eliminates slideway stick-slip chatter for high precision machining." },
      "Spindle Overheating": { type: "High-speed Spindle Lubricant (ISO VG 2/10)", category: "Specialty Lubricants", why: "Ultra-low viscosity cuts fluid friction in high-RPM spindles." },
      "Hydraulic Oil Contamination": { type: "High-Demulsibility Hydraulic Oil (ISO VG 32)", category: "Hydraulic Oils", why: "Separates quickly from tramp oil and water, ensuring clean systems." },
      "Gear Wear/Noise": { type: "EP Industrial Gear Oil (ISO VG 150)", category: "Gear Oils", why: "EP additives protect loaded feed gearboxes and reduce noise." },
      "Rust on Finished Parts": { type: "Thin-film Rust Preventive", category: "Specialty Lubricants", why: "Protects newly milled surfaces from room humidity." }
    },
    "Slideways/Ways": {
      "Stick-Slip on Slideways": { type: "Way Lubricant (ISO VG 68/220)", category: "Specialty Lubricants", why: "Friction modifiers ensure smooth, jerk-free movement of tool carriages." },
      "Spindle Overheating": { type: "Low-viscosity Spindle Oil", category: "Specialty Lubricants", why: "Lubricates ways without migrating to hot spindle zones." },
      "Hydraulic Oil Contamination": { type: "Way Oil with demulsibility", category: "Specialty Lubricants", why: "Separates easily from coolants, protecting way surfaces." },
      "Gear Wear/Noise": { type: "Tacky Way/Gear Lubricant", category: "Specialty Lubricants", why: "Adheres to vertical slides, preventing metal wear." },
      "Rust on Finished Parts": { type: "Way-protecting Rust Preventive", category: "Specialty Lubricants", why: "Stops acidic coolant condensation from rusting slides." }
    },
    "Spindle Bearings": {
      "Stick-Slip on Slideways": { type: "Spindle/Way Dual-purpose Oil", category: "Specialty Lubricants", why: "Balances low-viscosity spindle cooling and slideway lubrication." },
      "Spindle Overheating": { type: "Spindle Bearing Oil (ISO VG 2/5)", category: "Specialty Lubricants", why: "Formulated for heat dissipation in 10,000+ RPM spindle bearings." },
      "Hydraulic Oil Contamination": { type: "Premium Spindle Lubricant", category: "Specialty Lubricants", why: "Maintains purity in air-oil spindle mist systems." },
      "Gear Wear/Noise": { type: "Synthetic Spindle Lubricant", category: "Specialty Lubricants", why: "Cushions high-speed spindle gears, reducing gear noise." },
      "Rust on Finished Parts": { type: "Corrosion-resistant Spindle Oil", category: "Specialty Lubricants", why: "Protects spindle internal components from moisture rust." }
    },
    "Hydraulic Power Packs": {
      "Stick-Slip on Slideways": { type: "Premium Hydraulic Way-Oil", category: "Hydraulic Oils", why: "Ensures smooth actuator stroke, avoiding judder." },
      "Spindle Overheating": { type: "High VI Hydraulic Oil (ISO VG 46)", category: "Hydraulic Oils", why: "Controls fluid heat in continuous-duty power packs." },
      "Hydraulic Oil Contamination": { type: "Anti-wear Hydraulic Oil (High Filterability)", category: "Hydraulic Oils", why: "Quickly separates water and prevents silt wear in valves." },
      "Gear Wear/Noise": { type: "Premium Hydraulic Gear Oil", category: "Hydraulic Oils", why: "Protects hydraulic pumps and driving gears from wear." },
      "Rust on Finished Parts": { type: "Hydraulic Oil with vapor inhibitors", category: "Hydraulic Oils", why: "Protects hydraulic reservoirs from internal condensation rust." }
    },
    "Gearboxes": {
      "Stick-Slip on Slideways": { type: "Gearbox Way-Lube Combination", category: "Gear Oils", why: "Suitable for shared gearbox/slideway lubrication reservoirs." },
      "Spindle Overheating": { type: "Synthetic Gear Oil (ISO VG 150)", category: "Gear Oils", why: "Low friction drag cools gearbox heat near spindle areas." },
      "Hydraulic Oil Contamination": { type: "Gear Oil with demulsifier", category: "Gear Oils", why: "Ensures tramp fluids do not compromise gear lubrication." },
      "Gear Wear/Noise": { type: "EP Gear Oil (ISO VG 150/220)", category: "Gear Oils", why: "Prevents gear teeth pitting, reducing operational noise." },
      "Rust on Finished Parts": { type: "Corrosion-inhibited Gear Oil", category: "Gear Oils", why: "Protects gearbox internals and surrounding casing from rust." }
    }
  },
  forging: {
    "Hammer/Press Forging Dies": {
      "Die Sticking/Wear": { type: "Graphite-in-water Die Lubricant", category: "Metal Working Fluids", why: "Forms a solid release barrier on hot dies to prevent metal sticking and wear." },
      "High-Temp Oil Breakdown": { type: "Synthetic Non-oil Die Lubricant", category: "Metal Working Fluids", why: "Resists thermal degradation under extreme hammer-impact heat." },
      "Scale Formation": { type: "Antiscalant Die Spray", category: "Metal Working Fluids", why: "Minimizes scale adhesion on forgings and die faces." },
      "Die Corrosion": { type: "Die Protecting Rust Preventive", category: "Specialty Lubricants", why: "Protects forging dies from rust during storage between shifts." },
      "Excess Smoke/Fumes": { type: "Water-based Synthetic Die Release Agent", category: "Metal Working Fluids", why: "Completely eliminates toxic oil smoke, keeping shop floors clean." }
    },
    "Hot Forging": {
      "Die Sticking/Wear": { type: "Premium Graphite Hot Forging Oil", category: "Metal Working Fluids", why: "Ensures clean billet release and extends forging die life." },
      "High-Temp Oil Breakdown": { type: "High Flash Hot Forging Lubricant", category: "Metal Working Fluids", why: "Stable at high billet temperatures (900C+), avoiding fire risks." },
      "Scale Formation": { type: "Billet Coating Lubricant", category: "Metal Working Fluids", why: "Reduces scale formation during induction heating and forging." },
      "Die Corrosion": { type: "Die Storage Protective Spray", category: "Specialty Lubricants", why: "Keeps hot die blocks free of corrosion." },
      "Excess Smoke/Fumes": { type: "Smoke-free Water-glycol Forging Fluid", category: "Metal Working Fluids", why: "Reduces workshop smoke levels during high-output runs." }
    },
    "Cold Forging": {
      "Die Sticking/Wear": { type: "Heavy-duty Neat Cold Forging Oil", category: "Metal Working Fluids", why: "High boundary lubrication prevents workpiece galling and die wear." },
      "High-Temp Oil Breakdown": { type: "EP Cold Forging Lubricant", category: "Metal Working Fluids", why: "Maintains film strength under severe cold extrusion pressures." },
      "Scale Formation": { type: "Phosphate-free Cold Forging Lubricant", category: "Metal Working Fluids", why: "Prevents surface scaling on extruded fastener blanks." },
      "Die Corrosion": { type: "Cold Heading Die Anti-rust Oil", category: "Specialty Lubricants", why: "Stops die corrosion in humid cold-forming workshops." },
      "Excess Smoke/Fumes": { type: "Hydrocracked Cold Forging Fluid", category: "Metal Working Fluids", why: "High flash point base oils eliminate misting and smoking." }
    },
    "Upsetting/Heading": {
      "Die Sticking/Wear": { type: "EP Cold Heading Lubricant", category: "Metal Working Fluids", why: "Protects high-speed header punches and dies from wear." },
      "High-Temp Oil Breakdown": { type: "Thermal-stable Heading Oil", category: "Metal Working Fluids", why: "Resists oxidation and breakdown in high-speed header sumps." },
      "Scale Formation": { type: "High-boundary Heading Lubricant", category: "Metal Working Fluids", why: "Keeps headers running cleanly, free of metal dust and scales." },
      "Die Corrosion": { type: "Heading Die Anti-rust Fluid", category: "Specialty Lubricants", why: "Protects steel heading dies from corrosion during storage." },
      "Excess Smoke/Fumes": { type: "Low-smoke Heading Oil", category: "Metal Working Fluids", why: "High flash base fluids stop smoking in rapid punch operations." }
    },
    "Trimming Press": {
      "Die Sticking/Wear": { type: "Trimming Die Spray / EP Oil", category: "Metal Working Fluids", why: "Reduces trimming die edge wear and keeps cuts clean." },
      "High-Temp Oil Breakdown": { type: "Synthetic Fire-resistant Hydraulic Fluid (HFDU)", category: "Hydraulic Oils", why: "Protects trimming press hydraulics from thermal degradation." },
      "Scale Formation": { type: "Die-flushing Trimming Fluid", category: "Metal Working Fluids", why: "Flushes flash and scale particles away from trimming beds." },
      "Die Corrosion": { type: "Trimming Tool Anti-rust Oil", category: "Specialty Lubricants", why: "Protects trimming tools from corrosion." },
      "Excess Smoke/Fumes": { type: "Water-soluble Trimming Fluid", category: "Metal Working Fluids", why: "Cooling fluid that generates zero fumes during trimming operations." }
    }
  },
  hand_tools: {
    "Forging/Hot Stamping": {
      "Tool/Die Wear": { type: "Water-based Graphite Die Lubricant", category: "Metal Working Fluids", why: "Forms a reliable mold release barrier, protecting hot stamping tools." },
      "Rust During Storage": { type: "Die Protection Rust Preventive", category: "Specialty Lubricants", why: "Protects forging dies from rust between production runs." },
      "Grinding Burn": { type: "Synthetic Grinding Coolant", category: "Metal Working Fluids", why: "Cools grinding zones, preventing thermal cracking on tool edges." },
      "Poor Surface Finish": { type: "Premium Grinding Oil", category: "Metal Working Fluids", why: "Improves surface gloss and finish during tool polishing." },
      "Corrosion Before Plating": { type: "Solvent-based Rust Preventive Oil", category: "Specialty Lubricants", why: "Prevents corrosion on hand tools before electroplating." }
    },
    "Grinding & Polishing": {
      "Tool/Die Wear": { type: "Low-viscosity Neat Grinding Oil", category: "Metal Working Fluids", why: "Flushes metal chips quickly, preventing wheel loading and wear." },
      "Rust During Storage": { type: "Dewaxed Anti-rust Oil", category: "Specialty Lubricants", why: "Keeps polished hand tools rust-free during storage." },
      "Grinding Burn": { type: "High-Cooling Grinding Fluid", category: "Metal Working Fluids", why: "Reduces thermal friction to eliminate burn marks on hand tools." },
      "Poor Surface Finish": { type: "High-lubricity Grinding Oil", category: "Metal Working Fluids", why: "Improves mirror finish on chrome-plated hand tools." },
      "Corrosion Before Plating": { type: "Water-displacing Rust Preventive", category: "Specialty Lubricants", why: "Displaces wet grinding fluid, preventing rust before plating." }
    },
    "Heat Treatment": {
      "Tool/Die Wear": { type: "Accelerated Quenching Oil", category: "Specialty Lubricants", why: "Controlled cooling speeds hardening, protecting tools from defects." },
      "Rust During Storage": { type: "Bright Quenching Oil / Post-Quench Oil", category: "Specialty Lubricants", why: "Leaves tools clean and rust-protected after heat treatment." },
      "Grinding Burn": { type: "Thermal-stable Quenching Oil", category: "Specialty Lubricants", why: "Resists carbon buildup on tool surfaces." },
      "Poor Surface Finish": { type: "Anti-scale Quenching Fluid", category: "Specialty Lubricants", why: "Minimizes oxidation scale during heat treatment cycles." },
      "Corrosion Before Plating": { type: "Rust Preventive Oil (Dewaxed)", category: "Specialty Lubricants", why: "Keeps hardened parts corrosion-free prior to plating." }
    },
    "Electroplating Line": {
      "Tool/Die Wear": { type: "Acid-vapor Resistant Lubricant", category: "Specialty Lubricants", why: "Protects electroplating conveyor lines and gears from chemical wear." },
      "Rust During Storage": { type: "Plated-part Rust Preventive", category: "Specialty Lubricants", why: "Protects finished hand tools from atmospheric humidity rust." },
      "Grinding Burn": { type: "Chemical-resistant Grease", category: "Specialty Lubricants", why: "Resists acid wash baths, keeping conveyor mechanisms lubricated." },
      "Poor Surface Finish": { type: "Plating Bath Brightener/Lubricant", category: "Specialty Lubricants", why: "Maintains brilliant chrome finish on hand tools." },
      "Corrosion Before Plating": { type: "Acid-neutralizing Rust Preventive", category: "Specialty Lubricants", why: "Neutralizes pre-plating acid traces, stopping flash rust." }
    },
    "Press Tools": {
      "Tool/Die Wear": { type: "Heavy-duty EP Press Oil", category: "Metal Working Fluids", why: "Extends stamping punch and blanking die life." },
      "Rust During Storage": { type: "Stamping Oil with Rust Inhibitor", category: "Metal Working Fluids", why: "Leaves temporary protective film on stamped tool blanks." },
      "Grinding Burn": { type: "High-EP Press Coolant", category: "Metal Working Fluids", why: "Reduces tool friction heat during stamping." },
      "Poor Surface Finish": { type: "Lubricious Stamping Fluid", category: "Metal Working Fluids", why: "Prevents metal scoring on stamped sockets and spanners." },
      "Corrosion Before Plating": { type: "Water-displacing Anti-rust Oil", category: "Specialty Lubricants", why: "Protects press parts from rusting before transfer." }
    }
  },
  fasteners: {
    "Cold Forming/Heading": {
      "Die/Tool Wear": { type: "Neat Cold Heading Oil (EP)", category: "Metal Working Fluids", why: "Friction-reducing EP additives protect extrusion dies during bolt forming." },
      "Smoke During Forming (wrong oil grade)": { type: "Hydrocracked Low-smoke Heading Oil", category: "Metal Working Fluids", why: "High flash point base oils eliminate smoking in high-speed formers." },
      "Rust Between Operations": { type: "Inter-operational Rust Preventive Oil", category: "Specialty Lubricants", why: "Protects formed screws and bolts from rusting during storage." },
      "Poor Thread Finish": { type: "High-lubricity Heading Fluid", category: "Metal Working Fluids", why: "Ensures smooth bolt shanks and clean blanks." },
      "Wire Breakage": { type: "High-EP Cold Heading Oil", category: "Metal Working Fluids", why: "Reduces die friction to prevent wire snapping during heading." }
    },
    "Thread Rolling": {
      "Die/Tool Wear": { type: "Extreme Pressure Thread Rolling Oil", category: "Metal Working Fluids", why: "Protects thread rolling dies from chipping under pressure." },
      "Smoke During Forming (wrong oil grade)": { type: "Low-mist Thread Rolling Lubricant", category: "Metal Working Fluids", why: "High flash point base fluids stop oil smoking during thread rolling." },
      "Rust Between Operations": { type: "Rust Preventive Thread Rolling Fluid", category: "Metal Working Fluids", why: "Protects rolled fasteners from rust before plating." },
      "Poor Thread Finish": { type: "High-boundary Threading Lubricant", category: "Metal Working Fluids", why: "Ensures clean thread cuts and high dimensional accuracy." },
      "Wire Breakage": { type: "High-lubricity Rolling Oil", category: "Metal Working Fluids", why: "Reduces friction drag in fastener thread rolling." }
    },
    "Wire Drawing": {
      "Die/Tool Wear": { type: "Synthetic Wire Drawing Lubricant", category: "Metal Working Fluids", why: "Reduces drawing die friction, extending wire die life." },
      "Smoke During Forming (wrong oil grade)": { type: "Low-smoke drawing oil", category: "Metal Working Fluids", why: "High flash point base oils stop smoke generation." },
      "Rust Between Operations": { type: "Rust Preventive Wire Drawing Fluid", category: "Metal Working Fluids", why: "Protects drawn wire coils from rust during storage." },
      "Poor Thread Finish": { type: "High-lubricity Wire Drawing Fluid", category: "Metal Working Fluids", why: "Improves surface finish on drawn fastener wire." },
      "Wire Breakage": { type: "Drawing Die Lubricant Powder/Oil (High EP)", category: "Metal Working Fluids", why: "Reduces drawing die friction and prevents wire breakage." }
    },
    "Heat Treatment": {
      "Die/Tool Wear": { type: "Quenching Oil (ISO VG 22)", category: "Specialty Lubricants", why: "Ensures uniform hardening of fasteners and screws." },
      "Smoke During Forming (wrong oil grade)": { type: "Thermal-stable Quenching Oil", category: "Specialty Lubricants", why: "Low volatility reduces oil vapor formation and replacement needs." },
      "Rust Between Operations": { type: "Post-Quench Rust Preventive", category: "Specialty Lubricants", why: "Keeps heat-treated fasteners free of corrosion." },
      "Poor Thread Finish": { type: "Bright Quenching Fluid", category: "Specialty Lubricants", why: "Leaves fasteners clean and bright after heat treatment." },
      "Wire Breakage": { type: "Quench oil with high heat transfer", category: "Specialty Lubricants", why: "Ensures uniform hardening of fasteners and screws." }
    },
    "Pre-Plating Treatment": {
      "Die/Tool Wear": { type: "Water-soluble Pre-plating Degreaser/Lubricant", category: "Specialty Lubricants", why: "Lubricates while being easily cleaned off before plating." },
      "Smoke During Forming (wrong oil grade)": { type: "Low-residue Pre-plating oil", category: "Specialty Lubricants", why: "High flash base fluids stop smoking in pre-plating punch operations." },
      "Rust Between Operations": { type: "Water-displacing Anti-rust Oil", category: "Specialty Lubricants", why: "Protects fasteners from rusting during storage." },
      "Poor Thread Finish": { type: "Pre-plating Thread Lubricant", category: "Specialty Lubricants", why: "Improves surface gloss and finish." },
      "Wire Breakage": { type: "Lubricious pre-plating chemical", category: "Specialty Lubricants", why: "Reduces friction drag in pre-plating treatment." }
    }
  },
  agricultural: {
    "Tractor Hydraulics": {
      "Hydraulic-Brake Fluid Compatibility": { type: "Universal Tractor Transmission Oil (UTTO)", category: "Hydraulic Oils", why: "Combines hydraulic, transmission, and wet brake lubrication in a single fluid." },
      "Seal Compatibility": { type: "UTTO with Seal Swell Additives", category: "Hydraulic Oils", why: "Prevents oil leaks by maintaining seal elasticity in field machinery." },
      "Dust/Contamination Ingress": { type: "UTTO with High Filterability", category: "Hydraulic Oils", why: "Quickly separates water and prevents silt wear in valves." },
      "Rust on Stored Equipment": { type: "Hydraulic Oil with vapor inhibitors", category: "Hydraulic Oils", why: "Protects hydraulic reservoirs from internal condensation rust." },
      "Gear Wear Under Shock Load": { type: "Universal Tractor Transmission Oil (EP)", category: "Hydraulic Oils", why: "EP additives protect gears from wear under heavy load." }
    },
    "PTO/Gearbox": {
      "Hydraulic-Brake Fluid Compatibility": { type: "UTTO with Brake-noise Suppressants", category: "Gear Oils", why: "Formulated specifically to ensure compatibility with wet brake friction materials and seal systems." },
      "Seal Compatibility": { type: "High-performance Gear Oil with Seal Swell Additives", category: "Gear Oils", why: "Prevents oil leaks by maintaining seal elasticity in field machinery." },
      "Dust/Contamination Ingress": { type: "Gear Oil with demulsifier", category: "Gear Oils", why: "Ensures tramp fluids do not compromise gear lubrication." },
      "Rust on Stored Equipment": { type: "Heavy-duty Rust Preventive Wax/Oil", category: "Gear Oils", why: "Protects agricultural equipment from outdoor weathering and rust." },
      "Gear Wear Under Shock Load": { type: "Shock-resistant EP Gear Oil (85W-140)", category: "Gear Oils", why: "Maintains thick lubricating film under sudden heavy loads in farming implements." }
    },
    "Diesel Engine": {
      "Hydraulic-Brake Fluid Compatibility": { type: "Tractor Engine Oil", category: "Specialty Lubricants", why: "Protects tractor engines from soot, wear, and corrosion." },
      "Seal Compatibility": { type: "High-performance Diesel Engine Oil (15W-40 API CI-4/CK-4)", category: "Specialty Lubricants", why: "Protects tractor engines from soot, wear, and corrosion during long harvest shifts." },
      "Dust/Contamination Ingress": { type: "Engine Oil with dispersants", category: "Specialty Lubricants", why: "Maintains soot suspension, preventing engine wear." },
      "Rust on Stored Equipment": { type: "Engine Oil with Rust Inhibitor", category: "Specialty Lubricants", why: "Provides internal rust protection after test drainage." },
      "Gear Wear Under Shock Load": { type: "Tractor Engine Oil (High Film Strength)", category: "Specialty Lubricants", why: "Protects tractor engines from soot, wear, and corrosion." }
    },
    "Wet Brakes": {
      "Hydraulic-Brake Fluid Compatibility": { type: "Wet Brake Friction Modifier Lubricant", category: "Specialty Lubricants", why: "Reduces wet brake chatter and squeal while ensuring optimal brake response." },
      "Seal Compatibility": { type: "Wet Brake Lubricant with Seal Swell Additives", category: "Specialty Lubricants", why: "Prevents oil leaks by maintaining seal elasticity in field machinery." },
      "Dust/Contamination Ingress": { type: "Wet Brake Lubricant with high filterability", category: "Specialty Lubricants", why: "Quickly separates water and prevents silt wear in valves." },
      "Rust on Stored Equipment": { type: "Wet Brake Lubricant with Rust Inhibitor", category: "Specialty Lubricants", why: "Provides internal rust protection after test drainage." },
      "Gear Wear Under Shock Load": { type: "Wet Brake Lubricant (High EP)", category: "Specialty Lubricants", why: "Reduces wet brake chatter and squeal while ensuring optimal brake response." }
    },
    "Implement Bearings": {
      "Hydraulic-Brake Fluid Compatibility": { type: "Water-resistant Bearing Grease", category: "Greases", why: "Prevents water entry into bearing assemblies, stopping rust." },
      "Seal Compatibility": { type: "Premium EP Lithium Grease", category: "Greases", why: "EP additives protect bearings from wear under heavy load and reduce noise." },
      "Dust/Contamination Ingress": { type: "Water-resistant EP Lithium Complex Grease", category: "Greases", why: "Seals out dust, water, and soil contaminants from harvester/tillage bearings." },
      "Rust on Stored Equipment": { type: "Tacky Dust-sealing Grease", category: "Greases", why: "Creates a physical barrier at bearing seals to prevent dust entry." },
      "Gear Wear Under Shock Load": { type: "EP Lithium Complex Grease (High EP)", category: "Greases", why: "EP additives protect bearings from wear under heavy load." }
    },
    "Manufacturing (Press/Weld)": {
      "Hydraulic-Brake Fluid Compatibility": { type: "Water-soluble Forming Lubricant", category: "Metal Working Fluids", why: "Lubricates rolls and prevents frame rust during forming." },
      "Seal Compatibility": { type: "Anti-wear Hydraulic Fluid", category: "Metal Working Fluids", why: "Protects forming roll drive mechanisms from wear." },
      "Dust/Contamination Ingress": { type: "Heavy-duty Forming Emulsion", category: "Metal Working Fluids", why: "High boundary lubrication extends forming roll life." },
      "Rust on Stored Equipment": { type: "Inter-operational Rust Preventive", category: "Metal Working Fluids", why: "Prevents rust on newly formed steel frames before welding." },
      "Gear Wear Under Shock Load": { type: "High-lubricity Weld-line Lubricant", category: "Metal Working Fluids", why: "Reduces friction in tube forming dies, ensuring smooth weld lines." }
    }
  },
  steel_processing: {
    "Rolling Mills (Hot/Cold)": {
      "High-Temp Oil Breakdown": { type: "Synthetic Thermal-stable Lubricant", category: "Metal Working Fluids", why: "Resists oxidation and sludge formation at extreme steel mill temperatures." },
      "Rust on Coils": { type: "Non-staining Rust Preventive Oil", category: "Metal Working Fluids", why: "Protects steel sheet from rust without leaving chemical stains or residues." },
      "Roll Wear": { type: "EP Rolling Oil", category: "Metal Working Fluids", why: "Prevents direct metal contact between work rolls and steel sheet." },
      "Scale/Descaling Issues": { type: "Scale-flushing Emulsion", category: "Metal Working Fluids", why: "Flushes scale particles quickly to prevent roll indentation." },
      "Hydraulic Contamination": { type: "Anti-wear Hydraulic Oil (High Filterability)", category: "Metal Working Fluids", why: "Quickly separates water and prevents silt wear in valves." }
    },
    "Wire Drawing": {
      "High-Temp Oil Breakdown": { type: "Drawing Die Lubricant Powder/Oil", category: "Metal Working Fluids", why: "Reduces drawing die friction, extending wire die life." },
      "Rust on Coils": { type: "Water-displacing Rust Preventive", category: "Metal Working Fluids", why: "Coats drawing wire/spokes with a clear protective film." },
      "Roll Wear": { type: "EP Wire Drawing Oil", category: "Metal Working Fluids", why: "Protects drawing tools under massive boundary pressures." },
      "Scale/Descaling Issues": { type: "Antiscalant Forging Lubricant", category: "Metal Working Fluids", why: "Minimizes scale adhesion on drawing wire." },
      "Hydraulic Contamination": { type: "Wire drawing oil with demulsibility", category: "Metal Working Fluids", why: "Ensures tramp fluids do not compromise wire drawing." }
    },
    "Continuous Casting": {
      "High-Temp Oil Breakdown": { type: "High-temperature Synthetic Casting Lubricant", category: "Specialty Lubricants", why: "Withstands extreme casting temperatures, providing continuous lubrication." },
      "Rust on Coils": { type: "Casting lubricant with rust inhibitor", category: "Specialty Lubricants", why: "Protects steel sheet from rust without leaving chemical stains." },
      "Roll Wear": { type: "Casting Lubricant (High EP)", category: "Specialty Lubricants", why: "Withstands extreme casting temperatures, providing continuous lubrication." },
      "Scale/Descaling Issues": { type: "Casting Lubricant (High Film Strength)", category: "Specialty Lubricants", why: "Withstands extreme casting temperatures, providing continuous lubrication." },
      "Hydraulic Contamination": { type: "Casting Lubricant (High Demulsibility)", category: "Specialty Lubricants", why: "Withstands extreme casting temperatures, providing continuous lubrication." }
    },
    "Slitting/Shearing": {
      "High-Temp Oil Breakdown": { type: "Evaporative Slitting Lubricant", category: "Metal Working Fluids", why: "Provides temporary lubricity for slitter blades, leaving dry, clean metal edges." },
      "Rust on Coils": { type: "Slitting Oil with Rust Inhibitor", category: "Metal Working Fluids", why: "Leaves temporary protective film on slitted steel shanks." },
      "Roll Wear": { type: "EP Slitting Lubricant", category: "Metal Working Fluids", why: "Prevents direct metal contact between work rolls and steel sheet." },
      "Scale/Descaling Issues": { type: "Slitting Lubricant (High Film Strength)", category: "Metal Working Fluids", why: "Provides temporary lubricity for slitter blades, leaving dry, clean metal edges." },
      "Hydraulic Contamination": { type: "Slitting Lubricant (High Demulsibility)", category: "Metal Working Fluids", why: "Provides temporary lubricity for slitter blades, leaving dry, clean metal edges." }
    },
    "Coil Storage/Transit": {
      "High-Temp Oil Breakdown": { type: "Export-grade Rust Preventive Oil", category: "Specialty Lubricants", why: "Forms a thin, protective barrier that stops rust on steel coils during overseas transit." },
      "Rust on Coils": { type: "Non-staining Rust Preventive Oil", category: "Specialty Lubricants", why: "Protects steel sheet from rust without leaving chemical stains or residues." },
      "Roll Wear": { type: "Coil Storage Oil (High EP)", category: "Specialty Lubricants", why: "Forms a thin, protective barrier that stops rust on steel coils during overseas transit." },
      "Scale/Descaling Issues": { type: "Coil Storage Oil (High Film Strength)", category: "Specialty Lubricants", why: "Forms a thin, protective barrier that stops rust on steel coils during overseas transit." },
      "Hydraulic Contamination": { type: "Coil Storage Oil (High Demulsibility)", category: "Specialty Lubricants", why: "Forms a thin, protective barrier that stops rust on steel coils during overseas transit." }
    }
  },
  foundry: {
    "Die Casting Machines": {
      "Die Sticking": { type: "Water-mix Die Release Agent (Silicone/Waxes)", category: "Hydraulic Oils", why: "Forms a release film on die casting dies, preventing aluminum soldering and sticking." },
      "High-Temp Grease Breakdown": { type: "Synthetic Clay/Fluorinated Grease (PFPE)", category: "Hydraulic Oils", why: "Does not melt or carbonize at furnace temperatures, protecting ladle bearings." },
      "Smoke/Fumes at Release": { type: "Water-based Synthetic Die Release Agent", category: "Hydraulic Oils", why: "Low smoke formulation keeps foundry air cleaner and reduces worker exposure." },
      "Hydraulic Overheating": { type: "Synthetic Fire-resistant Hydraulic Fluid (HFDU)", category: "Hydraulic Oils", why: "Maintains viscosity and resists breakdown under high continuous heat load." },
      "Pattern/Die Corrosion": { type: "Corrosion-protective Die Spray", category: "Hydraulic Oils", why: "Protects dies from oxidation between shifts." }
    },
    "Core Making": {
      "Die Sticking": { type: "Specialty Core Binder Release Agent", category: "Specialty Lubricants", why: "Ensures easy core release from core box with minimal sand buildup." },
      "High-Temp Grease Breakdown": { type: "Core Lubricant (High Temp)", category: "Specialty Lubricants", why: "Ensures easy core release from core box with minimal sand buildup." },
      "Smoke/Fumes at Release": { type: "Core Lubricant (Low Smoke)", category: "Specialty Lubricants", why: "Ensures easy core release from core box with minimal sand buildup." },
      "Hydraulic Overheating": { type: "Core Lubricant (High Demulsibility)", category: "Specialty Lubricants", why: "Ensures easy core release from core box with minimal sand buildup." },
      "Pattern/Die Corrosion": { type: "Core Lubricant (Rust Inhibited)", category: "Specialty Lubricants", why: "Ensures easy core release from core box with minimal sand buildup." }
    },
    "Sand Mold Release": {
      "Die Sticking": { type: "Silicone-free Mold Release Agent", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting casting surface finish." },
      "High-Temp Grease Breakdown": { type: "Sand Mold Lubricant (High Temp)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting casting surface finish." },
      "Smoke/Fumes at Release": { type: "Sand Mold Lubricant (Low Smoke)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting casting surface finish." },
      "Hydraulic Overheating": { type: "Sand Mold Lubricant (High Demulsibility)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting casting surface finish." },
      "Pattern/Die Corrosion": { type: "Sand Mold Lubricant (Rust Inhibited)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting casting surface finish." }
    },
    "Pattern Shop": {
      "Die Sticking": { type: "Pattern Release Lubricant", category: "Specialty Lubricants", why: "Protects wooden/metal patterns and ensures smooth parting." },
      "High-Temp Grease Breakdown": { type: "Pattern Lubricant (High Temp)", category: "Specialty Lubricants", why: "Protects wooden/metal patterns and ensures smooth parting." },
      "Smoke/Fumes at Release": { type: "Pattern Lubricant (Low Smoke)", category: "Specialty Lubricants", why: "Protects wooden/metal patterns and ensures smooth parting." },
      "Hydraulic Overheating": { type: "Pattern Lubricant (High Demulsibility)", category: "Specialty Lubricants", why: "Protects wooden/metal patterns and ensures smooth parting." },
      "Pattern/Die Corrosion": { type: "Pattern Lubricant (Rust Inhibited)", category: "Specialty Lubricants", why: "Protects wooden/metal patterns and ensures smooth parting." }
    },
    "Furnace Hydraulics": {
      "Die Sticking": { type: "Fire-Resistant Water-Glycol Hydraulic Fluid (HFC)", category: "Hydraulic Oils", why: "Eliminates fire hazards in hydraulic systems operating close to molten metal furnace zones." },
      "High-Temp Grease Breakdown": { type: "Furnace Hydraulic Fluid (High Temp)", category: "Hydraulic Oils", why: "Eliminates fire hazards in hydraulic systems operating close to molten metal furnace zones." },
      "Smoke/Fumes at Release": { type: "Furnace Hydraulic Fluid (Low Smoke)", category: "Hydraulic Oils", why: "Eliminates fire hazards in hydraulic systems operating close to molten metal furnace zones." },
      "Hydraulic Overheating": { type: "Furnace Hydraulic Fluid (High Demulsibility)", category: "Hydraulic Oils", why: "Eliminates fire hazards in hydraulic systems operating close to molten metal furnace zones." },
      "Pattern/Die Corrosion": { type: "Furnace Hydraulic Fluid (Rust Inhibited)", category: "Hydraulic Oils", why: "Eliminates fire hazards in hydraulic systems operating close to molten metal furnace zones." }
    }
  },
  rubber_plastic: {
    "Injection Molding": {
      "Mold Sticking": { type: "Premium Non-silicone Release Agent", category: "Hydraulic Oils", why: "Prevents plastic parts from sticking to complex mold cavities." },
      "Contamination Sensitivity": { type: "Clean-running Extruder Lubricant", category: "Hydraulic Oils", why: "Prevents gear sludge and carbon buildup, keeping product clean." },
      "Hydraulic Overheating": { type: "High-VI Hydraulic Oil (ISO VG 46)", category: "Hydraulic Oils", why: "Resists viscosity loss and reduces heat generation in continuous molding cycles." },
      "Seal/Gasket Compatibility": { type: "Ester-free Synthetic Lubricant", category: "Hydraulic Oils", why: "Compatible with standard nitrile/viton seals used in injection molders." },
      "Molded Part Surface Defects": { type: "High-purity Silicone Release Fluid", category: "Hydraulic Oils", why: "Creates a uniform release film to prevent surface blemishes and knit lines." }
    },
    "Extrusion Machines": {
      "Mold Sticking": { type: "Premium Non-silicone Release Agent", category: "Gear Oils", why: "Prevents plastic parts from sticking to complex mold cavities." },
      "Contamination Sensitivity": { type: "Clean-running Extruder Lubricant", category: "Gear Oils", why: "Prevents gear sludge and carbon buildup, keeping product clean." },
      "Hydraulic Overheating": { type: "Synthetic EP Gear Oil (ISO VG 220/320)", category: "Gear Oils", why: "Handles extreme thrust loads and high temperatures in extruder gearboxes." },
      "Seal/Gasket Compatibility": { type: "Ester-free Synthetic Lubricant", category: "Gear Oils", why: "Compatible with standard nitrile/viton seals used in extruders." },
      "Molded Part Surface Defects": { type: "High-purity Silicone Release Fluid", category: "Gear Oils", why: "Creates a uniform release film to prevent surface blemishes." }
    },
    "Mold Release": {
      "Mold Sticking": { type: "Silicone-free Mold Release Agent", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting surface finish." },
      "Contamination Sensitivity": { type: "Mold Release (High Cleanliness)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting surface finish." },
      "Hydraulic Overheating": { type: "Mold Release (High Temp)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting surface finish." },
      "Seal/Gasket Compatibility": { type: "Mold Release (High Compatibility)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting surface finish." },
      "Molded Part Surface Defects": { type: "Mold Release (High Purity)", category: "Specialty Lubricants", why: "Provides clean sand mold release without affecting surface finish." }
    },
    "Calendering": {
      "Mold Sticking": { type: "Synthetic Heat Transfer Fluid", category: "Specialty Lubricants", why: "Maintains uniform roller temperature during sheet calendering without thermal breakdown." },
      "Contamination Sensitivity": { type: "Calendering Lubricant (High Cleanliness)", category: "Specialty Lubricants", why: "Maintains uniform roller temperature during sheet calendering without thermal breakdown." },
      "Hydraulic Overheating": { type: "Calendering Lubricant (High Temp)", category: "Specialty Lubricants", why: "Maintains uniform roller temperature during sheet calendering without thermal breakdown." },
      "Seal/Gasket Compatibility": { type: "Calendering Lubricant (High Compatibility)", category: "Specialty Lubricants", why: "Maintains uniform roller temperature during sheet calendering without thermal breakdown." },
      "Molded Part Surface Defects": { type: "Calendering Lubricant (High Purity)", category: "Specialty Lubricants", why: "Maintains uniform roller temperature during sheet calendering without thermal breakdown." }
    },
    "Compression Molding": {
      "Mold Sticking": { type: "Premium Non-silicone Release Agent", category: "Hydraulic Oils", why: "Prevents plastic parts from sticking to complex mold cavities." },
      "Contamination Sensitivity": { type: "Clean-running Extruder Lubricant", category: "Hydraulic Oils", why: "Prevents gear sludge and carbon buildup." },
      "Hydraulic Overheating": { type: "High-VI Hydraulic Oil (ISO VG 68)", category: "Hydraulic Oils", why: "Resists viscosity loss and reduces heat generation in continuous molding cycles." },
      "Seal/Gasket Compatibility": { type: "Ester-free Synthetic Lubricant", category: "Hydraulic Oils", why: "Compatible with standard nitrile/viton seals." },
      "Molded Part Surface Defects": { type: "High-purity Silicone Release Fluid", category: "Hydraulic Oils", why: "Creates a uniform release film." }
    }
  },
  electrical_electronics: {
    "Transformer Oil Systems": {
      "Dielectric Breakdown": { type: "Inhibited Naphthenic Transformer Oil (IEC 60296)", category: "Specialty Lubricants", why: "Excellent dielectric strength and heat transfer properties for cooling transformers." },
      "Contact Corrosion/Resistance": { type: "Inhibited Transformer Oil (Anti-corrosive)", category: "Specialty Lubricants", why: "High purity and low moisture content prevent electrical arc-over." },
      "Bearing Overheating/Noise": { type: "Inhibited Transformer Oil", category: "Specialty Lubricants", why: "Excellent dielectric strength and heat transfer properties." },
      "Static Buildup": { type: "Anti-static Lubricant/Grease", category: "Specialty Lubricants", why: "Helps safely dissipate static charges in electronics assembly equipment." },
      "Contamination Sensitivity": { type: "Non-outgassing Synthetic Lubricant", category: "Specialty Lubricants", why: "Prevents vapor condensation and silicone contamination on electronic parts." }
    },
    "Switchgear": {
      "Dielectric Breakdown": { type: "Dielectric Contact Grease (ISO VG 100)", category: "Specialty Lubricants", why: "Protects electrical switch contacts from arc corrosion, oxidation, and wear." },
      "Contact Corrosion/Resistance": { type: "Synthetic Noble Metal Contact Grease", category: "Specialty Lubricants", why: "Ensures low contact resistance and prevents fretting corrosion in connectors." },
      "Bearing Overheating/Noise": { type: "Polyurea-thickened Bearing Grease", category: "Specialty Lubricants", why: "Provides long-life bearing lubrication in electric motors, preventing hot runs." },
      "Static Buildup": { type: "Anti-static Lubricant/Grease", category: "Specialty Lubricants", why: "Helps safely dissipate static charges in electronics." },
      "Contamination Sensitivity": { type: "Non-outgassing Synthetic Lubricant", category: "Specialty Lubricants", why: "Prevents vapor condensation and silicone contamination on electronic parts." }
    },
    "Motor Bearings": {
      "Dielectric Breakdown": { type: "Low-noise Ball Bearing Grease", category: "Greases", why: "Reduces friction and noise in high-speed electric motor bearings." },
      "Contact Corrosion/Resistance": { type: "Motor Bearing Grease (Anti-corrosive)", category: "Greases", why: "Reduces friction and noise in high-speed electric motor bearings." },
      "Bearing Overheating/Noise": { type: "Polyurea-thickened Bearing Grease", category: "Greases", why: "Provides long-life bearing lubrication in electric motors, preventing hot runs." },
      "Static Buildup": { type: "Anti-static Grease", category: "Greases", why: "Reduces friction and noise in high-speed electric motor bearings." },
      "Contamination Sensitivity": { type: "Clean-room Bearing Grease", category: "Greases", why: "Reduces friction and noise in high-speed electric motor bearings." }
    },
    "Connector/Contact Lubrication": {
      "Dielectric Breakdown": { type: "Dielectric Contact Grease (ISO VG 100)", category: "Specialty Lubricants", why: "Protects electrical switch contacts from arc corrosion, oxidation, and wear." },
      "Contact Corrosion/Resistance": { type: "Synthetic Noble Metal Contact Grease", category: "Specialty Lubricants", why: "Ensures low contact resistance and prevents fretting corrosion in connectors." },
      "Bearing Overheating/Noise": { type: "Polyurea-thickened Bearing Grease", category: "Specialty Lubricants", why: "Provides long-life bearing lubrication in electric motors, preventing hot runs." },
      "Static Buildup": { type: "Anti-static Lubricant/Grease", category: "Specialty Lubricants", why: "Helps safely dissipate static charges." },
      "Contamination Sensitivity": { type: "Non-outgassing Synthetic Lubricant", category: "Specialty Lubricants", why: "Prevents vapor condensation and silicone contamination." }
    },
    "Assembly Equipment": {
      "Dielectric Breakdown": { type: "High-precision Cleanroom Grease", category: "Greases", why: "Prevents oil bleeding and particle generation in electronics assembly lines." },
      "Contact Corrosion/Resistance": { type: "Assembly Grease (Anti-corrosive)", category: "Greases", why: "Prevents oil bleeding and particle generation in electronics assembly lines." },
      "Bearing Overheating/Noise": { type: "Polyurea-thickened Bearing Grease", category: "Greases", why: "Provides long-life bearing lubrication in electric motors, preventing hot runs." },
      "Static Buildup": { type: "Anti-static Grease", category: "Greases", why: "Prevents oil bleeding and particle generation in electronics assembly lines." },
      "Contamination Sensitivity": { type: "Cleanroom Grease (High Purity)", category: "Greases", why: "Prevents oil bleeding and particle generation in electronics assembly lines." }
    }
  },
  food_processing: {
    "Conveyor Chains": {
      "Incidental Food Contact Risk": { type: "NSF H1 Food-Grade Chain Lubricant", category: "Specialty Lubricants", why: "Provides protection for conveyor systems while ensuring safety in case of incidental food contact." },
      "Water/Washdown Contamination": { type: "NSF H1 High-tack Calcium Sulfonate Grease", category: "Specialty Lubricants", why: "Extremely resistant to water wash-out, keeping bearings lubricated during cleaning." },
      "High-Temp Chain Wear": { type: "NSF H1 Synthetic Oven Chain Lubricant", category: "Specialty Lubricants", why: "Withstands bakery/oven temperatures without carbonizing or smoking." },
      "Corrosion in Wet Environment": { type: "NSF H1 Rust-preventative Lubricant", category: "Specialty Lubricants", why: "Resists steam and humidity, protecting packing lines from rust." },
      "NSF H1/Regulatory Compliance": { type: "NSF H1 Registered Grease", category: "Specialty Lubricants", why: "Ensures compliance with HACCP audits and food safety regulations." }
    },
    "Mixers/Blenders": {
      "Incidental Food Contact Risk": { type: "NSF H1 Food-Grade Gear Oil (ISO VG 220)", category: "Gear Oils", why: "Protects high-torque mixer gearboxes with absolute food safety compliance." },
      "Water/Washdown Contamination": { type: "NSF H1 Gear Oil (High Demulsibility)", category: "Gear Oils", why: "Protects high-torque mixer gearboxes with absolute food safety compliance." },
      "High-Temp Chain Wear": { type: "NSF H1 Gear Oil (High Temp)", category: "Gear Oils", why: "Protects high-torque mixer gearboxes with absolute food safety compliance." },
      "Corrosion in Wet Environment": { type: "NSF H1 Gear Oil (Rust Inhibited)", category: "Gear Oils", why: "Protects high-torque mixer gearboxes with absolute food safety compliance." },
      "NSF H1/Regulatory Compliance": { type: "NSF H1 Registered Gear Oil", category: "Gear Oils", why: "Protects high-torque mixer gearboxes with absolute food safety compliance." }
    },
    "Packaging Machinery": {
      "Incidental Food Contact Risk": { type: "NSF H1 Food-Grade Fluid / Spray", category: "Specialty Lubricants", why: "Safe for high-speed carton/canning lines, preventing contamination." },
      "Water/Washdown Contamination": { type: "NSF H1 Packaging Fluid (Water Resistant)", category: "Specialty Lubricants", why: "Safe for high-speed carton/canning lines, preventing contamination." },
      "High-Temp Chain Wear": { type: "NSF H1 Packaging Fluid (High Temp)", category: "Specialty Lubricants", why: "Safe for high-speed carton/canning lines, preventing contamination." },
      "Corrosion in Wet Environment": { type: "NSF H1 Packaging Fluid (Rust Inhibited)", category: "Specialty Lubricants", why: "Safe for high-speed carton/canning lines, preventing contamination." },
      "NSF H1/Regulatory Compliance": { type: "NSF H1 Registered Packaging Fluid", category: "Specialty Lubricants", why: "Safe for high-speed carton/canning lines, preventing contamination." }
    },
    "Compressors": {
      "Incidental Food Contact Risk": { type: "NSF H1 Food-Grade Compressor Oil (ISO VG 46)", category: "Compressor Oils", why: "Ensures oil-free/safe compressed air used for blowing or packaging." },
      "Water/Washdown Contamination": { type: "NSF H1 Compressor Oil (High Demulsibility)", category: "Compressor Oils", why: "Ensures oil-free/safe compressed air used for blowing or packaging." },
      "High-Temp Chain Wear": { type: "NSF H1 Compressor Oil (High Temp)", category: "Compressor Oils", why: "Ensures oil-free/safe compressed air used for blowing or packaging." },
      "Corrosion in Wet Environment": { type: "NSF H1 Compressor Oil (Rust Inhibited)", category: "Compressor Oils", why: "Ensures oil-free/safe compressed air used for blowing or packaging." },
      "NSF H1/Regulatory Compliance": { type: "NSF H1 Registered Compressor Oil", category: "Compressor Oils", why: "Ensures oil-free/safe compressed air used for blowing or packaging." }
    },
    "Wash-down Area Bearings": {
      "Incidental Food Contact Risk": { type: "NSF H1 Water-resistant Synthetic Grease", category: "Greases", why: "Resists wash-down water and sanitizing chemicals in meat/dairy plants." },
      "Water/Washdown Contamination": { type: "NSF H1 High-tack Calcium Sulfonate Grease", category: "Greases", why: "Extremely resistant to water wash-out, keeping bearings lubricated during cleaning." },
      "High-Temp Chain Wear": { type: "NSF H1 Grease (High Temp)", category: "Greases", why: "Resists wash-down water and sanitizing chemicals in meat/dairy plants." },
      "Corrosion in Wet Environment": { type: "NSF H1 Grease (Rust Inhibited)", category: "Greases", why: "Resists wash-down water and sanitizing chemicals in meat/dairy plants." },
      "NSF H1/Regulatory Compliance": { type: "NSF H1 Registered Grease", category: "Greases", why: "Resists wash-down water and sanitizing chemicals in meat/dairy plants." }
    }
  }
};

function handleCustomInput(selectEl, customInputId, labelText, placeholderText) {
  const parentField = selectEl.closest(".field, .field-widget");
  if (!parentField) return;
  
  const existingCustom = parentField.parentElement.querySelector(`#${customInputId}-wrapper`);
  const isOther = selectEl.value === "other";
  
  if (isOther) {
    if (!existingCustom) {
      const wrapper = document.createElement("div");
      wrapper.id = `${customInputId}-wrapper`;
      wrapper.className = parentField.className;
      wrapper.style.transition = "all 0.3s ease";
      
      const label = document.createElement("label");
      label.htmlFor = customInputId;
      label.textContent = labelText;
      label.style.fontWeight = "600";
      
      const input = document.createElement("input");
      input.type = "text";
      input.id = customInputId;
      input.name = customInputId;
      input.placeholder = placeholderText;
      input.required = true;
      input.className = "custom-text-input";
      
      // Inline styles to match website dark theme
      input.style.width = "100%";
      input.style.padding = "12px 16px";
      input.style.border = "1px solid rgba(255, 255, 255, 0.15)";
      input.style.borderRadius = "8px";
      input.style.background = "rgba(10, 25, 47, 0.5)";
      input.style.color = "#ffffff";
      input.style.fontSize = "0.95rem";
      input.style.marginTop = "8px";
      input.style.boxSizing = "border-box";
      input.style.transition = "all 0.3s ease";
      
      input.addEventListener("focus", () => {
        input.style.borderColor = "var(--secondary, #3a7bd5)";
        input.style.outline = "none";
        input.style.boxShadow = "0 0 0 3px rgba(58, 123, 213, 0.25)";
      });
      input.addEventListener("blur", () => {
        input.style.borderColor = "rgba(255, 255, 255, 0.15)";
        input.style.boxShadow = "none";
      });
      
      const selectWrapper = parentField.querySelector(".select-wrapper");
      if (selectWrapper) {
        // Widget style
        wrapper.appendChild(label);
        const inputContainer = document.createElement("div");
        inputContainer.className = "input-wrapper";
        inputContainer.appendChild(input);
        wrapper.appendChild(inputContainer);
      } else {
        // Normal field style
        wrapper.appendChild(label);
        wrapper.appendChild(input);
      }
      
      parentField.insertAdjacentElement("afterend", wrapper);
    }
  } else {
    if (existingCustom) {
      existingCustom.remove();
    }
  }
}

function updateApplicationDropdown(form, industryVal) {
  const appSelect = form.querySelector('[name="application"]');
  const probSelect = form.querySelector('[name="problem"]');
  if (!appSelect) return;

  const industrySelect = form.querySelector('[name="industry"]');
  handleCustomInput(industrySelect, "custom-industry", "Specify Industry", "Type your industry name...");

  if (industryVal === "other") {
    appSelect.innerHTML = '<option value="other">Other (Specify below)</option>';
    appSelect.value = "other";
    appSelect.disabled = false;
    handleCustomInput(appSelect, "custom-application", "Specify Application", "Type your machine/application...");
    
    if (probSelect) {
      probSelect.innerHTML = '<option value="other">Other (Specify below)</option>';
      probSelect.value = "other";
      probSelect.disabled = false;
      handleCustomInput(probSelect, "custom-problem", "Specify Problem / Primary Issue", "Type your problem/concern...");
    }
    return;
  }
  
  // Clean up dependent custom inputs
  handleCustomInput(appSelect, "custom-application", "", "");
  if (probSelect) {
    handleCustomInput(probSelect, "custom-problem", "", "");
  }

  appSelect.innerHTML = '<option value="">Choose application</option>';
  
  if (!industryVal || !lubricantRecommendations[industryVal]) {
    appSelect.disabled = true;
    if (probSelect) {
      probSelect.innerHTML = '<option value="">Choose problem</option>';
      probSelect.disabled = true;
    }
    return;
  }

  const availableApps = Object.keys(lubricantRecommendations[industryVal]);
  availableApps.forEach(appKey => {
    const option = document.createElement("option");
    option.value = appKey;
    option.textContent = appKey;
    appSelect.appendChild(option);
  });
  
  const otherOption = document.createElement("option");
  otherOption.value = "other";
  otherOption.textContent = "Other (Specify)...";
  appSelect.appendChild(otherOption);
  
  appSelect.disabled = false;
  
  if (probSelect) {
    probSelect.innerHTML = '<option value="">Choose problem</option>';
    probSelect.disabled = true;
  }
}

function updateProblemDropdown(form, industryVal, appVal) {
  const probSelect = form.querySelector('[name="problem"]');
  if (!probSelect) return;

  const appSelect = form.querySelector('[name="application"]');
  handleCustomInput(appSelect, "custom-application", "Specify Application", "Type your machine/application...");

  if (appVal === "other") {
    probSelect.innerHTML = '<option value="other">Other (Specify below)</option>';
    probSelect.value = "other";
    probSelect.disabled = false;
    handleCustomInput(probSelect, "custom-problem", "Specify Problem / Primary Issue", "Type your problem/concern...");
    return;
  }
  
  handleCustomInput(probSelect, "custom-problem", "", "");

  probSelect.innerHTML = '<option value="">Choose problem</option>';
  
  if (!industryVal || !appVal || !lubricantRecommendations[industryVal]?.[appVal]) {
    probSelect.disabled = true;
    return;
  }

  const availableProbs = Object.keys(lubricantRecommendations[industryVal][appVal]);
  availableProbs.forEach(probKey => {
    const option = document.createElement("option");
    option.value = probKey;
    option.textContent = probKey;
    probSelect.appendChild(option);
  });
  
  const otherOption = document.createElement("option");
  otherOption.value = "other";
  otherOption.textContent = "Other (Specify)...";
  probSelect.appendChild(otherOption);
  
  probSelect.disabled = false;
}

function getRecommendation(industry, application, problem) {
  return lubricantRecommendations[industry]?.[application]?.[problem] || {
    type: "Application-specific industrial lubricant",
    category: "Technical Recommendation Required",
    why: "Your operating conditions may need a viscosity, additive package, or brand approval review. Our team can suggest the exact lubricant after a quick discussion."
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".finder-form, .finder-form-widget");
  
  forms.forEach(form => {
    const industrySelect = form.querySelector('[name="industry"]');
    const appSelect = form.querySelector('[name="application"]');
    const probSelect = form.querySelector('[name="problem"]');
    
    let result = null;
    const widgetCard = form.closest(".finder-widget-card");
    if (widgetCard) {
      result = widgetCard.querySelector("#finder-result");
    } else {
      result = document.getElementById("finder-result");
    }
    
    if (industrySelect && appSelect) {
      if (!industrySelect.value) {
        appSelect.innerHTML = '<option value="">Choose application</option>';
        appSelect.disabled = true;
        if (probSelect) {
          probSelect.innerHTML = '<option value="">Choose problem</option>';
          probSelect.disabled = true;
        }
      }
      
      industrySelect.addEventListener("change", (e) => {
        updateApplicationDropdown(form, e.target.value);
      });
      
      appSelect.addEventListener("change", (e) => {
        updateProblemDropdown(form, industrySelect.value, e.target.value);
      });

      if (probSelect) {
        probSelect.addEventListener("change", (e) => {
          handleCustomInput(probSelect, "custom-problem", "Specify Problem / Primary Issue", "Type your problem/concern...");
        });
      }
    }
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!result) return;
      
      const data = new FormData(form);
      const industry = data.get("industry");
      const application = data.get("application");
      const problem = data.get("problem");
      
      const customIndustry = data.get("custom-industry");
      const customApplication = data.get("custom-application");
      const customProblem = data.get("custom-problem");
      
      const recommendation = getRecommendation(industry, application, problem);
      
      // Visual labels for display and whatsapp message
      let industryLabel = industry;
      if (industry === "other" && customIndustry) {
        industryLabel = customIndustry;
      } else if (industrySelect) {
        const industryOption = industrySelect.querySelector(`option[value="${industry}"]`);
        industryLabel = industryOption ? industryOption.textContent : industry;
      }
      
      const appLabel = (application === "other" && customApplication) ? customApplication : application;
      const probLabel = (problem === "other" && customProblem) ? customProblem : problem;
      
      const isCustom = (industry === "other" || application === "other" || problem === "other");
      
      let message;
      if (isCustom) {
        message = `*Custom Lubricant Inquiry* 🔍\n\nHello Lubricant Solutions, I have a custom lubrication requirement and would like to get a tailored recommendation.\n\n🏭 *Industry:* ${industryLabel}\n⚙️ *Application:* ${appLabel}\n⚠️ *Problem/Issue:* ${probLabel}\n\nPlease recommend the best suited product grade and share pricing details.`;
      } else {
        message = `*Lubricant Finder Inquiry* 🔍\n\nHello Lubricant Solutions, I used the online Lubricant Finder tool and would like to get an exact product/brand recommendation.\n\n🏭 *Industry:* ${industryLabel}\n⚙️ *Application:* ${appLabel}\n⚠️ *Problem/Issue:* ${probLabel}\n\n💡 *Recommended Type:* ${recommendation.type}\n\nPlease share the recommended product grades and pricing.`;
      }
      
      if (isCustom) {
        result.innerHTML = `
          <h3>Get Custom Lubrication Solution</h3>
          <p>Since you have a custom application or a specialized issue, our lubrication engineers will verify technical specifications and suggest the exact grade. Click below to send your requirements via WhatsApp.</p>
          <div class="pill-row"><span class="pill">${industryLabel}</span><span class="pill">${appLabel}</span><span class="pill">${probLabel}</span></div>
          <div class="stack-actions">
            <a class="btn btn-primary" href="${buildWhatsAppLink(message)}" target="_blank" rel="noopener">Send Details on WhatsApp</a>
            ${widgetCard ? `<button type="button" class="btn btn-ghost" id="finder-reset-btn">Find Another Lubricant</button>` : `<a class="btn btn-ghost" href="/contact.html">Request a Site Consultation</a>`}
          </div>
        `;
      } else {
        result.innerHTML = `
          <h3>Recommended Lubrication Direction</h3>
          <p><strong>Recommended lubricant type:</strong> ${recommendation.type}</p>
          <p><strong>Suggested product category:</strong> ${recommendation.category}</p>
          <p><strong>Why this fits:</strong> ${recommendation.why}</p>
          <div class="pill-row"><span class="pill">${industryLabel}</span><span class="pill">${appLabel}</span><span class="pill">${probLabel}</span></div>
          <div class="stack-actions">
            <a class="btn btn-primary" href="${buildWhatsAppLink(message)}" target="_blank" rel="noopener">Get Recommendation on WhatsApp</a>
            ${widgetCard ? `<button type="button" class="btn btn-ghost" id="finder-reset-btn">Find Another Lubricant</button>` : `<a class="btn btn-ghost" href="/contact.html">Request a Site Consultation</a>`}
          </div>
        `;
      }
      
      if (widgetCard) {
        result.style.display = "block";
        widgetCard.classList.add("has-result");
        
        const resetBtn = result.querySelector("#finder-reset-btn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            form.reset();
            
            // Remove any custom fields that were appended
            const customWrappers = form.querySelectorAll("[id$='-wrapper']");
            customWrappers.forEach(w => w.remove());

            if (appSelect) {
              appSelect.innerHTML = '<option value="">Choose application</option>';
              appSelect.disabled = true;
            }
            if (probSelect) {
              probSelect.innerHTML = '<option value="">Choose problem</option>';
              probSelect.disabled = true;
            }
            widgetCard.classList.remove("has-result");
            result.style.display = "none";
          });
        }
      }
    });
  });
});
