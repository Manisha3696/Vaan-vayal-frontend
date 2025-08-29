import React, { useState } from "react";
import "../../../Css/Style.css";
import { Col, Container, Row } from "react-bootstrap";
import banner from '../../../images/Pooja/Banner.jpg'
import poojaBanner from '../../../images/Pooja/Pooja-Banner-Vaan-Vayal.png'
import durgaPooja from '../../../images/Pooja/Durga_Pooja_Kit-Vaan-Vayal.JPEG'
import ganapathiPooja from '../../../images/Pooja/Ganapathi-Homam-Kit-Vaan-Vayal.JPEG'
import hariddharshanPooja from '../../../images/Pooja/Haridharshan-Homam-Kit-Vaan-Vayal.JPEG'
import navgrahaPooja from '../../../images/Pooja/Navgraha-Pooja-Kit-Vaan-Vayal.JPEG'
import satyanarayanaPooja from '../../../images/Pooja/Satyanarayana-Pooja-Kit-Vaan-Vayal.JPEG'
import shivaPooja from '../../../images/Pooja/Shiva-Pooja-Kit-Vaan-Vayal.JPEG'
import sudharshanaPooja from '../../../images/Pooja/Sudharshana-Pooja-Kit-Vaan-Vayal.JPEG'
import varalakshmiPooja from '../../../images/Pooja/Varalakshmi-Pooja-Kit-Vaan-Vayal.JPEG'
import kalash from '../../../images/Pooja/Kalash-Vaan-Vayal.jpg'
import bell from '../../../images/Pooja/Bell-Vaan-Vayal.jpg'
import kunkumPlate from '../../../images/Pooja/Kumkum-Plate-Vaan-Vayal.jpg'
import agarbathiHolder from '../../../images/Pooja/Agarbathi-Holder-Vaan-Vayal.jpg'
import thalika from '../../../images/Pooja/Thalika-Vaan-Vayal.jpg'
import lotta from '../../../images/Pooja/Lotta-Vaan-Vayal.jpg'
import kunkumam from '../../../images/Pooja/Kumkum-Vaan-Vayal.jpg'
import kottaiPaakku from '../../../images/Pooja/Kottai-Paakkku-Vaan-Vayal.jpg'
import cowDunkCake from '../../../images/Pooja/Cow-Dunk-Cake-Vaan-Vayal.jpg'
import sivalPaakku from '../../../images/Pooja/Sival-Paakku-Vaan-Vayal.png'
import kopparaThenga from '../../../images/Pooja/Koppara-Thenga-Vaan-Vayal.jpg'
import vettiVer from '../../../images/Pooja/Vetti-Ver-Vaan-Vayal.jpg'
import vibuthi from '../../../images/Pooja/Vibuthi-Vaan-Vayal.jpg'
import omamKit from '../../../images/Pooja/108-Kit-Vaan-Vayal.JPEG'
import paneerWater from '../../../images/Pooja/Paneer-Water-Vaan-Vayal.jpg'
import sambraniPowder from '../../../images/Pooja/Sambrani-Powder-Vaan-Vayal.jpg'
import sandhanamPowder from '../../../images/Pooja/Sandhanam-Powder-Vaan-Vayal.jpg'
import sandhanamKatti from '../../../images/Pooja/Sandhanam-Vaan-Vayal.jpg'
import panchiNool from '../../../images/Pooja/Panchi-Nool-Vaan-Vayal.jpg'
import sambraniCup from '../../../images/Pooja/Sambrani-Cup-Vaan-Vayal.jpg'
import kalasaNool from '../../../images/Pooja/Kalasa-Nool-Vaan-Vayal.jpg'
import karpuram from '../../../images/Pooja/karpuram-Vaan-Vayal.jpg'
import kattiManjal from '../../../images/Pooja/Katti-Manjal-Vaan-Vayal.jpg'
import naamaKatti from '../../../images/Pooja/Naamakatti-Vaan-Vayal.jpg'
import kasthuriManjal from '../../../images/Pooja/Kasthuri-Manjal-Vaan-Vayal.jpg'
import navathaniyam from '../../../images/Pooja/Navathaniyam-Vaan-Vayal.jpg'
import grass from '../../../images/Pooja/Grass-Vaan-Vayal.jpg'
import nel from '../../../images/Pooja/Nel-Vaan-Vayal.jpg'
import mangoStick from '../../../images/Pooja/Mango-Stick-Vaan-Vayal.jpg'
import nelPori from '../../../images/Pooja/Nel-Pori-Vaan-Vayal.jpg'
import arasanKattai from '../../../images/Pooja/Arasan-Kattai-Vaan-Vayal.jpg'
import { Link } from "react-router-dom";

