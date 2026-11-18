export interface PartItem {
  id: string;
  sku: string;
  name: string;
  category: 'Engine & Clutch' | 'Braking Systems' | 'Suspension & Steering' | 'Filtration & Fluids' | 'Lighting & Body' | 'Sensors & Electrical';
  compatibility: string;
  oemBrand: string;
  dealershipPrice: number;
  speedPartsPrice: number;
  savingsPercentage: number;
  stockStatus: 'In Stock (Medical Chauraha Hub)' | 'Same-Day Dispatch' | 'B2B Wholesale Lot Available';
  warranty: string;
  description: string;
  keySpecs: string[];
  image: string;
}

export const SPEED_PARTS_ITEMS: PartItem[] = [
  {
    id: 'part-01-hyundai-clutch',
    sku: 'HYU-41200-2D000',
    name: 'Hyundai Genuine Dual-Clutch (DCT) Friction Pack & Solenoid Kit',
    category: 'Engine & Clutch',
    compatibility: 'Hyundai Creta 1.4/1.5 Turbo, Venue DCT, i20 N-Line (2019-2024)',
    oemBrand: 'Hyundai Mobis Original',
    dealershipPrice: 42500,
    speedPartsPrice: 32800,
    savingsPercentage: 23,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '12 Months / 20,000 KM Mobis Genuine Warranty',
    description: 'Factory-sealed original clutch assembly for 7-speed dual-clutch dry transmissions. Solves overheating, judder, and laggy gear changes. Sourced directly with zero distributor markups.',
    keySpecs: [
      'High-Thermal Resistant Ceramic-Organic Composite Lining',
      'Pre-calibrated Dual Engagement Splines',
      'Includes Primary & Secondary Shift Fork Actuators'
    ],
    image: '/images/part_hyundai_clutch.jpg'
  },
  {
    id: 'part-02-hyundai-timing-kit',
    sku: 'HYU-24321-2B620',
    name: 'Hyundai 1.4/1.6 CRDi Diesel Timing Chain & Tensioner Master Overhaul Kit',
    category: 'Engine & Clutch',
    compatibility: 'Hyundai Creta, Verna, i20 CRDi, Kia Seltos 1.5 D',
    oemBrand: 'Hyundai Mobis Original',
    dealershipPrice: 16800,
    speedPartsPrice: 12900,
    savingsPercentage: 23,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '24 Months Genuine Replacement Warranty',
    description: 'Complete timing synchronization suite including high-tensile link chain, hydraulic tensioner arm, guide rails, and crankshaft sprocket. Eliminates cold-start metallic clatter.',
    keySpecs: [
      'Induction-hardened Alloy Steel Links for zero stretch',
      'Hydraulic Damper with Non-Return Pressure Valve',
      'Tested to 200,000 KM Operating Longevity'
    ],
    image: '/images/part_timing_kit.jpg'
  },
  {
    id: 'part-03-brembo-ceramic-pads',
    sku: 'BRM-P06088N',
    name: 'Brembo Premium Ceramic Low-Metallic Front Brake Pad Set',
    category: 'Braking Systems',
    compatibility: 'BMW 3-Series G20, 5-Series G30, X3 G01, Mercedes-Benz C-Class W205',
    oemBrand: 'Brembo S.p.A. Italy (Authorized Import)',
    dealershipPrice: 19500,
    speedPartsPrice: 14800,
    savingsPercentage: 24,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '12 Months Factory Warranty',
    description: 'High-temperature ceramic friction material engineered for European luxury saloons. Superior bite in wet and highway conditions with 90% less black brake dust on alloy rims.',
    keySpecs: [
      'ECE R90 Certified Compound with Multilayer Acoustic Shim',
      'Extreme Thermal Dissipation up to 650°C',
      'Pre-fitted with Wear Sensor Lead Plug'
    ],
    image: '/images/part_brembo_pads.jpg'
  },
  {
    id: 'part-04-maruti-ventilated-rotors',
    sku: 'TVX-55311-M68P0',
    name: 'TVS Girling High-Carbon Ventilated Front Brake Disc Rotors (Pair)',
    category: 'Braking Systems',
    compatibility: 'Maruti Suzuki Brezza, Grand Vitara, Baleno, Swift, Ertiga (2018-2025)',
    oemBrand: 'TVS / Maruti Suzuki Genuine OEM',
    dealershipPrice: 6200,
    speedPartsPrice: 4750,
    savingsPercentage: 23,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '12 Months Runout & Warp Guarantee',
    description: 'Precision balanced ventilated iron casting prevents high-speed steering wobble and brake fade during long downhill drives or sudden highway stops on UP expressways.',
    keySpecs: [
      'High-Carbon GG20 Gray Cast Iron with Anti-Rust Geomet Coating',
      'Mill-Balanced to Under 3.0 g/mm for Zero Vibration',
      'Curved Vent Vanes for 35% Faster Heat Dissipation'
    ],
    image: '/images/part_brake_rotors.jpg'
  },
  {
    id: 'part-05-monroe-struts',
    sku: 'MNR-742186SP',
    name: 'Monroe OESpectrum Nitrogen Gas-Charged Front Strut Assembly (Pair)',
    category: 'Suspension & Steering',
    compatibility: 'Toyota Fortuner / Hilux / Innova Crysta (2016-2024)',
    oemBrand: 'Monroe Tenneco OEM',
    dealershipPrice: 28400,
    speedPartsPrice: 22100,
    savingsPercentage: 22,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '24 Months Unlimited Mileage Warranty',
    description: 'Twin-tube valving engineered specifically to smooth out rural roads, expansion joints, and highway undulations. Keeps heavy 4x4 SUVs planted with zero floaty rebound.',
    keySpecs: [
      'Twin Technology Active Control System (TACS) Valving',
      'Micro-smooth Chrome Plated 16mm Piston Rod',
      'Low-friction All-Weather Synthetic Fluid Formulation'
    ],
    image: '/images/part_monroe_struts.jpg'
  },
  {
    id: 'part-06-motul-synthetic-lube',
    sku: 'MTL-8100-XC5W40',
    name: 'Motul 8100 X-cess Gen2 100% Synthetic 5W-40 Motor Oil (5L Can)',
    category: 'Filtration & Fluids',
    compatibility: 'BMW LL-01, Mercedes MB-Approval 229.5, Porsche A40, VW 502.00/505.00',
    oemBrand: 'Motul France (100% Tamper-Proof Pack)',
    dealershipPrice: 6850,
    speedPartsPrice: 5200,
    savingsPercentage: 24,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: 'Factory Sealed Hologram Authentic Seal',
    description: 'High HTHS viscosity synthetic lubricant tailored for high-output turbocharged and naturally aspirated petrol and diesel engines. Maximum anti-wear and sludge deterrence.',
    keySpecs: [
      '100% Synthetic Ester-Enhanced Base Stock',
      'Exceptional Shear Stability under High Thermal Stress',
      'Low Volatility reduces oil consumption in spirited driving'
    ],
    image: '/images/part_motul_oil.jpg'
  },
  {
    id: 'part-07-hyundai-headlight-led',
    sku: 'HYU-92101-M6000',
    name: 'Hyundai Genuine Trio-Beam Full LED Projector Headlamp Assembly (Right)',
    category: 'Lighting & Body',
    compatibility: 'Hyundai Creta SX / SX(O) / Knight Edition (2020-2023)',
    oemBrand: 'Hyundai Mobis Original Factory Sealed',
    dealershipPrice: 34500,
    speedPartsPrice: 26900,
    savingsPercentage: 22,
    stockStatus: 'Same-Day Dispatch',
    warranty: '12 Months Mobis Warranty',
    description: 'Direct plug-and-play original factory replacement with integrated DRL and crystal-optic high/low beams. No wiring cuts or CAN error messages.',
    keySpecs: [
      'High-impact Polycarbonate Lens with Anti-UV Scratch Coating',
      'Automotive Grade Osram LED Emitters (5,500K Pure Daylight)',
      'Built-in Stepper Motor for Dynamic Headlight Leveling'
    ],
    image: '/images/part_hyundai_headlight.jpg'
  },
  {
    id: 'part-08-bosch-oxygen-sensor',
    sku: 'BSH-0258017025',
    name: 'Bosch Wideband Lambda Oxygen (O2) Sensor with Direct-Fit Harness',
    category: 'Sensors & Electrical',
    compatibility: 'Audi A4/A6 2.0 TFSI, Skoda Superb, VW Passat, Hyundai Creta/Verna 1.5',
    oemBrand: 'Bosch Germany OEM Direct',
    dealershipPrice: 11200,
    speedPartsPrice: 8400,
    savingsPercentage: 25,
    stockStatus: 'In Stock (Medical Chauraha Hub)',
    warranty: '12 Months Bosch Factory Guarantee',
    description: 'Planar ceramic sensing element provides real-time air-fuel ratio telemetry to the engine control module, eliminating sluggish throttle response and poor mileage.',
    keySpecs: [
      'Rapid Light-off Ceramic Heater (Active in < 5 Seconds)',
      'Laser-welded Stainless Steel Protective Body against soot',
      'Pre-coated Anti-Seize Threads for clean torque seating'
    ],
    image: '/images/part_bosch_o2_sensor.jpg'
  }
];

export function generateWhatsAppPartLink(part: PartItem, wholesale: boolean = false): string {
  const phone = '918796576868';
  const text = wholesale
    ? `Hello Speed Parts (Medical Chauraha Hub), I would like to inquire regarding B2B WHOLESALE PRICING for:
• Part SKU: ${part.sku}
• Name: ${part.name}
• Target Compatibility: ${part.compatibility}
• Quantity Needed: [Please specify quantity]
Kindly provide wholesale availability and delivery timeline across Prayagraj.`
    : `Hello Speed Parts (Medical Chauraha Hub), I want to purchase the following genuine OEM part:
• Part: ${part.name}
• SKU: ${part.sku}
• Listed Price: ₹${part.speedPartsPrice.toLocaleString('en-IN')} (vs Dealership ₹${part.dealershipPrice.toLocaleString('en-IN')})
• Vehicle: [Enter My Car Model & Year]
Please confirm immediate counter pickup at Medical Chauraha or dispatch details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
