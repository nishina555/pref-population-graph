import { buildEntities, convertResponseToEntities } from "./entitiesBuilder";

describe("buildEntities", () => {
  it("正常系", () => {
    const entities = [
      {
        id: 1,
        title: "example1",
      },
      {
        id: 2,
        title: "example2",
      },
    ];
    expect(buildEntities(entities)).toEqual({
      byId: {
        1: {
          id: 1,
          title: "example1",
        },
        2: {
          id: 2,
          title: "example2",
        },
      },
      allIds: [1, 2],
    });
  });
});

describe("convertResponseToEntities", () => {
  it("正常系", () => {
    const response = [
      {
        title: "example1",
      },
      {
        title: "example2",
      },
    ];
    expect(convertResponseToEntities(response)).toEqual([
      {
        id: 1,
        title: "example1",
      },
      {
        id: 2,
        title: "example2",
      },
    ]);
  });
});
