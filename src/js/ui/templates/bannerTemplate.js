export const bannerTemplate = (bannerData) => {
    return `
        <div class="banner_content">
            <div class="banner_left">
                <h2 class="banner_title">${bannerData.heading}</h2>
                <p class="banner_osnovn_text">${bannerData.subheading}</p>
            </div>
            <div class="btn_cont">
                <button class="button_banner">${bannerData.buttonText}</button>
            </div>
        </div>
    `;
};