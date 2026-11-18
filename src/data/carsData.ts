export interface MasteredCar {
  id: string;
  bayNumber: string;
  car: string;
  year: string;
  tier: 'Luxury Marque' | 'Everyday Four-Wheeler';
  engineCode: string;
  odometer: string;
  ownerOrigin: string;
  scope: string;
  status: string;
  turnaround: string;
  insurance: string;
  image: string;
  keyTelemetry: { label: string; value: string }[];
  diagnosisReport: string;
  masterTechQuote: string;
}

export const MASTERED_CARS: MasteredCar[] = [
  {
    id: 'car-01-mercedes-w213',
    bayNumber: 'BAY 02',
    car: 'Mercedes-Benz E-Class W213 (E 220 d)',
    year: '2021',
    tier: 'Luxury Marque',
    engineCode: 'OM654 2.0L I4 Turbo Diesel',
    odometer: '68,420 KM',
    ownerOrigin: 'Tagore Town, Prayagraj',
    scope: 'AirMatic Air Strut Overhaul & 9G-Tronic Transmission Mechatronics Service',
    status: 'Delivered • 100% Ride Height & Pressure Calibrated',
    turnaround: '48 Hours',
    insurance: 'Preventive Atelier Maintenance',
    image: '/images/car_mercedes_w213.jpg',
    keyTelemetry: [
      { label: 'Suspension Pressure', value: '14.2 Bar (Nominal)' },
      { label: 'Gear Shift Lag', value: 'Reduced by 68%' },
      { label: 'Cabin NVH Rating', value: '38.4 dB @ 100 km/h' },
      { label: 'Parts Utilized', value: 'OEM Bilstein B4 Air Struts' }
    ],
    diagnosisReport: 'Persistent right-rear vehicle sagging after overnight parking. High-pressure transducer identified micro-perforation in pneumatic bladder seal. 9G-Tronic fluid showing thermal degradation.',
    masterTechQuote: 'Avoided a ₹2.8 Lakh dealership sub-assembly replacement by rebuilding the pneumatic core with OEM Bilstein dampers and recalibrating the CAN ride-height sensor on our Hunter 3D jig.'
  },
  {
    id: 'car-02-bmw-530d',
    bayNumber: 'BAY 01',
    car: 'BMW 5-Series 530d M-Sport (G30)',
    year: '2020',
    tier: 'Luxury Marque',
    engineCode: 'B57 3.0L Inline-6 TwinPower Turbo',
    odometer: '54,180 KM',
    ownerOrigin: 'George Town, Prayagraj',
    scope: 'ZF 8HP Transmission Fluid Flush, Intake Swirl Flap Decarb & Valvetronic Tuning',
    status: 'Delivered • Dyno & Telemetry Certified',
    turnaround: '24 Hours',
    insurance: 'Atelier Performance Tuning',
    image: '/images/car_bmw_530d.jpg',
    keyTelemetry: [
      { label: 'Boost Pressure', value: '2.45 Bar Peak' },
      { label: 'Fluid Temp Delta', value: '-12°C after ZF Flush' },
      { label: '0-100 km/h', value: '5.62s (GPS Verified)' },
      { label: 'Lube Spec', value: 'Motul 8100 X-Clean+ 5W30' }
    ],
    diagnosisReport: 'Hesitation between 2nd and 3rd gear under kickdown. Carbon buildup detected in intake tract with walnut blast inspection. Valvetronic servomotor operating outside factory tolerance.',
    masterTechQuote: 'The B57 straight-six is an automotive masterpiece. With ZF Lifeguard 8 transmission fluid and walnut shell decarbonization, we restored original factory throttle punch.'
  },
  {
    id: 'car-03-audi-q7',
    bayNumber: 'BAY 03',
    car: 'Audi Q7 45 TDI Quattro',
    year: '2019',
    tier: 'Luxury Marque',
    engineCode: 'CVMD 3.0L V6 TDI Common-Rail',
    odometer: '92,300 KM',
    ownerOrigin: 'Civil Lines, Prayagraj',
    scope: 'Cashless Front-Right Quarter Reconstruction, PPG Daytona Gray Pearl Coat & Radar Calibration',
    status: 'Delivered • Zero Out-of-Pocket Cashless Settlement',
    turnaround: '5 Working Days',
    insurance: 'HDFC ERGO Cashless Insurance Partner',
    image: '/images/car_audi_q7.jpg',
    keyTelemetry: [
      { label: 'Color Deviation', value: 'ΔE < 0.2 (PPG Spectro)' },
      { label: 'ADAS Radar Drift', value: '0.00° After Laser Align' },
      { label: 'Clear Coat Depth', value: '135 Microns Mirror Gloss' },
      { label: 'Claim Sanction', value: '₹1,94,200 (100% Cashless)' }
    ],
    diagnosisReport: 'Significant deformation to front-right fender, matrix LED headlight bracket, and radar housing following highway impact on NH-19. Full cashless surveyor approval coordinated in 4 hours.',
    masterTechQuote: 'Radar alignment and camera recalibration require mathematical perfection. In Bay 03, our computerized frame jig restored structural chassis integrity back to factory tolerances.'
  },
  {
    id: 'car-04-toyota-fortuner',
    bayNumber: 'BAY 06',
    car: 'Toyota Fortuner 4x4 AT',
    year: '2022',
    tier: 'Everyday Four-Wheeler',
    engineCode: '1GD-FTV 2.8L D-4D High-Torque Turbo',
    odometer: '112,450 KM',
    ownerOrigin: 'Mirzapur Catchment (Transferred to M.G. Marg)',
    scope: 'Heavy-Duty 4x4 Differential Service, Heavy Brake Rotor Upgrade & Off-Road Suspension Refresh',
    status: 'Delivered • Extreme Load Road-Tested',
    turnaround: '1 Day Priority Fleet Turnaround',
    insurance: 'Commercial Fleet SLA Protocol',
    image: '/images/car_toyota_fortuner.jpg',
    keyTelemetry: [
      { label: 'Stopping Distance', value: '38.2m @ 80 km/h (-15%)' },
      { label: 'Diff Fluid Temp', value: 'Operating within 75°C' },
      { label: 'Payload Stability', value: 'Zero Body Roll Sag' },
      { label: 'Torque Spec', value: '500 Nm D-4D Checked' }
    ],
    diagnosisReport: 'Highway shudder under braking at high speeds; differential fluid severely oxidized from river crossing and heavy rural duty in Mirzapur/Sonbhadra routes.',
    masterTechQuote: 'The 1GD engine runs forever if maintained with discipline. We equipped high-carbon slotted brake rotors and renewed transfer case hypoid gear lubricants to withstand brutal highway hauls.'
  },
  {
    id: 'car-05-hyundai-creta-dct',
    bayNumber: 'BAY 01',
    car: 'Hyundai Creta 1.4 Turbo-GDi DCT',
    year: '2022',
    tier: 'Everyday Four-Wheeler',
    engineCode: 'Kappa 1.4L T-GDi Direct Injection',
    odometer: '42,100 KM',
    ownerOrigin: 'Kalyani Devi, Prayagraj',
    scope: 'Dual-Clutch Transmission (DCT) Actuator Calibration & OEM Parts Sourced via Speed Parts Hub',
    status: 'Delivered • Smooth Shifting Verified',
    turnaround: '5 Hours Same-Day',
    insurance: 'Speed Parts Direct OEM Replacement',
    image: '/images/car_hyundai_creta_dct.jpg',
    keyTelemetry: [
      { label: 'Clutch Slip Rate', value: '0.2% (OEM Factory Spec)' },
      { label: 'Part Price Delta', value: 'Saved 24% vs Dealership' },
      { label: 'Speed Parts SKU', value: 'HYU-41200-2D000 OEM Kit' },
      { label: 'Fuel Economy', value: 'Restored to 14.8 km/l' }
    ],
    diagnosisReport: 'Transmission overheating warning on instrument cluster during stop-and-go traffic across Naini Bridge. Diagnostic logged clutch actuator thermal threshold trip.',
    masterTechQuote: 'Sourced genuine Hyundai OEM DCT solenoids and dual-clutch friction pack directly from our Speed Parts Medical Chauraha hub within 45 minutes, saving the client ₹14,000 against authorized service center billing.'
  },
  {
    id: 'car-06-maruti-grand-vitara',
    bayNumber: 'BAY 05',
    car: 'Maruti Suzuki Grand Vitara AWD Alpha+',
    year: '2023',
    tier: 'Everyday Four-Wheeler',
    engineCode: 'K15C 1.5L Dual-Jet Smart Hybrid AWD',
    odometer: '31,800 KM',
    ownerOrigin: 'Naini, Prayagraj',
    scope: 'Multi-Point Hybrid Battery Health Audit, R1234yf AC Climate Recharge & Underbody Polymer Seal',
    status: 'Delivered • Ready for Sangam Summer Peak',
    turnaround: '3 Hours',
    insurance: 'Periodic Scheduled Care',
    image: '/images/car_maruti_grand_vitara.jpg',
    keyTelemetry: [
      { label: 'Center Vent Temp', value: '5.2°C @ Ambient 43°C' },
      { label: 'Lithium-Ion SOH', value: '98.4% State of Health' },
      { label: 'Underbody Shield', value: 'Anti-Corrosion 500 Micron' },
      { label: 'AWD Engagement', value: '0.12s Lock Response' }
    ],
    diagnosisReport: 'AC cooling efficiency dropping under high ambient Prayagraj afternoon temperatures (43°C); owner requested pre-monsoon rustproofing for riverbank driving.',
    masterTechQuote: 'Calibrated the R1234yf climate loop using our automated Robinair station and sealed the underbody with anti-saline polymer barrier for monsoons around Sangam and Yamuna ghats.'
  }
];
