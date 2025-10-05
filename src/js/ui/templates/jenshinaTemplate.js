export const jenshinaTemplate = (jenshinaData) => {
    return `
        <div class="jenshina__left">
            <img src="${jenshinaData.imageSrc}" alt="jenshina Image" />
        </div>
        <div class="jenshina__right">
            <p class="ranniy_dostyp">${jenshinaData.ranniyDostyp}</p>
            <h2 class="demo_title">${jenshinaData.demoTitleText}</h2>
            <p class="bed_text">${jenshinaData.bedText}</p>
            <a href="${jenshinaData.zaprosRanniyDostypLink}" class="zapros_ranniy_dostyp">${jenshinaData.zaprosRanniyDostypText}</a>
        </div>
    
    `;
};