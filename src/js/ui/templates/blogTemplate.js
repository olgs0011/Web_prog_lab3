export const blogTemplate = (blogData) => {
    const largeBlocksHTML = blogData.largeBlocks.map(block => `
        <div class="large_block">
            <img class="large_img" src="${block.imgSrc}" alt="${block.alt}" />
            <div class="blok_large">
                <p class="data_big">${block.date}</p>
                <p class="text_big">${block.title}</p>
                <a href="${block.link}" class="ssylka_eto_futare">Читать полную статью</a>
            </div>
        </div>
    `).join('');

    const smallBlocksHTML = blogData.smallBlocks.map(block => `
        <div class="text_and_img_small">
            <img class="photo" src="${block.imgSrc}" alt="${block.alt}" />
            <div class="blok_small">
                <p class="data_small">${block.date}</p>
                <p class="text_small">${block.title}</p>
                <a href="${block.link}" class="ssylka_eto_futare">Читать полную статью</a>
            </div>
        </div>
    `).join('');

    return `
        <h2 class="header_blog">${blogData.pageTitle}</h2>
        <div class="container_for_block">
            ${largeBlocksHTML}
            <div class="small_blocks">${smallBlocksHTML}</div>
        </div>
    `;
};
