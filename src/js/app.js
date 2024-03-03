import GameSavingLoader from "./class/GameSavingLoader.js";


(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving); 
  } catch (error) {
    console.error(error); 
  }
})();