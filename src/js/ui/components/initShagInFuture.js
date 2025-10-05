import  shagInFutureData  from "../../mockData/shagInFutureData.js";
import { shagInFutureTemplate } from "../templates/shagInFutureTemplate.js";

const initShagInFuture = (shagInFutureNode) => {
  // Вставка HTML разметки shagInFuture на страницу
  shagInFutureNode.insertAdjacentHTML("beforeend", shagInFutureTemplate(shagInFutureData));
};

export default initShagInFuture;