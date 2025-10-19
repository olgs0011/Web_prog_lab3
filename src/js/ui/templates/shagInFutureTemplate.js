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

  const addressText = `
    ${shagInFutureData.blockGPT[0].address.street}<br>
    ${shagInFutureData.blockGPT[0].address.city}, ${shagInFutureData.blockGPT[0].address.region}, ${shagInFutureData.blockGPT[0].address.postalCode}<br><br>
    ${shagInFutureData.blockGPT[0].copyright}
  `;

  const gptIcon = `
    <div class="logo">
      <img class="gpt_icon" src="${shagInFutureData.blockGPT[0].imgSrc}" 
      alt="${shagInFutureData.blockGPT[0].alt}" />
      <p class="contaktiki">${addressText}</p>
    </div>
  `;

  const blocksHTML = shagInFutureData.blocks.map((block) => {
    let contentHTML = '';
    
    if (block.links) {
      contentHTML = block.links.map(link => 
        `<a href="${link.href}" class="item__link">${link.text}</a>`
      ).join('<br>');
    } else if (block.contactInfo) {
      contentHTML = `
        ${block.contactInfo.address}<br>
        ${block.contactInfo.phone}<br>
        ${block.contactInfo.email}
      `;
    }

    const className = block.title === 'Контакты' ? 'get_in_touch' : 
                     block.title === 'Компания' ? 'company' : 'links';

    return `
      <div class="${className}">
        <p class="shtyki_ssilok">${block.title}</p>
        <div class="contakt_info">
          <p class="contaktiki">${contentHTML}</p>
        </div>
      </div>
    `;
  }).join("");

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
