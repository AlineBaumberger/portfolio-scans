/* ============================================================
   Données des spécimens.
   Pour ajouter un scan : copie un objet, change l'id (unique),
   et mets à jour les chemins vers tes fichiers .spz / photos.
   ============================================================ */

const SPECIMENS = [
  {
    id: "01",
    name: "La cétoine dorée",
    latin: "Cetoniinae",
    family: "Scarabaeidae",
    thumb: "assets/photos/argente.png",
    splat: "assets/models/specimen_arg2.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue la texture de la carapace et les reflets métalliques propres à l'espèce.",
    facts: {
      "Scan": "237.2K points",
      "Capture": "1440 photos",
      "Images stackées": "185 photos",
    },
    gallery: [
      "assets/photos/argente_cote.png",
      "assets/photos/argente_quart2.png",
      "assets/photos/argente_haut.png"
    ]
  },
  {
    id: "02",
    name: "Lonicorne tacheté",
    latin: "Coleoptera",
    family: "Cerambycidae",
    thumb: "assets/photos/pattes_fines.png",
    splat: "assets/models/specimen_lp.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue la texture de la carapace et les reflets métalliques propres à l'espèce.",
    facts: {
      "Scan": "375.6K points",
      "Capture": "3650 photos",
      "Images stackées": "360 photos",
    },
    gallery: [
      "assets/photos/specimen_lp_cote.png",
      "assets/photos/specimen_lp_haut.png",
      "assets/photos/render_fin_bas.png"
    ]
  },
  {
    id: "03",
    name: "Guêpe",
    latin: "Cetonia aurata",
    family: "Cetoniinae",
    thumb: "assets/photos/guepe.png",
    splat: "assets/models/specimen_guepe.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue la texture de la carapace et les reflets métalliques propres à l'espèce.",
    facts: {
      "Scan": "481K points",
      "Capture": "3600 photos",
      "Images stackées": "358 photos",
    },
    gallery: [
      "assets/photos/guepe_bas.png",
      "assets/photos/guepe_cote.png",
      "assets/photos/guepe_haut.png"
    ]
  },
  {
    id: "04",
    name: "Erotylidae",
    latin: "Coleoptera",
    family: "Megalodacne",
    thumb: "assets/photos/orange.png",
    splat: "assets/models/specimen_or.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue la texture de la carapace et les reflets métalliques propres à l'espèce.",
    facts: {
      "Scan": "1M points PLY vs 99.7K SPZ",
      "Capture": "2880 photos",
      "Images stackées": "230 photos"
    },
    gallery: [
      "assets/photos/orange_face.png",
      "assets/photos/orange_cote.png",
      "assets/photos/orange_bas.png"
    ]
  },
  {
    id: "05",
    name: "Longicorne africain",
    latin: "Sternotomis pulchra",
    family: "Cerambycidae",
    thumb: "assets/photos/turquoise.png",
    splat: "assets/models/specimen_turq.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue la texture de la carapace et les reflets métalliques propres à l'espèce.",
    facts: {
      "Scan": "3.36M points en PLY vs 347.3K SPZ",
      "Capture": "1260 photos",
      "Images stackées": "390 photos"
    },
    gallery: [
      "assets/photos/turquoise_bas1.png",
      "assets/photos/turquoise.png",
      "assets/photos/turquoise_haut.png"
    ]
  },
  {
    id: "06",
    name: "Bourdon",
    latin: "Bombus",
    family: "Apidae",
    thumb: "assets/photos/bourdon.png",
    splat: "assets/models/specimen_bourdon.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue les ailes, les poils propres à l'espèce, elle présente quelques soucis au niveau de l'intersection de la tige qui fixe l'insecte et les ailes (à refaire).",
    facts: {
      "Scan": "734.9K points PLY vs 319.6K SPZ",
      "Capture": "1441 photos",
      "Images stackées": "180 photos"
    },
    gallery: [
      "assets/photos/bourdon_face.png",
      "assets/photos/bourdon_quart.png",
      "assets/photos/bourdon_cote.png"
    ]
  },

   {
    id: "06",
    name: "Scarabée-cerf",
    latin: "Coleoptera",
    family: "Lucanidae",
    thumb: "assets/photos/scarabe_cote.png",
    splat: "assets/models/specimen_s.spz",
    description: "Reconstruction par Gaussian Splatting réalisée à partir d'une série de prises de vue macro. Le modèle restitue les ailes, les poils propres à l'espèce, elle présente quelques soucis au niveau de l'intersection de la tige qui fixe l'insecte et les ailes (à refaire).",
    facts: {
      "Scan": "734.9K points PLY vs 319.6K SPZ",
      "Capture": "1620 photos",
      "Images stackées": "223 photos"
    },
    gallery: [
      "assets/photos/scarabe.png",
      "assets/photos/scarabe_bas.png",
      "assets/photos/scarabe_cote.png"
    ]
  }


  
];
