export const club = {
  name: "Association de Tir Berckois",
  shortName: "ATB",
  city: "Berck-sur-Mer",
  tagline: "Tirez en toute sécurité, progressez dans la convivialité.",
  season: "1er septembre 2026 – 31 août 2027",
  founded: "11 octobre 1973",
  siege: {
    label: "Siège social",
    lines: ["Mairie de Berck", "62600 Berck-sur-Mer"],
  },
  mail: {
    label: "Courrier",
    lines: ["498 rue de l’Impératrice", "62600 Berck"],
  },
  stand: {
    label: "Stand de tir",
    street: "55 Chemin des Vérotières",
    city: "62600 Berck-sur-Mer",
  },
  phones: [
    {
      role: "Stand",
      note: "Pendant les heures d’ouverture",
      display: "06 13 06 24 54",
      href: "tel:+33613062454",
    },
    {
      role: "Président",
      note: "Pierre Balavoine",
      display: "06 29 77 31 54",
      href: "tel:+33629773154",
    },
    {
      role: "Secrétaire",
      note: "Secrétariat du club",
      display: "06 33 15 97 03",
      href: "tel:+33633159703",
    },
  ],
  emails: [
    { role: "Contact", address: "contact@associationdetirberckois.fr" },
    { role: "Président", address: "president@associationdetirberckois.fr" },
    { role: "Association", address: "asso-tir-berckois@sfr.fr" },
  ],
  map: {
    embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=1.568%2C50.388%2C1.592%2C50.402&layer=mapnik&marker=50.39493%2C1.57978",
    link: "https://www.openstreetmap.org/?mlat=50.39493&mlon=1.57978#map=16/50.39493/1.57978",
    street:
      "https://www.google.com/maps/search/?api=1&query=55+Chemin+des+Verotieres+62600+Berck",
  },
} as const;

export const nav = [
  { href: "#stand", label: "Le stand" },
  { href: "#horaires", label: "Horaires" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#inscription", label: "Inscription" },
  { href: "#club", label: "Le club" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroHours = [
  { days: "Lun · Mer · Ven · Sam", time: "14 h – 17 h" },
  { days: "Dimanche", time: "9 h 30 – 12 h 30" },
] as const;

export const hours = [
  { day: "Lun", time: "14 h – 17 h", open: true },
  { day: "Mar", time: "Fermé", open: false },
  { day: "Mer", time: "14 h – 17 h", open: true },
  { day: "Jeu", time: "Fermé", open: false },
  { day: "Ven", time: "14 h – 17 h", open: true },
  { day: "Sam", time: "14 h – 17 h", open: true },
  { day: "Dim", time: "9 h 30 – 12 h 30", open: true },
] as const;

export const ranges = [
  {
    distance: "10 m",
    title: "Air comprimé",
    detail: "Armes à air comprimé.",
  },
  {
    distance: "25 m",
    title: "Armes de poing",
    detail: "Pistolets 9 mm, .45 ACP ou .22 LR, revolvers .38 ou .22 LR.",
  },
  {
    distance: "20 m",
    title: "Quilles",
    detail: "Tir aux armes de poing sur quilles.",
  },
  {
    distance: "50 m",
    title: "Carabine",
    detail: "Carabines .22 LR. Le tir debout au gros calibre est interdit.",
  },
] as const;

export const homologation =
  "Stand homologué FFTir n° 8847, le 29 mai 2024, pour le 10 m, le 25 m et le 50 m.";

export const rentals = [
  { name: "Carabine, pistolet, revolver", price: "4 €", note: "la séance" },
  { name: "Carabine 7,62", price: "5 €", note: "la séance" },
] as const;

export const ammunition = [
  { name: "9 mm", pack: "50", price: "17 €" },
  { name: ".38 Spl", pack: "50", price: "23 €" },
  { name: ".357 Mag", pack: "50", price: "26 €" },
  { name: ".45 ACP", pack: "50", price: "27 €" },
  { name: ".44 Mag", pack: "50", price: "40 €" },
  { name: ".22 LR", pack: "50", price: "8 €" },
  { name: "Plombs", pack: "500", price: "8 €" },
  { name: "7,62 × 39", pack: "10", price: "5 €" },
  { name: "7,62 × 39", pack: "50", price: "25 €" },
  { name: "7,65", pack: "50", price: "25 €" },
] as const;

export const ammunitionNote =
  "Toutes les munitions se consomment sur place, sauf les plombs.";

export const memberships = [
  {
    label: "Plus de 20 ans",
    total: "181 €",
    lines: [
      { label: "Cotisation ATB", price: "88 €" },
      { label: "Licence FFT", price: "93 €" },
    ],
  },
  {
    label: "Moins de 20 ans",
    total: "110 €",
    lines: [
      { label: "Cotisation ATB", price: "42 €" },
      { label: "Licence FFT", price: "68 €" },
    ],
  },
] as const;

export const familyNote =
  "Même famille : −44 € par adulte supplémentaire, −21 € par jeune.";

export const accessCard = "Carte d’accès : caution 5 €, remise aux nouveaux adhérents.";

export const feeDeadline =
  "Pour une arme de catégorie B, la cotisation est à régler au plus tard le 30 septembre.";

export const documents = [
  { title: "Photo d’identité", detail: "Un exemplaire" },
  { title: "Pièce d’identité", detail: "En cours de validité" },
  { title: "Justificatif de domicile", detail: "À votre nom" },
  { title: "Téléphone et courriel", detail: "Pour vous joindre" },
  { title: "Fiches d’inscription", detail: "À retirer au club" },
  { title: "Certificat médical", detail: "Modèle FFTir, moins de 3 mois" },
  { title: "Autorisation parentale", detail: "Pour les mineurs" },
  { title: "Cotisation de la saison", detail: "Du 1er sept. au 31 août" },
] as const;

export const medicalForm =
  "https://associationdetirberckois.fr/wp-content/uploads/2025/06/Modele-FFTir-de-Certificat-medical-2025_2026.pdf";

export const categoryB = [
  "Trois séances, espacées d’au moins deux mois, dans les douze mois qui précèdent la première demande.",
  "Le club tient le registre. L’avis favorable de la FFT est délivré sous couvert du président, qui certifie l’assiduité.",
] as const;

export const siaNote =
  "Pas d’interconnexion entre ITAC et le SIA : la nouvelle licence se dépose sur le compte SIA. Le certificat médical n’y est pas demandé, mais il reste obligatoire pour la licence.";

export const facts = [
  { label: "Création", value: "11 octobre 1973" },
  { label: "FFTir", value: "15 62 305" },
  { label: "Homologation", value: "n° 8847" },
  { label: "SIREN", value: "491 372 629" },
  { label: "Compte SIA", value: "BALPIE90XBAS" },
  { label: "Agrément", value: "Jeunesse et Sports" },
] as const;

export const news = [
  {
    date: "Janvier 2026",
    title: "Pas de tir 25 m",
    text: "Rénovation des chemins de roulement, avec les volontaires du club.",
  },
  {
    date: "Au stand",
    title: "Initiations",
    text: "Séances encadrées par les formateurs aux armes de poing.",
  },
  {
    date: "50 mètres",
    title: "Gros calibre",
    text: "Le tir debout est interdit sur ce pas de tir.",
  },
] as const;

export const links = [
  { label: "Fédération Française de Tir", href: "https://www.fftir.org/" },
  { label: "Ligue Nord-Pas-de-Calais", href: "https://www.liguedetirnpdc.fr/" },
  {
    label: "Facebook du club",
    href: "https://www.facebook.com/AssociationTirBerckois/",
  },
] as const;
