import { bannerData } from "../../mockData/bannerData.js";
import { bannerTemplate } from "../templates/bannerTemplate.js";

const initBanner = (sectionNode) => {
    sectionNode.insertAdjacentHTML("beforeend", bannerTemplate(bannerData));
};

export default initBanner;