const specialPoojaKit = [
  {
    id: 1,
    name: "Sudharshana Pooja Kit",
    image: sudharshanaPooja,
    title: "Sudharshana Pooja Kit",
    description: "Sudharshana Pooja Kit, designed for the sacred Sudarshana Homam, includes essentials for invoking Lord Vishnu’s divine protection. Perfect for spiritual rituals, it contains items like turmeric, kumkum, and incense, ensuring an authentic experience. Sourced from trusted suppliers, this kit simplifies preparation for devotees seeking prosperity and obstacle removal. Ideal for festivals or special prayers, it supports a complete pooja setup with high-quality materials. A must-have for devout households, this kit enhances spiritual focus and devotion. Perform the Sudarshana Pooja with ease, bringing divine blessings and positive energy to your home with every ritual, crafted for tradition and reverence."
  },
  {
    id: 2,
    name: "Varalakshmi Pooja Kit",
    image: varalakshmiPooja,
    title: "Varalakshmi Pooja Kit",
    description: "Varalakshmi Pooja Kit, curated for the auspicious Varalakshmi Vratam, includes essentials like kumkum, turmeric, and lamps for worshipping Goddess Lakshmi. Perfect for invoking wealth and prosperity, this kit ensures an authentic ritual experience. Sourced from premium materials, it simplifies preparation for devotees. Ideal for festivals or weekly prayers, it supports a complete pooja setup with high-quality items. A spiritual essential, this kit enhances devotion and focus during worship. Perform the Varalakshmi Pooja with ease, bringing divine blessings of abundance and harmony to your home. Crafted for tradition, it’s a must-have for households seeking the Goddess’s grace and favor."
  },
  {
    id: 3,
    name: "Shiva Pooja Kit",
    image: shivaPooja,
    title: "Shiva Pooja Kit",
    description: "Shiva Pooja Kit, designed for worshipping Lord Shiva, includes essentials like vibhuti, bilva leaves, and incense for a sacred ritual. Perfect for Maha Shivaratri or daily prayers, it ensures an authentic devotional experience. Sourced from trusted suppliers, this kit simplifies preparation with high-quality materials. Ideal for seeking peace and spiritual cleansing, it supports a complete pooja setup. A must-have for devotees, this kit enhances focus and reverence during worship. Perform the Shiva Pooja with ease, invoking divine blessings and tranquility in your home. Crafted for tradition, it brings the sacred essence of Lord Shiva’s grace to every ritual, fostering devotion and spiritual connection."
  },
  {
    id: 4,
    name: "Satyanarayana Pooja Kit",
    image: satyanarayanaPooja,
    title: "Satyanarayana Pooja Kit",
    description: "Satyanarayana Pooja Kit, crafted for the revered Satyanarayana Vratam, includes essentials like turmeric, kumkum, and betel leaves for worshipping Lord Vishnu. Perfect for seeking blessings of truth and prosperity, it ensures an authentic ritual experience. Sourced from premium materials, this kit simplifies preparation for devotees. Ideal for festivals or monthly prayers, it supports a complete pooja setup with high-quality items. A spiritual essential, this kit enhances devotion and focus during worship. Perform the Satyanarayana Pooja with ease, bringing divine grace and harmony to your home. Crafted for tradition, it’s a must-have for households seeking spiritual fulfillment and blessings."
  },
  {
    id: 5,
    name: "Haridarshan Pooja Kit",
    image: hariddharshanPooja,
    title: "Haridarshan Pooja Kit",
    description: "Haridarshan Pooja Kit, designed for worshipping Lord Vishnu, includes essentials like sandalwood, incense, and kumkum for a sacred ritual. Perfect for festivals or special prayers, it ensures an authentic devotional experience. Sourced from trusted suppliers, this kit simplifies preparation with high-quality materials. Ideal for seeking divine protection and prosperity, it supports a complete pooja setup. A must-have for devotees, this kit enhances spiritual focus and reverence during worship. Perform the Haridarshan Pooja with ease, invoking divine blessings and peace in your home. Crafted for tradition, it brings the sacred essence of Lord Vishnu’s grace to every ritual, fostering devotion and harmony."
  },
  {
    id: 6,
    name: "Navgraha Pooja Kit",
    image: navgrahaPooja,
    title: "Navgraha Pooja Kit",
    description: "Navgraha Pooja Kit, curated for worshipping the nine planetary deities, includes essentials like navadhanya, incense, and kumkum for balancing cosmic energies. Perfect for astrological rituals, it ensures an authentic spiritual experience. Sourced from premium materials, this kit simplifies preparation for devotees. Ideal for special prayers or planetary remedies, it supports a complete pooja setup with high-quality items. A spiritual essential, this kit enhances focus and devotion during worship. Perform the Navgraha Pooja with ease, bringing harmony and positive energy to your life. Crafted for tradition, it’s a must-have for households seeking astrological balance and divine blessings."
  },
  {
    id: 7,
    name: "Ganapathi Pooja Kit",
    image: ganapathiPooja,
    title: "Ganapathi Pooja Kit",
    description: "Ganapathi Pooja Kit, crafted for worshipping Lord Ganesha, includes essentials like modak, durva grass, and incense for a sacred ritual. Perfect for Ganesh Chaturthi or daily prayers, it ensures an authentic devotional experience. Sourced from trusted suppliers, this kit simplifies preparation with high-quality materials. Ideal for seeking obstacle removal and success, it supports a complete pooja setup. A must-have for devotees, this kit enhances focus and reverence during worship. Perform the Ganapathi Pooja with ease, invoking divine blessings and prosperity in your home. Crafted for tradition, it brings Lord Ganesha’s grace to every ritual, fostering devotion and spiritual connection."
  },
  {
    id: 8,
    name: "108 Om Thiraviya",
    image: omamKit,
    title: "108 Om Thiraviya",
    description: "108 Om Thiraviya, a specialized pooja kit, includes premium ajwain (omam) and essentials for performing the sacred 108 Om Homam. Perfect for spiritual cleansing and health-focused rituals, it ensures an authentic experience. Sourced from trusted suppliers, this kit offers high-quality materials for devotees. Ideal for festivals or special prayers, it supports a complete pooja setup with items like incense and kumkum. A spiritual essential, this kit enhances devotion and focus during worship. Perform the 108 Om Thiraviya ritual with ease, bringing divine blessings and purification to your home. Crafted for tradition, it’s a must-have for households seeking spiritual and physical well-being."
  },
  {
    id: 9,
    name: "Durga Pooja Kit",
    image: durgaPooja,
    title: "Durga Pooja Kit",
    description: "Durga Pooja Kit, designed for worshipping Goddess Durga, includes essentials like kumkum, turmeric, and incense for a sacred ritual. Perfect for Navratri or daily prayers, it ensures an authentic devotional experience. Sourced from premium materials, this kit simplifies preparation for devotees. Ideal for seeking strength and protection, it supports a complete pooja setup with high-quality items. A must-have for devout households, this kit enhances spiritual focus and reverence. Perform the Durga Pooja with ease, invoking divine blessings and courage in your home. Crafted for tradition, it brings the sacred essence of Goddess Durga’s grace to every ritual, fostering devotion and spiritual strength."
  },
];

