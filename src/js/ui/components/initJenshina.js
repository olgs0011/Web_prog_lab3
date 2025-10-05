import { jenshinaData } from "../../mockData/jenshinaData.js";
import {jenshinaTemplate } from "../templates/jenshinaTemplate.js";

const initJenshina = (sectionNode) => {
    sectionNode.insertAdjacentHTML("beforeend", jenshinaTemplate(jenshinaData));
};

export default initJenshina;