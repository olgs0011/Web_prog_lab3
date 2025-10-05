import  rightsReservedData  from "../../mockData/rightsReservedData.js";
import { rightsReservedTemplate } from "../templates/rightsReservedTemplate.js";

const initRightsReserved = (rightsReservedNode) => {
  // Вставка HTML разметки "rights_reserved" на страницу
  rightsReservedNode.insertAdjacentHTML("beforeend", rightsReservedTemplate(rightsReservedData));
};

export default initRightsReserved;