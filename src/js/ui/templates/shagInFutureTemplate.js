export const shagInFutureTemplate = (shagInFutureData) => {
  const headerHTML = `
    <div class="header_text_box">
      <h1>${shagInFutureData.header}</h1>
    </div>
    <div class="btn_box">
      <a href="${shagInFutureData.requestLink}">
        <button class="btn_last">${shagInFutureData.requestButtonText}</button>
      </a>
    </div>
  `;

  const gptIcon = `
    <div class="logo">
      <img class="gpt_icon" src="${shagInFutureData.blockGPT[0].imgSrc}" 
      alt="${shagInFutureData.blockGPT[0].alt}" />
      <p class="contaktiki">${shagInFutureData.blockGPT[0].text}</p>
    </div>
  `;

  const blocksHTML = shagInFutureData.blocks.map(
      (block) => `
      <div class="${block.title === 'Контакты' ? 'get_in_touch' : block.title === 'Компания' ? 'company' : 'links'}">
        <p class="shtyki_ssilok">${block.title}</p>
        <div class="contakt_info">
          <p class="contaktiki">${block.text}</p>
        </div>
      </div>
    `).join("");

  return `
    <div class="shag_in_future_header">
      ${headerHTML}
      <div class="gpt_box">
        ${gptIcon}
        ${blocksHTML}
      </div>
    </div>
  `;
};