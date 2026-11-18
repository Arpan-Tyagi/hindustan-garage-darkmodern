export interface ServiceBay {
  id: string;
  bayNumber: string;
  title: string;
  subtitle: string;
  category: 'Diagnostic' | 'Marque Care' | 'Body & Paint' | 'Mechanical' | 'Electrical' | 'Commercial';
  leadTech: string;
  turnaround: string;
  warranty: string;
  description: string;
  tooling: string[];
  deliverables: string[];
  pricingGuideline: string;
  insuranceCashless: boolean;
  image: string;
}

export const SERVICE_BAYS: ServiceBay[] = [
  {
    id: 'bay-01-diagnostics',
    bayNumber: 'BAY 01',
    title: 'Engine & ECM Advanced Diagnostics',
    subtitle: 'Digital Oscilloscope, CAN-Bus Analysis & Live Telemetry',
    category: 'Diagnostic',
    leadTech: 'Senior Diagnostician R. K. Srivastava (24 Yrs Exp)',
    turnaround: '2 - 6 Hours Diagnostic Window',
    warranty: '12-Month Calibration Guarantee',
    description: 'Pinpoint electronic anomalies, misfires, timing desynchronization, and erratic transmission shifts without trial-and-error part swapping. Utilizing Bosch KTS 590, Autel MaxiSys Ultra, and OEM VAG/BMW factory scan interfaces.',
    tooling: [
      'Bosch KTS 590 Diagnostic Interface with DoIP & PassThru',
      'PicoScope 4425A 4-Channel Automotive Oscilloscope',
      'Autel MaxiSys Ultra Intelligent Diagnostics System',
      'OEM VCDS (HEX-NET) & BMW ISTA/D Dedicated Diagnostic Harnesses'
    ],
    deliverables: [
      'Comprehensive Pre-Scan & Post-Scan DTC Error Log Report',
      'Live Sensor Telemetry Graph (Fuel Trim, Boost, O2 Lambda)',
      'Actuator Functional Testing & ECM Adaptation Reset',
      'Preventive Component Degradation Roadmap'
    ],
    pricingGuideline: 'Diagnostic Evaluation from ₹1,850 • Full ECM Mapping on Quote',
    insuranceCashless: false,
    image: '/images/bay01_ecm_diagnostics.jpg'
  },
  {
    id: 'bay-02-luxury-marques',
    bayNumber: 'BAY 02',
    title: 'Luxury Marque Servicing & Overhaul',
    subtitle: 'BMW, Mercedes-Benz, Audi, JLR & Porsche Specialized Atelier',
    category: 'Marque Care',
    leadTech: 'Master Tech Arif Khan (Specialist: VAG & Mercedes M274/OM654)',
    turnaround: 'Same Day Periodic • 48-72h Major Overhaul',
    warranty: '24-Month / 20,000 KM Atelier Warranty',
    description: 'Dealership-grade precision at transparent atelier pricing. From Mercedes-Benz 9G-Tronic transmission flushes to BMW Valvetronic motor calibrations and Audi Quattro differential servicing with Motul/Liqui Moly factory approved fluids.',
    tooling: [
      'Launch X-431 PAD VII with OEM Online Coding & Programming',
      'ZF 8HP / 9HP Automatic Transmission Fluid Flushing Station',
      'Pneumatic Camshaft Locking & Timing Alignment Toolkits',
      'Digital Laser Brake Caliper & Ceramic Rotor Depth Gauges'
    ],
    deliverables: [
      'Strict 75-Point German Marque Mechanical Inspection',
      'Manufacturer Grade Synthetic Oil Flush (Motul 8100 X-cess Gen2)',
      'OEM Filter Replacement (Mann-Filter / Mahle Original)',
      'Digital Service Book (iDrive / MBUX) Centralized Reset'
    ],
    pricingGuideline: 'Comprehensive A-Service from ₹14,500 • Major B-Service from ₹24,000',
    insuranceCashless: false,
    image: '/images/bay02_luxury_marque.jpg'
  },
  {
    id: 'bay-03-paint-booth',
    bayNumber: 'BAY 03',
    title: 'Cashless Body Repair & Paint Booth',
    subtitle: 'Climate-Controlled Downdraft Booth & PPG Spectrophotometer Color Match',
    category: 'Body & Paint',
    leadTech: 'Master Painter Surendra Pal (PPG Certified Master Refinisher)',
    turnaround: '3 - 5 Days Average Cashless Turnaround',
    warranty: '3-Year Paint Gloss & Anti-Peeling Warranty',
    description: 'Prayagrajs premier dust-free pressurized downdraft baking booth. Full aluminum and high-tensile steel panel beating, Celette bench chassis alignment, and computerized waterborne paint formulation ensuring 100% factory match.',
    tooling: [
      'Yokistar Commercial Heated Downdraft Baking Oven Booth',
      'PPG RapidMatch XI Digital Spectrophotometer',
      'Celette 3D Laser Chassis Pulling & Straightening Jig',
      'SATAjet X 5500 Digital HVLP Precision Spray Guns'
    ],
    deliverables: [
      'End-to-End Cashless Insurance Claim Processing & Surveyor Coordination',
      'Anti-Corrosion Primer Application with Infrared Rapid Curing',
      'Multistage Ceramic Clear Coat with 9H Scratch Resistance',
      'Complimentary Interior Detail & Ozone Sanitization upon Delivery'
    ],
    pricingGuideline: 'Zero Out-of-Pocket on Cashless Claims • Per Panel from ₹3,400',
    insuranceCashless: true,
    image: '/images/bay03_paint_booth.jpg'
  },
  {
    id: 'bay-04-suspension',
    bayNumber: 'BAY 04',
    title: 'High-Performance Suspension & Geometry',
    subtitle: '3D High-Definition Camera Alignment & Dynamic Damper Calibration',
    category: 'Mechanical',
    leadTech: 'Chassis Tech V. K. Maurya (Specialist: AirMatic & Dynamic Drive)',
    turnaround: '2 - 4 Hours Alignment • 1 Day Air Strut Rebuild',
    warranty: '12-Month Alignment & Hardware Guarantee',
    description: 'Eliminate high-speed vibrations, pulling, and uneven tire scrubbing. Dedicated laser alignment for multi-link luxury setups, electronic power steering recalibration, and specialized hydraulic/pneumatic air-strut overhaul.',
    tooling: [
      'Hunter HawkEye Elite 3D Wheel Alignment System with QuickGrip Targets',
      'Corghi Uniformity Automated High-Speed Wheel Balancer',
      'Hydraulic Coil Spring Compressor Station (2,500 kg capacity)',
      'Mercedes-Benz & Audi Air Suspension Pressure Testing Manifold'
    ],
    deliverables: [
      'Computerized High-Definition Before & After Geometry Telemetry Printout',
      'Steering Angle Sensor (SAS) Zero-Point Calibration',
      'Subframe Bushing & Ball Joint Play Evaluation',
      'High-Speed Road Force Harmonic Balancing'
    ],
    pricingGuideline: '3D Precision Alignment from ₹850 • Full Suspension Refresh on Quote',
    insuranceCashless: false,
    image: '/images/bay04_suspension_geometry.jpg'
  },
  {
    id: 'bay-05-climate-electrical',
    bayNumber: 'BAY 05',
    title: 'Climate Control & Auto-Electrical Atelier',
    subtitle: 'R134a/R1234yf Dual Gas Recovery, Evaporator Descaling & CAN Harness Re-wiring',
    category: 'Electrical',
    leadTech: 'Lead Auto-Electrician Mohd. Naushad (19 Yrs Experience)',
    turnaround: '3 - 5 Hours Deep AC Overhaul',
    warranty: '1-Year Chilling & Compressor Seal Warranty',
    description: 'Engineered specifically for Prayagrajs brutal 45°C summer peaks. Precision electronic refrigerant recycling, acoustic leak detection with nitrogen pressure testing, condenser ultrasonic cleaning, and complex alternator/starter restoration.',
    tooling: [
      'Robinair AC1234-7 Fully Automated R134a/R1234yf Recovery Station',
      'Infrared Thermal Imaging Camera for Cabin Vent Delta Inspection',
      'Digital Nitrogen Pressure Test Rig (up to 30 Bar)',
      'Automotive Ultrasonic Leak & Arc Detector'
    ],
    deliverables: [
      'Cabin Vent Delta Cooling Test (Target: 4°C - 7°C at Center Vents)',
      'Automated Gas Evacuation, Vacuum Dehydration & PAG Oil Refill',
      'Antibacterial Evaporator Foam Cleansing & Micro-filter Swap',
      'Alternator Voltage Ripple & Battery Health Telemetry Scan'
    ],
    pricingGuideline: 'AC Deep Service from ₹2,200 • Compressor Rebuild on Inspection',
    insuranceCashless: false,
    image: '/images/bay05_climate_electrical.jpg'
  },
  {
    id: 'bay-06-fleet',
    bayNumber: 'BAY 06',
    title: 'Corporate Fleet & Heavy SUV Care',
    subtitle: 'Fortuner, Scorpio-N, Innova Crysta & Commercial Fleet Protocol',
    category: 'Commercial',
    leadTech: 'Fleet Operations Supervisor G. P. Tiwari',
    turnaround: 'Guaranteed 8-Hour Priority Fleet Turnaround',
    warranty: 'Fleet Maintenance SLA with Logbook Preservation',
    description: 'High-torque utility vehicle management for institutions, corporate executives, and high-mileage highway runners. Heavy-duty 4x4 differential fluid renewal, clutch plate centering, braking overhaul, and priority preventive maintenance schedules.',
    tooling: [
      'Twin-Post 5,000 KG Heavy Vehicle Electro-Hydraulic Lifts',
      'Pneumatic Brake Fluid Exchanger with Pressure Bleeding',
      'Heavy Duty Common Rail Diesel Injector Flow Bench',
      'Commercial Fleet Diagnostic Management Portal'
    ],
    deliverables: [
      'Comprehensive 60-Point Fleet Safety Checklist Audit',
      'Heavy-Duty Synthetic 5W-30 / 15W-40 Diesel Lube Protocol',
      'Differential & Transfer Case Hypoid Gear Lube Replacement',
      'Tax-Compliant Consolidated Corporate GST Billing & Fleet Logs'
    ],
    pricingGuideline: 'Fleet SLA Packages from ₹3,800/vehicle/quarter • Custom Corporate Quotes',
    insuranceCashless: true,
    image: '/images/bay06_fleet_suv.jpg'
  }
];
