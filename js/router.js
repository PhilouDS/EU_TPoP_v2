let currentRoute = "home";

const routes = [
  "home",
  "bot-actions-realm-selection",
  "bot-actions",
  "bot-specific-action",
  "bot-main-turn",
  "bot-action",
  "bot-realm-targeting",
  "player-resolutions",
  "credits"
];

export function getCurrentRoute() {
  return currentRoute;
}

export function navigateTo(route) {
  if (routes.includes(route)) {
    currentRoute = route;
  }
}