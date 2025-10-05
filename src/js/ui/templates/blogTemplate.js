export const blogTemplate = (blogData) => {
    const largeBlockHTML = `
    <div class="container_for_block">
        <div class="large_block">
            <img class="large_img" src="${blogData.largeBlock.imgSrc}" />
            <div class="blok_large">
                <p class="data_big">${blogData.largeBlock.date}</p>
                <p class="text_big">${blogData.largeBlock.text}</p>
                <a href="${blogData.largeBlock.link}" class="ssylka_eto_futare">Читать полную статью</a>
            </div>
        </div>
    <div class="container_for_block"> 
    `;

    const smallBlocksHTML = blogData.smallBlocks.map(block => `
        <div class="text_and_img_small">
            <img class="photo" src="${block.imgSrc}" />
            <div class="blok_small">
                <p class="data_small">${block.date}</p>
                <p class="text_small">${block.text}</p>
                <a href="${block.link}" class="ssylka_eto_futare">Читать полную статью</a>
            </div>
        </div>
    `).join('');

    return `
        <h2 class="header_blog">Многое Происходит, Мы Ведем об Этом Блог.</h2>
        ${largeBlockHTML}
        <div class="small_blocks">${smallBlocksHTML}</div>
    `;
};