const brassPoojaProducts = [
  {
    id: 1,
    name: "Kalash",
    image: kalash,
    title: "Kalash",
    description: "Kalash, a traditional brass pot, is essential for Hindu poojas, symbolizing prosperity and divine presence. Perfect for rituals like weddings or housewarmings, it holds water, mango leaves, and coconut for sacred offerings. Crafted from high-quality brass, this kalash ensures durability and a polished shine. Ideal for festivals or daily worship, it enhances spiritual ambiance with its elegant design. A must-have for devotees, this kalash elevates pooja setups with traditional charm. Use it for invoking blessings during ceremonies or as a decorative piece. Its timeless craftsmanship brings divine energy and authenticity to every ritual, making it a cherished addition to any home."
  },
  {
    id: 2,
    name: "Bell",
    image: bell,
    title: "Bell",
    description: "Brass Bell, a sacred pooja essential, produces a resonant sound to invoke divine energies during rituals. Perfect for daily worship or festivals, its clear chime purifies the ambiance and enhances spiritual focus. Crafted from premium brass, this bell ensures durability and a polished finish. Ideal for chanting mantras or concluding prayers, it adds authenticity to pooja setups. A must-have for devotees, this bell elevates rituals with its traditional charm. Use it to signal the start of worship or to ward off negative energies. Its melodic tone and craftsmanship bring divine blessings and serenity to every ceremony, making it a cherished addition to any home."
  },
  {
    id: 3,
    name: "Kunkum Plate",
    image: kunkumPlate,
    title: "Kunkum Plate",
    description: "Kunkum Plate, crafted from premium brass, is a traditional pooja essential for holding kumkum and turmeric during rituals. Perfect for applying tilak or offering blessings, its elegant design enhances spiritual setups. Sourced from skilled artisans, this plate ensures durability and a polished shine. Ideal for daily worship, festivals, or ceremonies like weddings, it adds authenticity to pooja rituals. A must-have for devotees, this kunkum plate elevates devotion with its traditional charm. Use it for auspicious markings or as a decorative piece. Its timeless craftsmanship brings divine energy and cultural richness to every ritual, making it a cherished addition to any spiritual household."
  },
  {
    id: 4,
    name: "Agarbathi Holder",
    image: agarbathiHolder,
    title: "Agarbathi Holder",
    description: "Agarbathi Holder, crafted from high-quality brass, is a pooja essential for securely holding incense sticks during worship. Perfect for daily prayers or festivals, its sturdy design ensures safe burning and collects ash neatly. Sourced from skilled artisans, this holder offers durability and a polished finish. Ideal for creating a serene ambiance, it enhances spiritual focus with its traditional charm. A must-have for devotees, this agarbathi holder elevates pooja setups with elegance. Use it to offer fragrant incense to deities, invoking divine blessings. Its timeless craftsmanship adds authenticity and serenity to every ritual, making it a cherished addition to any spiritual household."
  },
  {
    id: 5,
    name: "Thalika",
    image: thalika,
    title: "Thalika",
    description: "Thalika, a traditional brass plate, is a versatile pooja essential for holding offerings like flowers, lamps, or prasad. Perfect for daily worship or festive rituals, its wide surface ensures convenient use and a sacred presentation. Crafted from premium brass, this thalika offers durability and a polished shine. Ideal for ceremonies like aarti or weddings, it enhances spiritual ambiance with its elegant design. A must-have for devotees, this thalika elevates pooja setups with traditional charm. Use it to present offerings or as a decorative piece. Its timeless craftsmanship brings divine energy and authenticity to every ritual, making it a cherished addition to any home."
  },
  {
    id: 6,
    name: "Lotta",
    image: lotta,
    title: "Lotta",
    description: "Lotta, a traditional brass water vessel, is a pooja essential for holding holy water during rituals. Perfect for sprinkling water during aarti or cleansing sacred spaces, its sleek design ensures easy handling. Crafted from premium brass, this lotta offers durability and a polished finish. Ideal for daily worship, festivals, or ceremonies like housewarmings, it enhances spiritual setups with its traditional charm. A must-have for devotees, this lotta elevates rituals with elegance. Use it for offerings or as a decorative piece. Its timeless craftsmanship brings divine energy and authenticity to every ceremony, making it a cherished addition to any spiritual household."
  },
];

