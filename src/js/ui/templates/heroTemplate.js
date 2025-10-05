export const createHeaderTemplate = (header) => {
  return `
    <h1 class="left__header">
      ${header}
    </h1>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="left__description">
      ${description}
    </p>
  `;
};

export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return `
        <input type="text" value="" placeholder="${title}" />
      `;

    case "button":
      return `
          <button class="cta_buttons__signin btn primary-btn">
            ${title}
          </button>
      `;

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="left__cta_buttons">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createSocialApproveTemplate = (socialApprove) => {
  if (!socialApprove) return '';

  return `
    <div class="left__social_approve">
      <img src="${socialApprove.avatars.src}" alt="${socialApprove.avatars.alt}" />
      <span>${socialApprove.text}</span>
    </div>
  `;
};

export const heroTemplate = ({
  heroCtaButtons,
  illustration,
  header,
  description,
  socialApprove,
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const descriptionTemplate = createDescriptionTemplate(description);
  const buttonsTemplate = createInputsTemplate(heroCtaButtons);
  const illustrationTemplate = createIllustrationTemplate(illustration);
  const socialApproveTemplate = createSocialApproveTemplate(socialApprove);

  const resultTemplate = `
    <div class="hero_section__left">
        ${headerTemplate}
        ${descriptionTemplate}
        ${buttonsTemplate}
        ${socialApproveTemplate}   
    </div>
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};