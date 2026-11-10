import { rollDie } from "./dice.js";

export function renderQuestion({
  container,
  text,
  note = null,
  yesLabel = "Yes",
  noLabel = "No",
  onYes,
  onNo
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-question">
        ${text}
      </div>

      ${note
        ? `<div class="diagram-note">${note}</div>`
        : ""
      }

      <div class="diagram-choices">
        <button
          id="diagram-yes-button"
          class="diagram-choice"
          type="button"
        >
          ${yesLabel}
        </button>

        <button
          id="diagram-no-button"
          class="diagram-choice"
          type="button"
        >
          ${noLabel}
        </button>
      </div>
    </div>
  `;

  container
    .querySelector("#diagram-yes-button")
    .addEventListener("click", onYes);

  container
    .querySelector("#diagram-no-button")
    .addEventListener("click", onNo);
}

export function renderDieRoll({
  container,
  text,
  die,
  choices,
  rollLabel,
  resultLabel,
  continueLabel,
  formatFace = null,
  rollImageSrc = null,
  rollImageAlt = "",
  onResolve
}) {
  function displayLabel(label) {
    if (formatFace) {
      return formatFace(label);
    }

    return label;
  }

  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-question">
        ${text}
      </div>

      <div class="diagram-die-controls">
        <button
          id="diagram-roll-button"
          class="diagram-roll-button"
          type="button"
          aria-label="${rollLabel}"
          title="${rollLabel}"
        >
          <span class="diagram-roll-icon">
            ${rollImageSrc
              ? `
                <img
                  class="diagram-roll-image"
                  src="${rollImageSrc}"
                  alt="${rollImageAlt}"
                >
              `
              : "🎲"
            }
          </span>

          <span class="diagram-roll-label">
            ${rollLabel}
          </span>
        </button>

        <div
          id="diagram-die-result"
          class="diagram-die-result"
          hidden
        >
          <div class="diagram-die-result-label">
            ${resultLabel}
          </div>

          <div
            id="diagram-die-face"
            class="diagram-die-face"
          ></div>

          <button
            id="diagram-die-continue-button"
            class="diagram-confirm"
            type="button"
          >
            ${continueLabel}
          </button>
        </div>
      </div>

      <div
        id="diagram-manual-die-choices"
        class="diagram-choices diagram-roll-choices"
      >
        ${choices.map((choice, index) => `
          <button
            class="diagram-choice"
            type="button"
            data-choice-index="${index}"
          >
            ${displayLabel(choice.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  const rollButton =
    container.querySelector("#diagram-roll-button");

  const resultContainer =
    container.querySelector("#diagram-die-result");

  const faceContainer =
    container.querySelector("#diagram-die-face");

  const continueButton =
    container.querySelector(
      "#diagram-die-continue-button"
    );

  const manualChoices =
    container.querySelector(
      "#diagram-manual-die-choices"
    );

  let rolledFace = null;
  let rolledChoice = null;

  function displayFace(face) {
    return displayLabel(face.label);
  }

  function findChoice(face) {
    return choices.find((choice) =>
      choice.values.includes(face.value)
    );
  }

  rollButton.addEventListener("click", () => {
    rolledFace = rollDie(die);
    rolledChoice = findChoice(rolledFace);

    if (!rolledChoice) {
      console.warn(
        `No branch found for die result: ${rolledFace.value}`
      );
      return;
    }

    faceContainer.innerHTML =
      displayFace(rolledFace);

    resultContainer.hidden = false;
    manualChoices.hidden = true;
    rollButton.hidden = true;
  });

  continueButton.addEventListener("click", () => {
    if (!rolledChoice) {
      return;
    }

    onResolve(
      rolledChoice,
      rolledFace
    );
  });

  container
    .querySelectorAll("[data-choice-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const index =
          Number(button.dataset.choiceIndex);

        onResolve(
          choices[index],
          null
        );
      });
    });
}

export function renderAction({
  container,
  text,
  details = [],
  note = null,
  confirmLabel = null,
  onConfirm = null
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-action">
        ${text}
      </div>

      ${details.map(detail => `
        <div class="diagram-detail">
          ${detail}
        </div>
      `).join("")}

      ${note
        ? `<div class="diagram-note">${note}</div>`
        : ""
      }

      ${confirmLabel && onConfirm
        ? `
          <button
            id="diagram-action-confirm-button"
            class="diagram-confirm"
            type="button"
          >
            ${confirmLabel}
          </button>
        `
        : ""
      }
    </div>
  `;

  if (confirmLabel && onConfirm) {
    container
      .querySelector("#diagram-action-confirm-button")
      .addEventListener("click", onConfirm);
  }
}

export function renderGoTo({
  container,
  text,
  details = [],
  onClick
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <button
        id="diagram-goto-button"
        class="diagram-goto"
        type="button"
      >
        ${text}
      </button>

      ${details.map(detail => `
        <div class="diagram-detail">
          ${detail}
        </div>
      `).join("")}
    </div>
  `;

  container
    .querySelector("#diagram-goto-button")
    .addEventListener("click", onClick);
}

export function renderEnd({
  container,
  text,
  details = []
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-end">
        ${text}
      </div>

      ${details.map(detail => `
        <div class="diagram-detail">
          ${detail}
        </div>
      `).join("")}
    </div>
  `;
}

export function renderNumberInput({
  container,
  text,
  details = [],
  note = null,
  label,
  min,
  max,
  confirmLabel,
  invalidMessage,
  onConfirm
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-action">
        ${text}
      </div>

      ${details.map(detail => `
        <div class="diagram-detail">
          ${detail}
        </div>
      `).join("")}

      ${note
        ? `<div class="diagram-note">${note}</div>`
        : ""
      }

      <label
        class="diagram-input-label"
        for="diagram-number-input"
      >
        ${label}
      </label>

      <input
        id="diagram-number-input"
        class="diagram-number-input"
        type="number"
        min="${min}"
        max="${max}"
        inputmode="numeric"
      >

      <div
        id="diagram-input-error"
        class="diagram-input-error"
        hidden
      >
        ${invalidMessage}
      </div>

      <button
        id="diagram-confirm-button"
        class="diagram-confirm"
        type="button"
      >
        ${confirmLabel}
      </button>
    </div>
  `;

  const input =
    container.querySelector("#diagram-number-input");

  const error =
    container.querySelector("#diagram-input-error");

  function submit() {
    const value = Number(input.value);

    if (
      !Number.isInteger(value)
      || value < min
      || value > max
    ) {
      error.hidden = false;
      return;
    }

    error.hidden = true;
    onConfirm(value);
  }

  container
    .querySelector("#diagram-confirm-button")
    .addEventListener("click", submit);

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      submit();
    }
  });

  input.focus();
}

export function renderActionConfirmation({
  container,
  cardLabel,
  cardId,
  actionType,
  actionName,
  confirmLabel,
  onConfirm
}) {
  container.innerHTML = `
    <div class="diagram-step">
      <div class="diagram-card-id">
        ${cardLabel} ${cardId}
      </div>

      <div class="diagram-card-action">
        ${actionType}: ${actionName}
      </div>

      <button
        id="diagram-confirm-button"
        class="diagram-confirm"
        type="button"
      >
        ${confirmLabel}
      </button>
    </div>
  `;

  container
    .querySelector("#diagram-confirm-button")
    .addEventListener("click", onConfirm);
}