const spiritualAndReligious = [
  {
    id: 1,
    name: "Kungumam",
    image: kunkumam,
    title: "Kungumam",
    description: "Kungumam, a sacred red vermilion powder, is essential for Hindu rituals, symbolizing auspiciousness and blessings. Perfect for applying tilak during poojas or ceremonies, it enhances spiritual ambiance with its vibrant color. Sourced from high-quality ingredients, this kungumam ensures a smooth texture and long-lasting hue. Ideal for daily worship, festivals, or weddings, it adds authenticity to devotional practices. A must-have for devotees, this kungumam elevates rituals with its traditional significance. Use it for markings or offerings to invoke divine grace. Its rich color and quality bring sacred energy and cultural reverence to every ceremony, making it a cherished spiritual essential."
  },
  {
    id: 2,
    name: "Kottai Paakku",
    image: kottaiPaakku,
    title: "Kottai Paakku",
    description: "Kottai Paakku, premium betel nuts, is a traditional offering in Hindu rituals, symbolizing prosperity and respect. Perfect for poojas, weddings, or festive ceremonies, it is paired with betel leaves for sacred offerings. Sourced from quality farms, this paakku ensures freshness and a firm texture. Ideal for daily worship or special occasions, it enhances spiritual setups with its cultural significance. A must-have for devotees, Kottai Paakku elevates rituals with authenticity. Use it in offerings or as part of traditional hospitality. Its natural quality brings divine blessings and tradition to every ceremony, making it a cherished addition to any spiritual household."
  },
  {
    id: 3,
    name: "Cow Dung Cake",
    image: cowDunkCake,
    title: "Cow Dung Cake",
    description: "Cow Dung Cake, a sacred item in Hindu rituals, is used in homams and poojas for its purifying properties. Perfect for Vedic ceremonies or festivals, it ensures a traditional, eco-friendly fuel for sacred fires. Sourced from pure cow dung, these cakes are carefully dried for consistent burning. Ideal for spiritual cleansing or housewarming rituals, they enhance the sanctity of pooja setups. A must-have for devotees, Cow Dung Cakes bring authenticity and divine energy to worship. Use them in homams or as an offering to invoke blessings. Their traditional significance and natural quality make them a cherished addition to any spiritual practice, fostering reverence and purity."
  },
  {
    id: 4,
    name: "Sival Paakku",
    image: sivalPaakku,
    title: "Sival Paakku",
    description: "Sival Paakku, premium betel nuts dedicated to Lord Shiva, is a sacred offering in Hindu rituals. Perfect for poojas, especially Maha Shivaratri, it pairs with betel leaves to symbolize devotion and purity. Sourced from quality farms, this paakku ensures freshness and a firm texture. Ideal for daily worship or festive ceremonies, it enhances spiritual setups with its traditional significance. A must-have for devotees, Sival Paakku elevates rituals with authenticity. Use it in offerings to invoke Lord Shiva’s blessings. Its natural quality and cultural reverence bring divine energy to every ceremony, making it a cherished addition to any spiritual household."
  },
  {
    id: 5,
    name: "Koppara Thenga",
    image: kopparaThenga,
    title: "Koppara Thenga",
    description: "Koppara Thenga, dried coconut halves, is a sacred offering in Hindu rituals, symbolizing purity and abundance. Perfect for poojas, weddings, or housewarmings, it is used in aarti or as a prasad base. Sourced from premium coconuts, this koppara thenga ensures quality and freshness. Ideal for daily worship or festive ceremonies, it enhances spiritual setups with its traditional significance. A must-have for devotees, Koppara Thenga elevates rituals with authenticity. Use it in offerings or as a decorative element to invoke divine blessings. Its natural quality and cultural reverence bring sacred energy to every ceremony, making it a cherished addition to any household."
  },
  {
    id: 6,
    name: "Vetti Ver",
    image: vettiVer,
    title: "Vetti Ver",
    description: "Vetti Ver, dried vetiver roots, is a sacred item in Hindu rituals, valued for its cooling and aromatic properties. Perfect for poojas or spiritual baths, it purifies spaces and enhances devotion. Sourced from premium vetiver, these roots ensure a refreshing fragrance and quality. Ideal for festivals or daily worship, Vetti Ver adds authenticity to spiritual setups. A must-have for devotees, it elevates rituals with its traditional significance. Use it in water for cleansing or as an offering to invoke divine blessings. Its natural aroma and cultural reverence bring serenity and sacred energy to every ceremony, making it a cherished addition to any spiritual practice."
  },
  {
    id: 7,
    name: "Vibuthi",
    image: vibuthi,
    title: "Vibuthi",
    description: "Vibuthi, sacred ash, is a revered item in Hindu rituals, symbolizing purity and Lord Shiva’s blessings. Perfect for applying on the forehead during poojas or after prayers, it enhances spiritual focus. Sourced from pure cow dung and herbs, this vibuthi ensures a fine texture and sanctity. Ideal for daily worship, Maha Shivaratri, or other ceremonies, it adds authenticity to rituals. A must-have for devotees, Vibuthi elevates devotion with its traditional significance. Use it for tilak or offerings to invoke divine grace. Its sacred quality and cultural reverence bring spiritual energy to every ceremony, making it a cherished addition to any devout household."
  },
  {
    id: 8,
    name: "Omam Kit 108",
    image: omamKit,
    title: "Omam Kit 108",
    description: "Omam Kit 108, a specialized set for the 108 Om Homam, includes premium ajwain (omam) and essentials for spiritual purification rituals. Perfect for health-focused poojas or festivals, it ensures an authentic devotional experience. Sourced from trusted suppliers, this kit offers high-quality materials for devotees. Ideal for special prayers or cleansing ceremonies, it supports a complete pooja setup with items like incense and kumkum. A spiritual essential, this kit enhances focus and reverence during worship. Perform the Omam ritual with ease, bringing divine blessings and well-being to your home. Crafted for tradition, it’s a must-have for households seeking spiritual harmony."
  },
];

