import read from "../funcs/reader.js";
import json from "../funcs/parser.js";


export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => {
          return json(data);
        })
        .then((parsedData) => {
          const saving = JSON.parse(parsedData);
          resolve(saving);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
