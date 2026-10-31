// Placeholder stock photos (Pexels, free license) — swap for your own in /public/industries/
const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

export const industries = [
  {
    title: "Dairy",
    text: "Milk, whey and permeate concentrated and dried into stable powders with minimal heat damage.",
    tech: ["Evaporation", "Spray Drying", "Fluid Bed Drying"],
    image: px(5946717),
  },
  {
    title: "Food & Beverage",
    text: "Juices, extracts and flavours concentrated gently to keep taste, colour and nutrition intact.",
    tech: ["Evaporation", "Spray Drying"],
    image: px(3025236),
  },
  {
    title: "Starch",
    text: "Native and modified starches dried uniformly at high throughput with low energy per tonne.",
    tech: ["Spin Flash Drying", "Evaporation"],
    image: px(7543105),
  },
  {
    title: "Sugar",
    text: "Multi-effect juice evaporation and crystallisation designed around steam economy.",
    tech: ["Evaporation", "Process Equipment"],
    image: px(11477544),
  },
  {
    title: "Effluent & Waste Water",
    text: "Effluent streams reduced to recoverable water and dry solids, with nothing discharged.",
    tech: ["Zero Liquid Discharge", "Evaporation", "Agitated Thin Film Drying"],
    image: px(5712211),
  },
  {
    title: "Distillery",
    text: "Spent wash concentrated and dried so it becomes fuel or fertiliser instead of effluent.",
    tech: ["Evaporation", "Zero Liquid Discharge"],
    image: px(10040004),
  },
  {
    title: "Pulp & Paper",
    text: "Black liquor evaporation trains built for high solids, scaling resistance and uptime.",
    tech: ["Evaporation", "Process Equipment"],
    image: px(1037775),
  },
  {
    title: "Chemical",
    text: "Salts, pigments and intermediates dried to tight moisture and particle-size targets.",
    tech: ["Spray Drying", "Fluid Bed Drying", "Spin Flash Drying"],
    image: px(3735763),
  },
  {
    title: "Pharmaceutical",
    text: "Solvent recovery and drying of APIs and intermediates in GMP-ready equipment.",
    tech: ["Agitated Thin Film Drying", "Evaporation", "Process Equipment"],
    image: px(3683045),
  },
  {
    title: "Textile",
    text: "Dye-house effluent and brine recovered for reuse, meeting zero-discharge norms.",
    tech: ["Zero Liquid Discharge", "Evaporation"],
    image: px(6717035),
  },
];
