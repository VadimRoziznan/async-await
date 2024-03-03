import GameSavingLoader from "../js/class/GameSavingLoader";
import read from "../js/funcs/reader.js";
import json from "../js/funcs/parser.js";


jest.mock('../js/funcs/reader.js');
jest.mock('../js/funcs/parser.js');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should load game saving data', async () => {
    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }

    read.mockResolvedValue(buffer);
    json.mockResolvedValue(data);

    const saving = await GameSavingLoader.load();

    expect(read).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledTimes(1);
    expect(saving).toEqual(JSON.parse(data));
  });

  test('should reject with an error if reading fails', async () => {
    const error = new Error('Failed to read file');
    read.mockRejectedValue(error);

    await expect(GameSavingLoader.load()).rejects.toThrow(error);
    expect(json).not.toHaveBeenCalled();
  });
});



