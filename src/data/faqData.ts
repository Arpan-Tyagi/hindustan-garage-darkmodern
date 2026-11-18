export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01-cashless',
    category: 'Insurance & Claims',
    question: 'How does the Cashless Insurance Claim process work at Hindustan Garage?',
    answer: 'We have direct tie-ups with ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India Assurance, and Oriental Insurance. When an incident occurs, bring or tow your vehicle directly to 56, M.G. Marg. We initiate the claim on your behalf, coordinate with the insurance surveyor for on-site digital inspection, procure original panels, and complete repairs in our climate-controlled paint booth. You only pay standard policy deductibles—the rest is settled directly between the insurer and our workshop.'
  },
  {
    id: 'faq-02-oem-warranty',
    category: 'Speed Parts & Spares',
    question: 'Are Speed Parts components 100% authentic, and why are prices 15% to 25% lower than showrooms?',
    answer: 'Every part sold through Speed Parts (Medical Chauraha Hub) is 100% authentic, carrying manufacturer holograms and serial verification from OEM suppliers like Hyundai Mobis, Brembo, Monroe, Bosch, TVS, and Mahle. Because we operate an independent high-volume distribution model directly connected to OEM supply chains, we eliminate franchised showroom retail markups, marketing overheads, and multi-tier intermediary commissions, passing those direct savings on to you.'
  },
  {
    id: 'faq-03-luxury-diagnostics',
    category: 'Marque Care',
    question: 'Can you handle proprietary diagnostics and software coding for BMW, Mercedes-Benz, Audi, and Porsche?',
    answer: 'Absolutely. Bay 02 is equipped with PassThru J2534 hardware, official DoIP (Diagnostics over Internet Protocol) interfaces, VAG VCDS, and BMW ISTA/D suites. We perform online SCN coding, electronic module adaptation, Mechatronics valve body calibration, and digital service history resets directly into your vehicle’s iDrive or MBUX systems.'
  },
  {
    id: 'faq-04-turnaround',
    category: 'Turnaround Times',
    question: 'What are your standard turnaround times for maintenance versus accidental repairs?',
    answer: 'Standard periodic maintenance (engine oil, multi-point filter change, brake inspection) is completed within 3 to 5 hours. Advanced electronic diagnostics take 2 to 6 hours. Accidental repairs involving our heated downdraft paint booth typically take 3 to 5 working days from the moment the insurance surveyor approves the sanction.'
  },
  {
    id: 'faq-05-catchment-pickup',
    category: 'Concierge & Towing',
    question: 'Do you offer vehicle pick-up and roadside recovery outside Prayagraj city limits?',
    answer: 'Yes. We provide flatbed towing and driver pick-and-drop services covering a 150 km active catchment radius, including Varanasi, Mirzapur, Kaushambi, Pratapgarh, and Rewa. For local Prayagraj clients in Civil Lines, George Town, Ashok Nagar, and Naini, driver pickup can be scheduled during slot booking.'
  },
  {
    id: 'faq-06-b2b-wholesale',
    category: 'B2B & Garage Fleet',
    question: 'How do independent mechanics, fleet operators, and garages place B2B wholesale orders with Speed Parts?',
    answer: 'Independent workshops can contact our Medical Chauraha B2B desk directly on WhatsApp (+91 87965 76868) with part numbers or vehicle chassis numbers (VIN). We maintain dedicated commercial credit lines, bulk volume tier pricing, and instant motorcycle delivery across Prayagraj within 60 minutes for in-stock components.'
  }
];