const medicinalAndHerbal = [
  {
    id: 1,
    name: "Paneer Water",
    image: paneerWater,
    title: "Paneer Water",
    description: "Paneer Water, rose-infused water, is a traditional herbal product used in poojas and wellness rituals for its calming fragrance. Perfect for sprinkling during ceremonies or as a natural skin toner, it enhances spiritual and personal care. Sourced from premium rose petals, this paneer water ensures purity and a refreshing scent. Ideal for festivals, daily worship, or aromatherapy, it adds a soothing touch to rituals. A versatile essential, it elevates devotion and self-care with its natural quality. Use it for cleansing sacred spaces or as a refreshing mist. Its floral aroma and purity bring serenity and tradition to every use, cherished by households."
  },
  {
    id: 2,
    name: "Sambrani Powder",
    image: sambraniPowder,
    title: "Sambrani Powder",
    description: "Sambrani Powder, derived from benzoin resin, is a sacred herbal product used in poojas for its purifying, aromatic smoke. Perfect for creating a serene ambiance during worship or meditation, it cleanses negative energies. Sourced from premium resin, this powder ensures a rich fragrance and consistent quality. Ideal for festivals, daily rituals, or aromatherapy, it enhances spiritual focus. A must-have for devotees, Sambrani Powder elevates pooja setups with its traditional significance. Use it on charcoal for a fragrant offering or meditation aid. Its soothing aroma and purity bring divine energy to every ceremony, making it a cherished addition to any spiritual household."
  },
  {
    id: 3,
    name: "Sandhanam Powder",
    image: sandhanamPowder,
    title: "Sandhanam Powder",
    description: "Sandhanam Powder, finely ground sandalwood, is a sacred herbal product used in poojas for its divine fragrance and cooling properties. Perfect for applying as a paste during rituals or skincare, it enhances spiritual and personal care. Sourced from premium sandalwood, this powder ensures a rich aroma and smooth texture. Ideal for festivals, daily worship, or wellness routines, it adds authenticity to rituals. A versatile essential, Sandhanam Powder elevates devotion and beauty regimens. Use it for tilak, offerings, or as a face mask. Its calming scent and quality bring serenity and tradition to every use, making it a cherished addition to any household."
  },
  {
    id: 4,
    name: "Sandhanam Katti",
    image: sandhanamKatti,
    title: "Sandhanam Katti",
    description: "Sandhanam Katti, solid sandalwood sticks, is a revered herbal product used in poojas for its divine fragrance and spiritual significance. Perfect for grinding into paste for tilak or skincare, it enhances rituals and wellness. Sourced from premium sandalwood, these sticks ensure a rich aroma and lasting quality. Ideal for festivals, daily worship, or aromatherapy, they add authenticity to spiritual setups. A must-have for devotees, Sandhanam Katti elevates devotion and personal care. Use it for offerings or as a natural skin soother. Its calming scent and traditional value bring serenity and divine energy to every ritual, making it a cherished addition to any household."
  },
  {
    id: 5,
    name: "Panchi Nool",
    image: panchiNool,
    title: "Panchi Nool",
    description: "Panchi Nool, sacred cotton thread, is a traditional item used in poojas and rituals for tying during ceremonies or as a spiritual offering. Perfect for festivals, weddings, or daily worship, it symbolizes purity and divine connection. Sourced from high-quality cotton, this thread ensures strength and a soft texture. Ideal for tying kalash or as a sacred bracelet, it enhances ritual authenticity. A must-have for devotees, Panchi Nool elevates pooja setups with its traditional significance. Use it for tying during prayers or as part of ceremonial offerings. Its simplicity and cultural reverence bring divine blessings to every ritual, making it a cherished addition to any spiritual household."
  },
  {
    id: 6,
    name: "Sambrani Cup",
    image: sambraniCup,
    title: "Sambrani Cup",
    description: "Sambrani Cup, pre-packed benzoin resin cups, is a convenient herbal product for poojas, releasing purifying, aromatic smoke. Perfect for worship or meditation, it cleanses spaces and enhances spiritual ambiance. Sourced from premium resin, these cups ensure consistent burning and a rich fragrance. Ideal for festivals, daily rituals, or aromatherapy, they simplify preparation for devotees. A must-have for spiritual households, Sambrani Cups elevate pooja setups with ease and tradition. Light them for a fragrant offering or to create a serene atmosphere. Their soothing aroma and quality bring divine energy to every ceremony, making them a cherished addition for authentic spiritual practices."
  },
  {
    id: 7,
    name: "Kalasa Nool",
    image: kalasaNool,
    title: "Kalasa Nool",
    description: "Kalasa Nool, sacred thread for pooja kalash, is a traditional item used to adorn pots during Hindu rituals, symbolizing divinity. Perfect for weddings, housewarmings, or festivals, it enhances the sanctity of pooja setups. Sourced from high-quality cotton, this thread ensures durability and a soft texture. Ideal for tying around kalash with mango leaves, it adds authenticity to ceremonies. A must-have for devotees, Kalasa Nool elevates rituals with its traditional significance. Use it to complete sacred setups or as a spiritual offering. Its simplicity and cultural reverence bring divine blessings to every ceremony, making it a cherished addition to any spiritual household."
  },
  {
    id: 8,
    name: "Karpuram",
    image: karpuram,
    title: "Karpuram",
    description: "Karpuram, pure camphor, is a sacred herbal product used in poojas for its purifying flame and aromatic properties. Perfect for aarti or cleansing rituals, it creates a divine ambiance during worship. Sourced from high-quality sources, this karpuram ensures a clean burn and strong fragrance. Ideal for daily prayers, festivals, or meditation, it enhances spiritual focus and sanctity. A must-have for devotees, Karpuram elevates pooja setups with its traditional significance. Use it to light lamps or purify spaces, invoking divine blessings. Its pure, aromatic quality brings serenity and sacred energy to every ritual, making it a cherished addition to any spiritual household."
  },
  {
    id: 9,
    name: "Katti Manjal",
    image: kattiManjal,
    title: "Katti Manjal",
    description: "Katti Manjal, raw turmeric sticks, is a sacred herbal product used in poojas and wellness for its auspicious and medicinal properties. Perfect for rituals, weddings, or skincare, it symbolizes prosperity and purity. Sourced from premium turmeric, these sticks ensure vibrant color and quality. Ideal for daily worship, festivals, or as a natural skin cleanser, they add authenticity to spiritual practices. A versatile essential, Katti Manjal elevates rituals and beauty regimens. Use it for offerings, tilak, or as a face mask. Its natural potency and cultural reverence bring divine blessings and health benefits to every use, making it a cherished addition to any household."
  },
  {
    id: 10,
    name: "Namaa Katti",
    image: naamaKatti,
    title: "Namaa Katti",
    description: "Namaa Katti, sacred marking nut sticks, is a traditional herbal item used in poojas for its spiritual significance and ritualistic value. Perfect for festivals or special ceremonies, it enhances offerings with its unique properties. Sourced from high-quality sources, these sticks ensure authenticity and durability. Ideal for specific rituals or as part of traditional pooja setups, they add cultural reverence. A must-have for devotees, Namaa Katti elevates worship with its traditional significance. Use it in sacred offerings or as directed in rituals to invoke divine blessings. Its unique quality and spiritual value bring authenticity and sacred energy to every ceremony, cherished by spiritual households."
  },
  {
    id: 11,
    name: "Kasthuri Manjal",
    image: kasthuriManjal,
    title: "Kasthuri Manjal",
    description: "Kasthuri Manjal, wild turmeric powder, is a revered herbal product used in poojas and skincare for its aromatic and medicinal properties. Perfect for rituals, weddings, or as a natural face mask, it symbolizes purity and wellness. Sourced from premium wild turmeric, this powder ensures a vibrant color and fine texture. Ideal for daily worship, festivals, or beauty routines, it enhances spiritual and personal care. A versatile essential, Kasthuri Manjal elevates rituals with its traditional significance. Use it for tilak or skincare to invoke blessings and radiance. Its natural potency and fragrance make it a cherished addition to any household."
  },
  {
    id: 12,
    name: "Navathaniyam",
    image: navathaniyam,
    title: "Navathaniyam",
    description: "Navathaniyam, a mix of nine sacred grains, is a traditional item used in Navgraha poojas to appease planetary deities. Perfect for astrological rituals or festivals, it symbolizes abundance and cosmic harmony. Sourced from premium grains, this mix ensures quality and authenticity for spiritual practices. Ideal for homams or offerings, it enhances pooja setups with its traditional significance. A must-have for devotees, Navathaniyam elevates rituals with its sacred value. Use it in prayers to invoke planetary blessings and balance energies. Its cultural reverence and natural quality bring divine energy to every ceremony, making it a cherished addition to any spiritual household."
  },
];

