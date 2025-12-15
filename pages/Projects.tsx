import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { ImageWithLoader } from '../components/ui/ImageWithLoader';

const highlightProjects = [
  { id: 1, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639095/WhatsApp_Image_2025-12-05_at_09.51.04_2_tctcuh.jpg", title: "Royal Reception", category: "Wedding" },
  { id: 2, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.05_1_kloswz.jpg", title: "Grand Entrance", category: "Decor" },
  { id: 3, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.49.53_2_wbvdui.jpg", title: "Stage Design", category: "Stage" },
  { id: 4, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639092/WhatsApp_Image_2025-12-05_at_09.51.04_1_s28vsn.jpg", title: "Floral Arches", category: "Decor" },
  { id: 5, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639093/WhatsApp_Image_2025-12-05_at_09.51.04_nbu3aq.jpg", title: "Evening Gala", category: "Corporate" },
  { id: 6, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639092/WhatsApp_Image_2025-12-05_at_09.49.52_5_u7iclq.jpg", title: "Lighting Ambiance", category: "Lighting" },
  { id: 7, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.52_qfdntx.jpg", title: "Table Setting", category: "Dining" },
  { id: 8, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.53_3_qbatfx.jpg", title: "Luxury Lounge", category: "Setup" },
  { id: 9, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.49.53_uo265g.jpg", title: "Wedding Hall", category: "Wedding" },
  { id: 10, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639091/WhatsApp_Image_2025-12-05_at_09.56.08_d5knvi.jpg", title: "Outdoor Elegance", category: "Outdoor" },
  { id: 11, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639090/WhatsApp_Image_2025-12-05_at_09.49.53_1_ad6f52.jpg", title: "Floral Masterpiece", category: "Decor" },
  { id: 12, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639089/WhatsApp_Image_2025-12-05_at_09.56.01_vz4pma.jpg", title: "Night of Lights", category: "Event" },
  { id: 13, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.55.45_b2dgex.jpg", title: "Classic Setup", category: "Wedding" },
  { id: 14, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639087/WhatsApp_Image_2025-12-05_at_09.49.52_4_o8ahoe.jpg", title: "Modern Stage", category: "Stage" },
  { id: 15, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.55.53_sdcgbm.jpg", title: "Golden Theme", category: "Decor" },
  { id: 16, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.48.05_x89dof.jpg", title: "Signature Event", category: "Signature" },
  { id: 17, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_2_bszc5a.jpg", title: "Velvet Lounge", category: "Setup" },
  { id: 18, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_3_zlal3e.jpg", title: "Crystal Decor", category: "Details" },
  { id: 19, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639088/WhatsApp_Image_2025-12-05_at_09.49.52_1_vbvckl.jpg", title: "Walkway of Dreams", category: "Entrance" },
  { id: 20, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_4_ouy0th.jpg", title: "The Grand Stage", category: "Stage" },
  { id: 21, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_3_i9cjjk.jpg", title: "Intimate Dinner", category: "Dining" },
  { id: 22, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_cj7hx2.jpg", title: "Royal Seating", category: "Seating" },
  { id: 23, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.49.51_scgw5k.jpg", title: "Event Lighting", category: "Production" },
  { id: 24, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.49.50_mzkhg0.jpg", title: "Traditional Decor", category: "Wedding" },
  { id: 25, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639086/WhatsApp_Image_2025-12-05_at_09.51.05_2_obmznb.jpg", title: "Guest Experience", category: "Ambience" },
  { id: 26, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.49.51_1_bxwhz3.jpg", title: "Floral Walkway", category: "Entrance" },
  { id: 27, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765639085/WhatsApp_Image_2025-12-05_at_09.48.06_eyxfvx.jpg", title: "Luxurious Backdrop", category: "Decor" },
  { id: 28, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1764781335/banner_yfbbvf.jpg", title: "Aerial View", category: "Overview" },
];

const mehndiProjects = [
  { id: 101, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779309/WhatsApp_Image_2025-12-13_at_23.08.37_lcibdx.jpg", title: "Vibrant Celebration", category: "Mehndi" },
  { id: 102, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779309/WhatsApp_Image_2025-12-13_at_23.08.36_igv3q5.jpg", title: "Colorful Stage", category: "Mehndi" },
  { id: 103, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779308/WhatsApp_Image_2025-12-13_at_23.08.36_2_n41k9t.jpg", title: "Floral Canopy", category: "Mehndi" },
  { id: 104, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779308/WhatsApp_Image_2025-12-13_at_23.08.36_3_gac2mm.jpg", title: "Traditional Decor", category: "Mehndi" },
  { id: 105, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779308/WhatsApp_Image_2025-12-13_at_23.08.36_1_n3sznr.jpg", title: "Festive Lights", category: "Mehndi" },
  { id: 106, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779308/WhatsApp_Image_2025-12-13_at_23.08.37_1_qfagki.jpg", title: "Mehndi Night", category: "Mehndi" },
  { id: 107, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779308/WhatsApp_Image_2025-12-13_at_23.08.35_2_itztvo.jpg", title: "Cultural Elegance", category: "Mehndi" },
  { id: 108, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.35_1_fnd47w.jpg", title: "Bright Themes", category: "Mehndi" },
  { id: 109, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.34_2_h7akhh.jpg", title: "Mehndi Setup", category: "Mehndi" },
  { id: 110, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.34_1_jefd4e.jpg", title: "Floral Detail", category: "Mehndi" },
  { id: 111, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.34_wowqq0.jpg", title: "Grand Mehndi", category: "Mehndi" },
  { id: 112, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.33_kbdntv.jpg", title: "Joyous Moments", category: "Mehndi" },
  { id: 113, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779307/WhatsApp_Image_2025-12-13_at_23.08.35_lo55cn.jpg", title: "Entrance Decor", category: "Mehndi" },
];

const baratProjects = [
  { id: 201, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779635/WhatsApp_Image_2025-12-13_at_23.08.55_1_m3tjl1.jpg", title: "Grand Barat Entrance", category: "Barat" },
  { id: 202, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779634/WhatsApp_Image_2025-12-13_at_23.08.55_leqvbp.jpg", title: "Royal Walkway", category: "Barat" },
  { id: 203, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779631/WhatsApp_Image_2025-12-13_at_23.08.54_bvcghb.jpg", title: "Elegant Stage", category: "Barat" },
  { id: 204, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779630/WhatsApp_Image_2025-12-13_at_23.08.54_3_zam4fx.jpg", title: "Majestic Decor", category: "Barat" },
  { id: 205, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779629/WhatsApp_Image_2025-12-13_at_23.08.54_2_p6mcyv.jpg", title: "Luxury Seating", category: "Barat" },
  { id: 206, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779627/WhatsApp_Image_2025-12-13_at_23.08.54_1_s2foog.jpg", title: "Bridal Aisle", category: "Barat" },
  { id: 207, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779625/WhatsApp_Image_2025-12-13_at_23.08.53_bble5d.jpg", title: "Floral Arches", category: "Barat" },
  { id: 208, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779624/WhatsApp_Image_2025-12-13_at_23.08.53_3_ugev8x.jpg", title: "Centerpiece Detail", category: "Barat" },
  { id: 209, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779622/WhatsApp_Image_2025-12-13_at_23.08.53_2_x7uh8n.jpg", title: "Guest Lounge", category: "Barat" },
  { id: 210, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779622/WhatsApp_Image_2025-12-13_at_23.08.53_1_ypsgf9.jpg", title: "Barat Ambience", category: "Barat" },
  { id: 211, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779621/WhatsApp_Image_2025-12-13_at_23.08.52_ww4dd2.jpg", title: "Golden Lights", category: "Barat" },
  { id: 212, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779618/WhatsApp_Image_2025-12-13_at_23.08.52_4_hoyi6d.jpg", title: "Royal Backdrop", category: "Barat" },
  { id: 213, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779617/WhatsApp_Image_2025-12-13_at_23.08.52_2_yyres5.jpg", title: "Exquisite Florals", category: "Barat" },
  { id: 214, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779617/WhatsApp_Image_2025-12-13_at_23.08.52_3_o00ulg.jpg", title: "Classic Theme", category: "Barat" },
  { id: 215, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779615/WhatsApp_Image_2025-12-13_at_23.08.52_1_abg4ut.jpg", title: "Stage Lighting", category: "Barat" },
  { id: 216, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779614/WhatsApp_Image_2025-12-13_at_23.08.51_rzms3z.jpg", title: "Grand Setup", category: "Barat" },
  { id: 217, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779613/WhatsApp_Image_2025-12-13_at_23.08.51_3_f4voym.jpg", title: "Entrance Flowers", category: "Barat" },
  { id: 218, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779612/WhatsApp_Image_2025-12-13_at_23.08.51_2_l4bmqa.jpg", title: "Sofa Detail", category: "Barat" },
  { id: 219, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779611/WhatsApp_Image_2025-12-13_at_23.08.51_1_dnzfhf.jpg", title: "Pathway Glow", category: "Barat" },
];

const walimaProjects = [
  { id: 301, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779541/WhatsApp_Image_2025-12-13_at_23.08.50_lezxle.jpg", title: "Walima Reception", category: "Walima" },
  { id: 302, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779539/WhatsApp_Image_2025-12-13_at_23.08.50_2_epahsg.jpg", title: "Elegant Setup", category: "Walima" },
  { id: 303, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779538/WhatsApp_Image_2025-12-13_at_23.08.50_1_dis2ki.jpg", title: "Floral Decor", category: "Walima" },
  { id: 304, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779537/WhatsApp_Image_2025-12-13_at_23.08.49_deft4e.jpg", title: "Stage Design", category: "Walima" },
  { id: 305, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779537/WhatsApp_Image_2025-12-13_at_23.08.49_3_xlz0mh.jpg", title: "Luxury Seating", category: "Walima" },
  { id: 306, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779534/WhatsApp_Image_2025-12-13_at_23.08.49_2_rsdinm.jpg", title: "Table Arrangement", category: "Walima" },
  { id: 307, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779533/WhatsApp_Image_2025-12-13_at_23.08.49_1_rvegts.jpg", title: "Grand Hall", category: "Walima" },
  { id: 308, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779532/WhatsApp_Image_2025-12-13_at_23.08.48_sn0sph.jpg", title: "Ambient Lighting", category: "Walima" },
  { id: 309, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779532/WhatsApp_Image_2025-12-13_at_23.08.48_2_pexppn.jpg", title: "Classic Walima", category: "Walima" },
  { id: 310, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779529/WhatsApp_Image_2025-12-13_at_23.08.48_1_lonjv2.jpg", title: "Sophisticated Decor", category: "Walima" },
  { id: 311, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779528/WhatsApp_Image_2025-12-13_at_23.08.47_chey0a.jpg", title: "Entrance Walkway", category: "Walima" },
  { id: 312, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779528/WhatsApp_Image_2025-12-13_at_23.08.47_3_b3c68u.jpg", title: "Beautiful Backdrop", category: "Walima" },
  { id: 313, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779526/WhatsApp_Image_2025-12-13_at_23.08.47_2_og7rzd.jpg", title: "Guest Area", category: "Walima" },
  { id: 314, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779524/WhatsApp_Image_2025-12-13_at_23.08.47_1_mhw3tf.jpg", title: "Stage Flowers", category: "Walima" },
  { id: 315, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779523/WhatsApp_Image_2025-12-13_at_23.08.46_fdyjc4.jpg", title: "Dining Setup", category: "Walima" },
  { id: 316, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779523/WhatsApp_Image_2025-12-13_at_23.08.46_2_tbyj0h.jpg", title: "Royal Theme", category: "Walima" },
  { id: 317, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779523/WhatsApp_Image_2025-12-13_at_23.08.46_1_hyuknr.jpg", title: "Centerpieces", category: "Walima" },
  { id: 318, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779520/WhatsApp_Image_2025-12-13_at_23.08.45_flesdh.jpg", title: "Bridal Sofa", category: "Walima" },
  { id: 319, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779519/WhatsApp_Image_2025-12-13_at_23.08.45_2_edzk9w.jpg", title: "Event Lighting", category: "Walima" },
  { id: 320, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779519/WhatsApp_Image_2025-12-13_at_23.08.45_1_t0v3kj.jpg", title: "Floral Arch", category: "Walima" },
  { id: 321, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779518/WhatsApp_Image_2025-12-13_at_23.08.44_a7uwww.jpg", title: "Reception Hall", category: "Walima" },
  { id: 322, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779516/WhatsApp_Image_2025-12-13_at_23.08.44_2_nsvbmb.jpg", title: "Modern Walima", category: "Walima" },
  { id: 323, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779515/WhatsApp_Image_2025-12-13_at_23.08.44_1_rdmqbp.jpg", title: "Detailed Decor", category: "Walima" },
  { id: 324, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779515/WhatsApp_Image_2025-12-13_at_23.08.43_dcdvj5.jpg", title: "Elegant Evening", category: "Walima" },
  { id: 325, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779515/WhatsApp_Image_2025-12-13_at_23.08.43_1_ohbzk1.jpg", title: "Memorable Night", category: "Walima" },
];

const danceFloorProjects = [
  { id: 401, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779433/WhatsApp_Image_2025-12-13_at_23.08.42_wtvwew.jpg", title: "Illuminated Dance Floor", category: "Dance Floor" },
  { id: 402, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779433/WhatsApp_Image_2025-12-13_at_23.08.42_1_uk1wgl.jpg", title: "Party Lights", category: "Dance Floor" },
  { id: 403, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779430/WhatsApp_Image_2025-12-13_at_23.08.41_htwzsz.jpg", title: "Dance Stage", category: "Dance Floor" },
  { id: 404, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779429/WhatsApp_Image_2025-12-13_at_23.08.41_2_okca6n.jpg", title: "Floor Projection", category: "Dance Floor" },
  { id: 405, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779428/WhatsApp_Image_2025-12-13_at_23.08.41_1_f9vbuc.jpg", title: "Neon Vibes", category: "Dance Floor" },
  { id: 406, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779427/WhatsApp_Image_2025-12-13_at_23.08.40_2_bwm8pg.jpg", title: "Event Entertainment", category: "Dance Floor" },
  { id: 407, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779427/WhatsApp_Image_2025-12-13_at_23.08.40_al1t6i.jpg", title: "Celebration Dance", category: "Dance Floor" },
  { id: 408, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779426/WhatsApp_Image_2025-12-13_at_23.08.40_1_zxkvcw.jpg", title: "Dynamic Lighting", category: "Dance Floor" },
  { id: 409, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779424/WhatsApp_Image_2025-12-13_at_23.08.39_u4w6t3.jpg", title: "Modern Dance Floor", category: "Dance Floor" },
  { id: 410, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779424/WhatsApp_Image_2025-12-13_at_23.08.39_2_ke6eee.jpg", title: "Glow Effect", category: "Dance Floor" },
  { id: 411, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779423/WhatsApp_Image_2025-12-13_at_23.08.39_3_c4wzy3.jpg", title: "Interactive Floor", category: "Dance Floor" },
  { id: 412, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779422/WhatsApp_Image_2025-12-13_at_23.08.39_1_xxulmg.jpg", title: "Party Atmosphere", category: "Dance Floor" },
  { id: 413, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779421/WhatsApp_Image_2025-12-13_at_23.08.38_gofmug.jpg", title: "Dance Setup", category: "Dance Floor" },
  { id: 414, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779421/WhatsApp_Image_2025-12-13_at_23.08.38_2_fbs1az.jpg", title: "Nightclub Style", category: "Dance Floor" },
  { id: 415, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779420/WhatsApp_Image_2025-12-13_at_23.08.38_1_fnxk1t.jpg", title: "Festive Dance", category: "Dance Floor" },
];

const corporateProjects = [
  { id: 501, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779775/WhatsApp_Image_2025-12-13_at_23.09.00_vsrjrp.jpg", title: "Corporate Gala", category: "Corporate" },
  { id: 502, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779774/WhatsApp_Image_2025-12-13_at_23.08.59_ifwxg3.jpg", title: "Executive Meeting", category: "Corporate" },
  { id: 503, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779773/WhatsApp_Image_2025-12-13_at_23.08.59_3_t1wopv.jpg", title: "Brand Launch", category: "Corporate" },
  { id: 504, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779770/WhatsApp_Image_2025-12-13_at_23.08.59_2_goghyn.jpg", title: "Awards Night", category: "Corporate" },
  { id: 505, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779769/WhatsApp_Image_2025-12-13_at_23.08.59_1_mtc71x.jpg", title: "Conference Setup", category: "Corporate" },
  { id: 506, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779766/WhatsApp_Image_2025-12-13_at_23.08.58_rjav2t.jpg", title: "Networking Event", category: "Corporate" },
  { id: 507, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779765/WhatsApp_Image_2025-12-13_at_23.08.58_4_vf2juu.jpg", title: "Business Dinner", category: "Corporate" },
  { id: 508, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779763/WhatsApp_Image_2025-12-13_at_23.08.58_3_qjn8qa.jpg", title: "Seminar Hall", category: "Corporate" },
  { id: 509, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779762/WhatsApp_Image_2025-12-13_at_23.08.58_2_d84ihx.jpg", title: "Product Reveal", category: "Corporate" },
  { id: 510, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779741/WhatsApp_Image_2025-12-13_at_23.08.57_3_jxvvg3.jpg", title: "Annual Summit", category: "Corporate" },
  { id: 511, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779738/WhatsApp_Image_2025-12-13_at_23.08.57_2_raqsua.jpg", title: "Corporate Decor", category: "Corporate" },
  { id: 512, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779737/WhatsApp_Image_2025-12-13_at_23.08.58_1_f0titw.jpg", title: "Stage Production", category: "Corporate" },
  { id: 513, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779734/WhatsApp_Image_2025-12-13_at_23.08.57_mweupy.jpg", title: "VIP Lounge", category: "Corporate" },
  { id: 514, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779727/WhatsApp_Image_2025-12-13_at_23.08.57_1_ljm8qr.jpg", title: "Banquet Hall", category: "Corporate" },
  { id: 515, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779726/WhatsApp_Image_2025-12-13_at_23.08.56_wuvkwr.jpg", title: "Formal Setting", category: "Corporate" },
  { id: 516, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779725/WhatsApp_Image_2025-12-13_at_23.08.56_3_d88iyr.jpg", title: "Event Branding", category: "Corporate" },
  { id: 517, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779724/WhatsApp_Image_2025-12-13_at_23.08.56_2_kdhork.jpg", title: "Convention Center", category: "Corporate" },
  { id: 518, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779723/WhatsApp_Image_2025-12-13_at_23.08.56_1_ndydef.jpg", title: "Professional Setup", category: "Corporate" },
  { id: 519, src: "https://res.cloudinary.com/drlfxmpin/image/upload/v1765779706/WhatsApp_Image_2025-12-13_at_23.08.55_olhedf.jpg", title: "Grand Entrance", category: "Corporate" },
];

const categories = [
  "Highlights",
  "Mehndi",
  "Barat",
  "Walima",
  "Dance Floors",
  "Corporate Events"
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Highlights");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const getDisplayedProjects = () => {
    switch (activeTab) {
      case "Highlights": return highlightProjects;
      case "Mehndi": return mehndiProjects;
      case "Barat": return baratProjects;
      case "Walima": return walimaProjects;
      case "Dance Floors": return danceFloorProjects;
      case "Corporate Events": return corporateProjects;
      // For other tabs, use first 5 of highlights as placeholders
      default: return highlightProjects.slice(0, 5);
    }
  };

  const displayedProjects = getDisplayedProjects();

  return (
    <section className="pt-32 pb-24 bg-slate-950 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-slate-950 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h4 className="text-luxury-champagne text-sm uppercase tracking-[0.2em] mb-4">Our Portfolio</h4>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-6">
              A Legacy of <span className="italic text-luxury-sand">Elegance</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-slate-400 font-light text-lg">
              Explore our curated collection of events, where every detail is meticulously crafted to create unforgettable moments.
            </p>
          </Reveal>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm uppercase tracking-widest pb-2 transition-all duration-300 border-b-2 ${
                activeTab === category
                  ? 'text-luxury-champagne border-luxury-champagne'
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={`${activeTab}-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer bg-slate-900"
            >
              <ImageWithLoader 
                src={project.src} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-luxury-champagne text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif text-white italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="mt-6 w-8 h-[1px] bg-luxury-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
              </div>

              {/* Border effect */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Want to see more?</p>
             <a href="https://www.instagram.com/classic_events111" target="_blank" rel="noopener noreferrer" className="inline-block border border-luxury-champagne px-8 py-3 text-luxury-champagne uppercase tracking-widest text-xs hover:bg-luxury-champagne hover:text-slate-900 transition-all duration-300">
                Visit Our Instagram
             </a>
        </div>
      </div>
    </section>
  );
};