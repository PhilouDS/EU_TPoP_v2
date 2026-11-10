export const ICONS = {
  botPower: "B",
  manpower: "m",
  colonist: "<",
  administrativeActionCard: "\uF8FF",
  diplomaticActionCard: "›",
  militaryActionCard: "ç",
  town: "t",
  vassal: "v",
  unrest: "u",
  rebelTown: "R",
  rebelUnit: "?",
  prestige: "0",
  prestige1: "1",
  prestige2: "2",
  prestige3: "3",
  prestige5: "5",
  explore2Skull: "k",
  explore3Skull: "l",
  claim: "G",
  core: "F",
  alliance: "A",
  royalMarriage: "M",
  influence: "I",
  cube: "z",
  cardinal: "C",
  ducats: "D",
  militaryPower: "c",
  diplomaticPower: "b",
  administrativePower: "a",
  monarchPower: "d",
  interest: ",",
  stability: "s",
  illHealth: "H",
  battleInfantry: "f",
  battleDoubleInfantry: "g",
  battleCavalry: "h",
  battleArtillery: "i",
  battleAction: "€",
  disputedSuccession: "L",
  activeAlly: "K",
  battlegroundArea: "§",
  imperialAuthority: "E",
  rebelDieRebellion: "r",
  rebelDieLoseBotPower1: "p",
  rebelDieLoseBotPower2: "q",
  rebelDieLoseBotPower3: "o",
  rebelDieNoEffect: "⚫",
  rebelDieRemoveUnrest: "n",
};

export function icon(name) {
  const character = ICONS[name];

  if (!character) {
    console.warn(`Unknown TPoP icon: ${name}`);
    return "";
  }

  return `<span class="tpop-icon" aria-hidden="true">${character}</span>`;
}

export function formatIcons(text) {
  return text.replace(
    /\{([a-zA-Z0-9]+)\}/g,
    (match, name) => ICONS[name] ? icon(name) : match
  );
}