const agriculturalAndNatural = [
  {
    id: 1,
    name: "Grass",
    image: grass,
    title: "Grass",
    description: "Grass, sacred darbha or kusha grass, is a traditional item used in Hindu rituals for its purifying and spiritual properties. Perfect for poojas, weddings, or homams, it creates a sacred space for offerings. Sourced from natural fields, this grass ensures authenticity and quality. Ideal for daily worship or special ceremonies, it enhances ritual setups with its traditional significance. A must-have for devotees, Grass elevates poojas with its symbolic purity. Use it as a seat for deities or in ritualistic sprinkling to invoke blessings. Its natural texture and cultural reverence bring divine energy to every ceremony, making it a cherished addition to any spiritual household."
  },
  {
    id: 2,
    name: "Nel",
    image: nel,
    title: "Nel",
    description: "Nel, whole paddy grains, is a sacred agricultural item used in Hindu rituals to symbolize prosperity and fertility. Perfect for poojas, housewarmings, or festivals, it is offered to deities or used in homams. Sourced from premium fields, this nel ensures authenticity and quality. Ideal for traditional ceremonies or as part of Navgraha rituals, it enhances spiritual setups with its symbolic significance. A must-have for devotees, Nel elevates poojas with its cultural reverence. Use it in offerings or as a sacred ingredient to invoke divine blessings. Its natural quality and traditional value bring prosperity and energy to every ritual, cherished by spiritual households."
  },
  {
    id: 3,
    name: "Mango Stick",
    image: mangoStick,
    title: "Mango Stick",
    description: "Mango Stick, dried mango tree twigs, is a sacred item used in Hindu homams and poojas for its auspicious properties. Perfect for festivals or rituals like housewarmings, it serves as fuel for sacred fires. Sourced from natural mango trees, these sticks ensure quality and authenticity. Ideal for Vedic ceremonies or spiritual cleansing, they enhance pooja setups with their traditional significance. A must-have for devotees, Mango Sticks elevate rituals with symbolic purity. Use them in homams to invoke divine blessings and prosperity. Their natural texture and cultural reverence bring sacred energy to every ceremony, making them a cherished addition to any spiritual household."
  },
  {
    id: 4,
    name: "Nel Pori",
    image: nelPori,
    title: "Nel Pori",
    description: "Nel Pori, puffed paddy grains, is a traditional item used in Hindu rituals and festivals, symbolizing abundance and devotion. Perfect for offerings during poojas or as prasad in sweets like pori urundai, it enhances spiritual practices. Sourced from premium paddy, this nel pori ensures quality and authenticity. Ideal for daily worship or festive ceremonies like Karthigai Deepam, it adds cultural significance to rituals. A must-have for devotees, Nel Pori elevates poojas with its traditional charm. Use it in offerings or desserts to invoke divine blessings. Its light texture and reverence bring sacred energy to every ceremony, cherished by spiritual households."
  },
  {
    id: 5,
    name: "Arasan Kattai",
    image: arasanKattai,
    title: "Arasan Kattai",
    description: "Arasan Kattai, peepal tree sticks, is a sacred item used in Hindu homams and poojas for its spiritual significance and purity. Perfect for Vedic rituals or festivals, it serves as fuel for sacred fires to invoke divine blessings. Sourced from natural peepal trees, these sticks ensure quality and authenticity. Ideal for housewarmings or cleansing ceremonies, they enhance pooja setups with their traditional value. A must-have for devotees, Arasan Kattai elevates rituals with symbolic sanctity. Use them in homams or as part of spiritual offerings to attract prosperity. Their natural quality and cultural reverence bring divine energy to every ceremony, cherished by spiritual households."
  },
];

