import read from "../funcs/reader.js";
import json from "../funcs/parser.js";


export default class GameSavingLoader {

  static async load() {
      const data = await read();
      const value = await json(data);
      const GameSaving = JSON.parse(value);
      
      return GameSaving;
  }
}
