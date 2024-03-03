import GameSavingLoader from "../js/class/GameSavingLoader";

test('should load game saving data correctly', async () => {
    const saving = await GameSavingLoader.load();
    const correct = {
        id: expect.any(Number),
        created: expect.any(Number),
        userInfo: {
          id: expect.any(Number),
          name: expect.any(String),
          level: expect.any(Number),
          points: expect.any(Number)
        }
      }
    expect(saving).toEqual(correct);
  });