const Pooja = () => {

  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div
        className="position-relative text-white text-start"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '250px',
          overflow: 'hidden',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.34)' }}
        ></div>

        <Container className="position-relative z-1 h-100 d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col className="px-3 px-md-3 py-5">
              <h1 className="fw-bold display-6" style={{ color: 'white', fontSize: '52px' }}>
                Pooja Products
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }} onClick={() => setActiveStep(0)}>Categories</p></div>
        {activeStep === 1 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Special Pooja Kit</p></div>)}
        {activeStep === 2 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Brass Pooja Products</p></div>)}
        {activeStep === 3 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Spiritual and Religious</p></div>)}
        {activeStep === 4 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Medicinal and Herbal</p></div>)}
        {activeStep === 5 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Agricultural and Natural</p></div>)}
      </div>
      {
        activeStep === 0 ? (
          <>
            <div className="container mt-3 mb-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Special Pooja Kit</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 1 ? 0 : 1)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Brass Pooja Product</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 2 ? 0 : 2)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Spiritual and Religious</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 3 ? 0 : 3)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Medicinal and Herbal</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 4 ? 0 : 4)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Agricultural and Natural</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 5 ? 0 : 5)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : activeStep === 1 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Special Pooja Kits
            </h2>
            <div className="row">
              {specialPoojaKit.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                >
                  <div
                    className="product h-80"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #eee',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      backgroundColor: '#f7e0a1ff',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="img-fluid"
                        />

                        {/* Overlay Effect */}
                        <div
                          className="overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        ></div>

                        {/* Discount Tag */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                          }}
                        >
                          30%
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
                          style={{ textDecoration: 'none', color: '#222' }}
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeStep === 2 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Brass Pooja Products
            </h2>
            <div className="row">
              {brassPoojaProducts.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                >
                  <div
                    className="product h-80"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #eee',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      backgroundColor: '#f7e0a1ff',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="img-fluid"
                        />

                        {/* Overlay Effect */}
                        <div
                          className="overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        ></div>

                        {/* Discount Tag */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                          }}
                        >
                          30%
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
                          style={{ textDecoration: 'none', color: '#222' }}
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeStep === 3 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Spiritual and Religious Pooja Products
            </h2>
            <div className="row">
              {spiritualAndReligious.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                >
                  <div
                    className="product h-80"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #eee',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      backgroundColor: '#f7e0a1ff',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="img-fluid"
                        />

                        {/* Overlay Effect */}
                        <div
                          className="overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        ></div>

                        {/* Discount Tag */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                          }}
                        >
                          30%
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
                          style={{ textDecoration: 'none', color: '#222' }}
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeStep === 4 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Medicinal and Herbal Pooja Products
            </h2>
            <div className="row">
              {medicinalAndHerbal.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                >
                  <div
                    className="product h-80"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #eee',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      backgroundColor: '#f7e0a1ff',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="img-fluid"
                        />

                        {/* Overlay Effect */}
                        <div
                          className="overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        ></div>

                        {/* Discount Tag */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                          }}
                        >
                          30%
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
                          style={{ textDecoration: 'none', color: '#222' }}
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeStep === 5 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Agricultural and Natural Pooja Products
            </h2>
            <div className="row">
              {agriculturalAndNatural.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                >
                  <div
                    className="product h-80"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #eee',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      backgroundColor: '#f7e0a1ff',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          className="img-fluid"
                        />

                        {/* Overlay Effect */}
                        <div
                          className="overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        ></div>

                        {/* Discount Tag */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                          }}
                        >
                          30%
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
                          style={{ textDecoration: 'none', color: '#222' }}
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>There are no Products to Show.</p>
        )
      }
      <style>
        {`
            .product:hover img {
              transform: scale(1.05);
            }
            .product:hover .overlay {
              opacity: 1;
            }
            @media (max-width: 576px) {
              .product img {
                height: 180px !important;
              }
            }
          `}
      </style>
    </>
  );
};

export default Pooja;
export { specialPoojaKit, brassPoojaProducts, spiritualAndReligious, medicinalAndHerbal, agriculturalAndNatural }