export const fire = {
    primary: "#d74a21",
    secondary: "#faba56"
}

export const water = {
    primary: "#09a9e5",
    secondary: "#09d9e5"
}

export const thunder = {
    primary: "#cdc036",
    secondary: "#f4f29e"
}

export const dragon = {
    primary: "#b6a9cf",
    secondary: "#451a91"
}

export const unknown = {
    primary: "#968282",
    secondary: "#c3c3c3"
}

export const ice = {
    primary: "#7bf3f7",
    secondary: "#d7e1e2"
}

export const darkColor = {
    primary: "black",
    secondary: "#C3C3C3"
}

export const getBackgroundColor = (type: string) => {
  let primaryColor = unknown.primary;
  let secondaryColor = unknown.secondary;

  switch (type) {
    case "fire":
    case "fire*":
    case "fireblight":
    case "fireblight*":
      primaryColor = fire.primary;
      secondaryColor = fire.secondary;
      break;
    case "water":
    case "water*":
    case "waterblight":
    case "waterblight*":
    case "sleep*":
    case "sleep":
      primaryColor = water.primary;
      secondaryColor = water.secondary;
      break;
    case "thunder":
    case "thunder*":
    case "thunderblight":
    case "thunderblight*":
    case "paralysis":
    case "paralysis*":
    case "stun":
      primaryColor = thunder.primary;
      secondaryColor = thunder.secondary;
      break;
    case "dragon":
    case "dragon*":
    case "dragonblight":
    case "dragonblight*":
    case "poison":
    case "poison*":
    case "noxious poison":
      primaryColor = dragon.primary;
      secondaryColor = dragon.secondary;
      break;
    case "ice":
    case "ice*":
    case "iceblight":
    case "iceblight*":
      primaryColor = ice.primary;
      secondaryColor = ice.secondary;
      break;
    case "blastblight*":
    case "blastblight":
      primaryColor = darkColor.primary;
      secondaryColor = darkColor.secondary;
      break;
    default:
      primaryColor = unknown.primary;
      secondaryColor = unknown.secondary;
      break;
  }

  return`linear-gradient(120deg, ${primaryColor}, ${secondaryColor})`;
};