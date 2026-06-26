/* Publicly seeded trip record. The owner requested this itinerary data be published. */
(() => {
  const it = (id,title,date,time,place,status,cost,details) => ({id:`it-${id}`,title,date,time,place,status,cost,details});
  const bk = (id,title,type,provider,date,time,reference,cost,details) => ({id:`bk-${id}`,title,type,provider,date,time,reference,cost,details});
  const tr = (id,title,from,to,date,depart,arrive,method,cost,details) => ({id:`tr-${id}`,title,from,to,date,depart,arrive,method,cost,details});
  const pk = (id,title,category,quantity,details) => ({id:`pk-${id}`,title,category,quantity,details,done:false});
  const sh = (id,title,category,where,price,details) => ({id:`sh-${id}`,title,category,where,price,details,done:false});
  const co = (id,title,status,rules,wear,details) => ({id:`co-${id}`,title,status,rules,wear,details});
  const of = (id,title,occasion,pieces,details) => ({id:`of-${id}`,title,occasion,pieces,details});
  window.TRIPS_PUBLISHED_STATE = {
    activeTripId:'andalusia-2026',
    trips:[{
      id:'andalusia-2026',
      title:'Andalusia 2026',
      destinations:'Málaga · Granada · Seville',
      startDate:'2026-06-30',
      endDate:'2026-07-16',
      colour:'#d8a648',
      coverNote:'17 days of caves, archaeology, old cities and a travel journal waiting to be written.',
      overview:'Public trip import, updated 26 June 2026. Current itinerary correction: Nerja is Wednesday 1 July. Cueva de la Victoria and Cueva del Tesoro are Thursday 2 July. Caminito del Rey is Friday 3 July. Ronda and Setenil are Saturday 11 July from Seville, replacing the old Málaga Friday record. The original uploaded planning files had older placements for those two days, so use this imported itinerary as the current working version.\n\nBases: The Lights Hostel in Málaga, Black Swan Hostel in Granada, La Banda Living Hostel in Seville. The return journey remains flight-critical because the Seville to Málaga train is still not booked in the supplied records.',
      sourceFiles:['00_Start_Here_and_Live_Actions.docx','01_Day_by_Day_Itinerary.docx','02_Flights_Trains_Buses_and_Ticket_Wallet.docx','03_Routes_Door_to_Door.docx','04_Booked_Activities_and_Entry_Rules.docx','05_Hostels_and_Stays.docx','06_Packing.docx','07_Malaga_Shopping_Clothes_and_Outfits.docx','08_Important_Documents_Medication_and_Emergency.docx','09_Money_Payments_and_Balances.docx','10_Book_Next_Maybes_and_Not_Doing.docx','ALSA_Malaga_to_Granada_2026-07-04.pdf','ALSA_Granada_to_Seville_2026-07-09.pdf'],
      itinerary:[
        it('01','Fly Birmingham to Málaga','2026-06-30','08:00','Birmingham BHX → Málaga AGP','Booked','26.49','Ryanair FR2156. Arrives 11:55. Personal item only, maximum 40 × 30 × 20cm.'),
        it('02','Airport C1 to Plaza Mayor','2026-06-30','12:15','Málaga Airport → Plaza Mayor','Planned','','Follow Cercanías signs. One stop, direction Fuengirola.'),
        it('03','Cabin case and clothing audit','2026-06-30','12:30','Plaza Mayor','Planned','','First buy a Jet2-compatible cabin case, then only buy clothing or toiletries after the audit.'),
        it('04','C1 to Málaga Centro Alameda and walk to hostel','2026-06-30','13:30','Plaza Mayor → The Lights Hostel','Planned','','Take C1 toward Málaga Centro Alameda, then walk about 8–12 minutes to Calle Torregorda 3.'),
        it('05','Check in at The Lights Hostel','2026-06-30','14:30','Calle Torregorda 3, Málaga','Booked','142.91','Check-in from 14:30. Food, water and supermarket basics after dropping the bag.'),
        it('06','Old town, Alcazaba and Roman Theatre if energy allows','2026-06-30','15:00','Málaga old centre','Planned','','Atarazanas, old centre, Alcazaba, Roman Theatre area, Cathedral outside and Muelle Uno. Keep it flexible after the flight.'),
        it('07','ALSA to Nerja Cave','2026-07-01','10:45','Málaga Bus Station → Maro Empalme','Booked','11.11','Bay 38. Arrives 12:13. Booking ref 1gpy4vq. Use the walk, toilet and ticket buffer before cave entry.'),
        it('08','Cueva de Nerja and VR room','2026-07-01','13:20','Ctra. de Maro, s/n, Nerja','Booked','15','Youth ticket locator 100677352. Cave visit, audio guide app and VR room included. Museum not planned.'),
        it('09','ALSA return from Nerja','2026-07-01','15:32','Maro Empalme → Puerto Málaga','Booked','','Arrives Puerto Málaga 17:05. Walk back to The Lights is about 10–15 minutes.'),
        it('10','Cueva de la Victoria','2026-07-02','12:30','Cueva del Tesoro offices, Av. de Picasso 21','Booked','16.5','Arrive at the office by 12:00. Booking code 3461L9XQ04HU. Natural cave with ladders and no electric lighting, railings or concrete paths.'),
        it('11','Cueva del Tesoro','2026-07-02','16:30','Av. de Picasso 21, La Cala del Moral','Booked','4','Reference CT030032/1. Use the gap for Parque Arqueológico del Mediterráneo, food and rest. Local Rincón bus is not booked.'),
        it('12','Caminito del Rey','2026-07-03','11:00','El Chorro / Caminito del Rey','Booked','12.5','Booked Málaga day. Use the Málaga to El Chorro train and shuttle route. Entry is €10 plus €2.50 shuttle. Build in the north access walk and ticket checks.'),
        it('13','Check out, Málaga morning slot and ALSA to Granada','2026-07-04','16:00','Málaga Bus Station → Granada Bus Station','Booked','8','The Lights check-out by 11:00. ALSA direct 16:00–17:30, booking ref 1gk3nwn. Target bus station arrival 15:30–15:35.'),
        it('14','Granada arrival and Black Swan check in','2026-07-04','17:30','Granada Bus Station → Black Swan Hostel','Booked','58.74','Black Swan Hostel, Darro del Boquerón 4. Check-in from 14:00. Use live local route after bus arrival.'),
        it('15','Old centre, Alcaicería, Albaicín and viewpoints','2026-07-05','10:00','Granada','Planned','','Use the morning for the old centre and Alcaicería. Keep the hottest period for food, shade and a hostel reset, then do Albaicín and viewpoints later.'),
        it('16','Alhambra and Nasrid Palaces','2026-07-06','10:00','C. Real de la Alhambra, Granada','Booked','14.85','Nasrid Palaces fixed entry 10:00, reference H0MHPPX/1. Alcazaba, Partal and Generalife access 08:30–20:00.'),
        it('17','Granada Science Park Museum','2026-07-07','10:00','Avda. Mediterráneo s/n, Granada','Booked','8','Museum reduced ticket, reservation 330594. No timed slot shown. Booking showed museum hours 10:00–19:00. BioDomo and Planetarium not selected.'),
        it('18','Open Granada activity day','2026-07-08','10:00','Granada','Planned','','Open slot for an attraction, activity, hike or hostel plan. Keep heat management and shopping time in the day.'),
        it('19','Granada checkout and ALSA to Seville','2026-07-09','17:30','Granada Bus Station → Seville Plaza de Armas','Booked','12','Black Swan check-out by 11:00. ALSA direct 17:30–20:30, booking ref 1g5lrqj. Target station arrival 16:45–16:55.'),
        it('20','Seville arrival and La Banda check in','2026-07-09','20:30','Seville Plaza de Armas → La Banda Living Hostel','Booked','115.38','La Banda, Calle Teniente Borges 5. Check-in is 15:00–23:00 and breakfast is included.'),
        it('21','Royal Alcázar','2026-07-10','09:30','Puerta del León, Patio de Banderas, Seville','Booked','8','Target arrival 09:15. Entry window 09:15–10:00. Ticket code NLBWY0FOWTO1Q47H7, purchase 23960560.'),
        it('22','Ronda and Setenil de las Bodegas tour','2026-07-11','08:25','Seville pickup, provider confirmation','Booked','26.73','User-confirmed moved date from the old Málaga Friday record. Full-day English tour. Existing booking 1407617415, operator R217-260607-229. Confirm the current Seville pickup shown by the reissued provider confirmation.'),
        it('23','Cathedral and Giralda','2026-07-12','16:55','Avenida de la Constitución, Seville','Booked','0','Free entry. Purchase 2691DH5BZS, reservation 9VNDPR6Y. Bring photo ID matching ticket name.'),
        it('24','Antiquarium and old town','2026-07-13','10:00','Las Setas, Seville','Planned','','Antiquarium is definite. Ticket and current price are not yet checked.'),
        it('25','Open Seville city day','2026-07-14','10:00','Seville','Planned','','Activity, shopping, Triana, Santa Cruz or hostel time. Keep the hottest hours for indoor or rest time.'),
        it('26','Final Seville day, laundry and packing','2026-07-15','10:00','Seville','Planned','','Leave the evening clear for flight-critical transfer preparation and travel document checks.'),
        it('27','Seville to Málaga Airport and Jet2 home','2026-07-16','06:38','Seville Santa Justa → Málaga AGP → Birmingham BHX','Planned','46.7','Flight-critical provisional rail route: 06:38 Seville → 08:50 Málaga María Zambrano, then C1 to airport. Train is not booked in supplied records. Jet2 LS1204 flies 12:25–14:30.')
      ],
      bookings:[
        bk('01','Ryanair outbound','Transport ticket','Ryanair','2026-06-30','08:00','F8QK3R',26.49,'FR2156 Birmingham BHX → Málaga AGP, 08:00–11:55. Personal item only. Boarding pass after check-in.'),
        bk('02','The Lights Hostel','Hostel / stay','The Lights Hostel','2026-06-30','14:30','90359-577869337',142.91,'30 Jun–4 Jul, Standard 10 Bed Mixed Dorm, Calle Torregorda 3. €25.22 paid online, property balance €142.91.'),
        bk('03','Nerja ALSA return ticket','Transport ticket','ALSA','2026-07-01','10:45','1gpy4vq',11.11,'Málaga Bus Station → Maro Empalme 10:45–12:13. Return Maro Empalme → Puerto Málaga 15:32–17:05. 20kg total, max two items.'),
        bk('04','Cueva de Nerja','Attraction','Cueva de Nerja','2026-07-01','13:20','100677352',15,'Youth entry. Cave, audio app and VR room included. Museum not planned.'),
        bk('05','Cueva de la Victoria','Attraction','Cueva de la Victoria','2026-07-02','12:30','3461L9XQ04HU',16.5,'Meet at Cueva del Tesoro offices. Helmet and front light provided.'),
        bk('06','Cueva del Tesoro','Attraction','Cueva del Tesoro','2026-07-02','16:30','CT030032/1',4,'Bring passport or photo ID and live Youth Card app proof.'),
        bk('07','Caminito del Rey','Attraction','Caminito del Rey','2026-07-03','11:00','',12.5,'Imported as booked on Friday 3 July. Entry €10 plus €2.50 shuttle. Ticket file was not supplied with the source documents.'),
        bk('08','ALSA Málaga to Granada','Transport ticket','ALSA','2026-07-04','16:00','1gk3nwn',8,'Direct coach Málaga Bus Station → Granada Bus Station, arrives 17:30. Mobile ticket accepted, ID may be requested, 20kg total max two items.'),
        bk('09','Black Swan Hostel Granada','Hostel / stay','Black Swan Hostel','2026-07-04','14:00','321682-577889644',58.74,'4–9 Jul, Basic 8 Bed Mixed Dorm, Darro del Boquerón 4. £4.90 paid online, property balance €58.74. Non-refundable.'),
        bk('10','Alhambra General','Attraction','Alhambra','2026-07-06','10:00','H0MHPPX/1',14.85,'Nasrid Palaces fixed entry. Order 1933500MHPPX. Carry original passport and live Youth Card app.'),
        bk('11','Granada Science Park Museum','Attraction','Parque de las Ciencias','2026-07-07','10:00','330594',8,'Museum reduced. Barcode held in source ticket wallet. BioDomo and Planetarium not selected.'),
        bk('12','ALSA Granada to Seville','Transport ticket','ALSA','2026-07-09','17:30','1g5lrqj',12,'Direct Granada Bus Station → Seville Plaza de Armas, arrives 20:30. Mobile ticket accepted, ID may be requested, 20kg total max two items.'),
        bk('13','La Banda Living Hostel','Hostel / stay','La Banda Living Hostel','2026-07-09','15:00','337143-577902145',115.38,'9–16 Jul, Basic 10 Bed Mixed Dorm, Calle Teniente Borges 5. €12.84 paid online, property balance €115.38. Breakfast included.'),
        bk('14','Royal Alcázar','Attraction','Real Alcázar','2026-07-10','09:30','NLBWY0FOWTO1Q47H7',8,'Student or Youth Card ticket. Purchase 23960560. Palaces and gardens included, Cuarto Real Alto not included.'),
        bk('15','Ronda and Setenil tour','Tour','Visitanddo','2026-07-11','08:25','1407617415',26.73,'User-confirmed moved to Saturday 11 July in Seville. Original provider data: operator R217-260607-229, English guide, food and drinks not included.'),
        bk('16','Cathedral and Giralda','Attraction','Seville Cathedral','2026-07-12','16:55','9VNDPR6Y',0,'Free entry. Purchase 2691DH5BZS. Bring matching photo ID.'),
        bk('17','Jet2 return','Transport ticket','Jet2','2026-07-16','12:25','358SP8',47.92,'LS1204 Málaga AGP → Birmingham BHX, 12:25–14:30. One 10kg hand-luggage allowance, no checked bag.'),
        bk('18','Seville to Málaga return train','Transport ticket','Renfe','2026-07-16','06:38','',46.7,'Not booked. Provisional route Seville 06:38 → Málaga María Zambrano 08:50, then C1 airport transfer.')
      ],
      transport:[
        tr('01','Outbound flight','Birmingham BHX','Málaga AGP','2026-06-30','08:00','11:55','Flight',26.49,'Ryanair FR2156, booked.'),
        tr('02','Airport shopping route','Málaga AGP','Plaza Mayor','2026-06-30','','','Train','','C1 direction Fuengirola, one stop. Buy cabin case before other shopping.'),
        tr('03','Airport to hostel','Plaza Mayor','The Lights Hostel','2026-06-30','','','Train','','C1 toward Málaga Centro Alameda, then 8–12 minute walk.'),
        tr('04','Nerja bus outbound','Málaga Bus Station','Maro Empalme','2026-07-01','10:45','12:13','Bus',6.14,'ALSA bay 38, booked.'),
        tr('05','Nerja bus return','Maro Empalme','Puerto Málaga','2026-07-01','15:32','17:05','Bus',4.97,'ALSA, booked.'),
        tr('06','Rincón cave day bus','Málaga Muelle Heredia','Cantal Bajo / Cueva del Tesoro','2026-07-02','','','Bus','','Local ticket not booked. Use live route and fare check on the day.'),
        tr('07','Caminito route','Málaga','El Chorro / Caminito del Rey','2026-07-03','','','Train',12.5,'Use train to El Chorro and the Caminito shuttle. Check morning timetable and build in north access time.'),
        tr('08','Málaga to Granada','Málaga Bus Station','Granada Bus Station','2026-07-04','16:00','17:30','Bus',8,'ALSA direct, booking ref 1gk3nwn.'),
        tr('09','Granada to Alhambra','Black Swan Hostel','Alhambra entrance','2026-07-06','','','Bus','','Walk to Gran Vía then use C30 or current Alhambra route. Target entrance 09:20–09:30.'),
        tr('10','Granada to Seville','Granada Bus Station','Seville Plaza de Armas','2026-07-09','17:30','20:30','Bus',12,'ALSA direct, booking ref 1g5lrqj.'),
        tr('11','Seville to Ronda and Setenil','Seville pickup','Ronda and Setenil','2026-07-11','08:25','','Bus',26.73,'Full-day Visitanddo tour. Use reissued Seville pickup confirmation.'),
        tr('12','Return rail and airport transfer','Seville Santa Justa','Málaga AGP','2026-07-16','06:38','09:30','Train',46.7,'Provisional 06:38 train to Málaga María Zambrano, arriving 08:50, followed by C1 airport train. Flight-critical and not booked.'),
        tr('13','Return flight','Málaga AGP','Birmingham BHX','2026-07-16','12:25','14:30','Flight',47.92,'Jet2 LS1204, booked.')
      ],
      packing:[
        pk('01','Passport','Documents','1','Keep in personal item.'),pk('02','GHIC physical card','Documents','1','Keep with passport and offline copies.'),pk('03','Insurance certificate','Documents','1','Keep offline and in personal item.'),pk('04','Youth Card app proof','Documents','1','Live EYC app with QR and barcode.'),pk('05','Ryanair and Jet2 boarding passes','Documents','2','Add after check-in.'),pk('06','Hostel and activity tickets','Documents','1 folder','Save offline, not only screenshots.'),pk('07','Methylphenidate 60mg modified release capsules','Medication','30 capsules','Original labelled pack. One daily.'),pk('08','Methylphenidate 30mg modified release capsules','Medication','30 capsules','Original labelled pack. One daily.'),pk('09','Birth-control patches','Medication','9 patches','Original pack, weekly schedule plus two spare.'),pk('10','Clindamycin and tretinoin gel','Medication','30g','Personal-item liquids bag. Apply thinly at night and avoid direct sun.'),pk('11','Prescription evidence or clinician letter','Medication','1','Original pharmacy packaging and repeat record.'),pk('12','Phone, cable and power bank','Tech','1 each','Keep in personal item.'),pk('13','Headphones and earplugs','Tech','1 each','Useful for flight and hostel.'),pk('14','Plug adapter','Tech','1','Pack before leaving.'),pk('15','Bank card and euros','Money','1 each','Keep some euros separate.'),pk('16','Merrell hiking shoes','Shoes','1 pair','For Victoria Cave. Closed and laced.'),pk('17','Walking trainers','Shoes','1 pair','City walking shoes.'),pk('18','Light tops and T-shirts','Clothes','', 'Decide after clothing photo audit.'),pk('19','Shorts, skirts and dresses','Clothes','', 'Choose usable pockets where possible.'),pk('20','Longer bottoms or leggings','Clothes','', 'For caves and practical days.'),pk('21','Light evening or air-conditioning layer','Clothes','1','For travel and late evenings.'),pk('22','Underwear, socks and sleepwear','Clothes','', 'Audit before Málaga shopping.'),pk('23','Swimwear or tankini','Clothes','', 'Decide after audit.'),pk('24','Sunglasses and sun hat','Sun protection','1 each','For Málaga, Ronda and Seville.'),pk('25','Sunscreen and lip balm SPF','Toiletries','1 each','Take in personal-item liquids allowance.'),pk('26','Toothbrush, toothpaste and deodorant','Toiletries','1 each','Usual kit.'),pk('27','Period products and personal first aid','Toiletries','', 'Include plasters and tissues.'),pk('28','Day bag and reusable water bottle','Hostel and day bag','1 each','Small bag for cave days.'),pk('29','Padlock','Hostel and day bag','1','Only buy if needed.'),pk('30','Towel, eye mask and laundry bag','Hostel and day bag','', 'Decide what hostel supplies or what you already own.'),pk('31','Ticket PDFs offline','Hostel and day bag','1 folder','Keep no bulky bag for Victoria Cave.'),pk('32','One snack and empty water bottle','Flight','1 each','For outward personal item.')
      ],
      shopping:[
        sh('01','Jet2-compatible cabin case','Travel gear','Plaza Mayor on arrival day','','Maximum 56 × 45 × 25cm including wheels and handles, 10kg limit.'),
        sh('02','Shorts with usable pockets','Clothes','Málaga after photo audit','','Do not buy before checking what already fits.'),
        sh('03','Replacement socks','Clothes','Málaga after photo audit','','Only if needed.'),
        sh('04','Tankini or beach item','Clothes','Málaga after photo audit','','Decide after existing-items audit.'),
        sh('05','Toiletry refills and larger return liquids','Toiletries','Málaga after cabin case purchase','','Only after case and luggage plan are set.'),
        sh('06','Padlock','Hostel gear','Málaga if needed','','Black Swan lists a €3 padlock extra.'),
        sh('07','Food and water basics','Food','DIA near The Lights after check-in','','Keep food shopping separate from station detours.')
      ],
      conditions:[
        co('01','Cueva de Nerja','Booked','Passport or photo ID and live Youth Card app proof. Keep ticket offline.','Light practical clothes, sun protection and walking shoes.','Entry 13:20. Cave, audio-guide app and VR room included. Museum not planned.'),
        co('02','Cueva de la Victoria','Booked','Arrive 12:00 for 12:30 start. Late tolerance is very short. Keep ticket offline.','Closed laced hiking or trekking shoes, water and small bag.','Natural cave with ladders, no electric lighting, railings or concrete paths. Helmet and front light provided.'),
        co('03','Cueva del Tesoro','Booked','Passport or photo ID and live Youth Card app proof.','Closed laced shoes suitable for the cave day.','Entry 16:30, Av. de Picasso 21, La Cala del Moral.'),
        co('04','Caminito del Rey','Booked','Keep ticket, train and shuttle information offline. Arrive for entry with route buffer.','Closed walking shoes, water and sun protection.','Friday 3 July. Current imported route uses Málaga to El Chorro train and shuttle.'),
        co('05','Alhambra','Booked','Original passport and live Youth Card app card. Bag maximum 40 × 40cm.','Flat closed shoes for cobbles, uneven steps and dirt paths.','No flash, tripod or selfie stick in Nasrid Palaces. Nasrid entry fixed 10:00.'),
        co('06','Granada Science Park','Booked','Live Youth Card app card plus passport or photo ID.','City indoor-outdoor outfit.','Museum reduced ticket. No BioDomo or Planetarium.'),
        co('07','Royal Alcázar','Booked','Passport or ID plus live Youth Card app. Entry ticket QR should be saved offline.','Light city outfit and flat shoes.','Arrive 09:15 for 09:30 entry. Palaces and gardens included.'),
        co('08','Ronda and Setenil tour','Booked','Use the reissued Saturday 11 July Seville pickup confirmation. Food and drinks are not included.','Walking outfit, sun protection and water.','English guide, air-conditioned vehicle and free time in both places.'),
        co('09','Cathedral and Giralda','Booked','Photo ID matching ticket name.','Respectful heat-appropriate city outfit.','No food, drink, smoking, vaping, flash or tripod. Entry 16:55.'),
        co('10','Antiquarium','Not booked','Ticket and current price need checking.','City outfit.','Definite archaeology stop under Las Setas.'),
        co('11','ALSA coaches','Booked','Mobile ticket accepted. ID may be requested for discount.','Keep phone charged.','20kg total luggage, maximum two items. Seat belt mandatory.'),
        co('12','Spain entry and documents','Need to check','Passport issued under ten years before arrival and valid at least three months after Schengen exit. Border may ask for return ticket, insurance, accommodation and funds.','Keep essentials in personal item.','EES photo or fingerprint process can add border time.'),
        co('13','Medication and emergency','Need to check','Medication stays in personal item with original labels and prescription evidence. Emergency 112.','Keep medical evidence, policy and emergency contacts offline.','Methylphenidate, patches and skincare are listed in the packing section. Skincare needs sun care and goes in liquids bag.'),
        co('14','Seville to Málaga return','Need to check','Train is flight-critical and not booked in supplied records.','Pack the evening before and keep documents ready.','Provisional 06:38 Seville to Málaga María Zambrano then C1 airport route for Jet2 12:25 flight.')
      ],
      outfits:[
        of('01','Flight and arrival outfit','30 June','Pending clothing photo audit. Personal item and travel layer.','Comfortable for flight, shopping and later old-town walk.'),
        of('02','Nerja Cave outfit','1 July','Light practical clothes, walking shoes, sunglasses and sun protection.','Cave plus outside heat and bus journey.'),
        of('03','Victoria Cave outfit','2 July','Merrell hiking shoes, suitable bottoms and small bag.','Closed laced footwear is required. Bring water.'),
        of('04','Caminito outfit','3 July','Closed walking shoes, light breathable clothes, water and sun protection.','Practical walking outfit for train, shuttle and walkway.'),
        of('05','Granada old-city outfit','5 July','Heat outfit with a light layer and flat walking shoes.','Useful for Alcaicería, Albaicín and viewpoints.'),
        of('06','Alhambra outfit','6 July','Flat closed shoes and light layer.','Cobbles, uneven steps and dirt paths.'),
        of('07','Science Park outfit','7 July','City indoor-outdoor outfit.','Museum day and possible evening FEX.'),
        of('08','Ronda and Setenil outfit','11 July','Walking outfit, sun protection and water.','Full-day coach tour and old-town walking.'),
        of('09','Seville city days','10–15 July','Heat outfit plus evening layer.','Alcázar, Cathedral, Antiquarium, shopping and hostel time.'),
        of('10','Jet2 return outfit','16 July','Personal item and 10kg cabin case.','Use a comfortable travel outfit for the early train and flight.')
      ],
      diary:[],
      journal:[]
    }]
  };
})();
