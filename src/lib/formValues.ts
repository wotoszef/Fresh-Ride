export interface FormProps {
  value: string | number;
  label: string;
}

export const Scents = [
  { value: "mountain_breeze", label: "Górska Bryza" },
  { value: "tropical_sunset", label: "Tropikalny zachód słońca" },
  { value: "citrus_zing", label: "Cytrusowy Zing" },
  { value: "vanilla_dreams", label: "Waniliowy sen" },
  { value: "ocean_mist", label: "Oceaniczna bryza" },
  { value: "fresh_forest", label: "Świeży Las" },
] as FormProps[];

export const Crops = [
  { value: "just_heads", label: "Tylko głowy" },
  { value: "entire_body", label: "Całe ciało" },
  { value: "cropped_car", label: "Wycięte auto" },
  { value: "photo_as_it_is", label: "Zostaw obrazek tak jak jest" },
  { value: "other", label: "Inne (opisz przy komentarzu dostarczenia)" },
] as FormProps[];
