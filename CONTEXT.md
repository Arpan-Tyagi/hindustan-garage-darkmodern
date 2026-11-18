# Domain Context: Hindustan Garage (Est. 1960) & Speed Parts

## 1. Executive Identity & Heritage
**Hindustan Garage** is Prayagraj's premier automotive atelier, established in 1960 at **56, Mahatma Gandhi Marg (M.G. Marg), Civil Lines, Prayagraj, Uttar Pradesh 211001**. Spanning over six decades and three generations of master technicians, the workshop has evolved from British-era coachbuilding and vintage restorations to a high-technology multi-bay diagnostic workshop handling both modern German luxury marques (BMW, Mercedes-Benz, Audi, Jaguar Land Rover, Porsche) and high-volume Japanese/Korean passenger vehicles (Hyundai, Toyota, Maruti Suzuki, Mahindra, Tata).

**Speed Parts** is the newly launched (3-month-old) retail and B2B spare parts division located strategically at **Medical Chauraha, George Town, Prayagraj, Uttar Pradesh 211002**. Speed Parts provides direct-to-consumer and wholesale genuine OEM spare parts, specializing as the regional price leader for Hyundai genuine components, eliminating middleman markups and offering instant WhatsApp dispatch.

---

## 2. Key Entities & Domain Glossary

- **Atelier Flagship (M.G. Marg)**: The primary mechanical, electrical, and cashless body repair hub with 6 dedicated bays.
- **Speed Parts Hub (Medical Chauraha)**: The parts warehousing and fast-counter dispatch center.
- **Service Bays**:
  - `Bay 01`: Engine & ECM Advanced Diagnostics (OBD-II, CAN-bus, oscilloscope analysis)
  - `Bay 02`: Luxury Marque Specialized Servicing (BMW, Mercedes-Benz, Audi, JLR)
  - `Bay 03`: Climate-Controlled Cashless Paint Booth & PPG Digital Color Mixing
  - `Bay 04`: High-Performance 3D Laser Suspension & Steering Geometry
  - `Bay 05`: Climate Control & Automotive Electrical Atelier
  - `Bay 06`: Corporate Fleet & Heavy-Duty SUV Maintenance
- **Cashless Network**: ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India Assurance, Oriental Insurance.
- **Catchment Telemetry**: 150 km active radius covering Prayagraj, Varanasi, Mirzapur, Kaushambi, Pratapgarh, and Rewa.
- **Two-Way Booking Engine**: 4-step wizard that connects clients to workshop bays and routes structured payloads to WhatsApp (`wa.me/918796576868`) and transactional email confirmation tickets.

---

## 3. Motion Architecture Mandate
- **Zero WebGL / 3D**: Absolute constraint. No Three.js, Canvas 3D, or shader overhead.
- **Pure 2D Kinematics**: GSAP 3 + ScrollTrigger for pinned filmstrips and scrubs, CSS `clip-path` curtain reveals, Framer Motion for state transitions, and a magnetic reticle cursor.
