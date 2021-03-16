import { Move } from "./../enums/Move.enum";
import { Direction } from "./../enums/Direction.enum";
import { Rover } from "../index";

let rover;
const INITIAL_X = 0;
const INITIAL_Y = 0;
const INITIAL_DIRECTION = Direction.NORTH;

beforeEach(() => {
  rover = new Rover(INITIAL_X, INITIAL_Y, INITIAL_DIRECTION);
});

describe("On startup", () => {
  test("all values are assigned correcty", () => {
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(INITIAL_DIRECTION);
  });
});

describe("On single move forward", () => {
  test("if facing north, moves north correctly, and does not alter other values", () => {
    rover.executeCommands([Move.FORWARD]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y + 1);
    expect(rover.direction).toBe(INITIAL_DIRECTION);
  });

  test("if facing south, moves south correctly, and does not alter other values", () => {
    rover.setDirection(Direction.SOUTH);
    rover.executeCommands([Move.FORWARD]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y - 1);
    expect(rover.direction).toBe(Direction.SOUTH);
  });

  test("if facing east, moves east correctly, and does not alter other values", () => {
    rover.setDirection(Direction.EAST);
    rover.executeCommands([Move.FORWARD]);
    expect(rover.x).toBe(INITIAL_X + 1);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.EAST);
  });

  test("if facing west, moves west correctly, and does not alter other values", () => {
    rover.setDirection(Direction.WEST);
    rover.executeCommands([Move.FORWARD]);
    expect(rover.x).toBe(INITIAL_X - 1);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.WEST);
  });
});

describe("On single move backward", () => {
  test("if facing north, moves south correctly, and does not alter other values", () => {
    rover.executeCommands([Move.BACKWARD]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y - 1);
    expect(rover.direction).toBe(INITIAL_DIRECTION);
  });

  test("if facing south, moves north correctly, and does not alter other values", () => {
    rover.setDirection(Direction.SOUTH);
    rover.executeCommands([Move.BACKWARD]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y + 1);
    expect(rover.direction).toBe(Direction.SOUTH);
  });

  test("if facing east, moves west correctly, and does not alter other values", () => {
    rover.setDirection(Direction.EAST);
    rover.executeCommands([Move.BACKWARD]);
    expect(rover.x).toBe(INITIAL_X - 1);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.EAST);
  });

  test("if facing west, moves east correctly, and does not alter other values", () => {
    rover.setDirection(Direction.WEST);
    rover.executeCommands([Move.BACKWARD]);
    expect(rover.x).toBe(INITIAL_X + 1);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.WEST);
  });
});

describe("On rotate left", () => {
  test("if facing north, rotates left correctly, and points to West, without altering other values", () => {
    rover.executeCommands([Move.LEFT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.WEST);
  });

  test("if facing east, rotates left correctly, and points to North, without altering other values", () => {
    rover.setDirection(Direction.EAST);
    rover.executeCommands([Move.LEFT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.NORTH);
  });

  test("if facing south, rotates left correctly, and points to East, without altering other values", () => {
    rover.setDirection(Direction.SOUTH);
    rover.executeCommands([Move.LEFT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.EAST);
  });

  test("if facing west, rotates left correctly, and points to South, without altering other values", () => {
    rover.setDirection(Direction.WEST);
    rover.executeCommands([Move.LEFT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.SOUTH);
  });
});

describe("On rotate right", () => {
  test("if facing north, rotates right correctly, and points to East, without altering other values", () => {
    rover.executeCommands([Move.RIGHT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.EAST);
  });

  test("if facing east, rotates right correctly, and points to South, without altering other values", () => {
    rover.setDirection(Direction.EAST);
    rover.executeCommands([Move.RIGHT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.SOUTH);
  });

  test("if facing south, rotates right correctly, and points to West, without altering other values", () => {
    rover.setDirection(Direction.SOUTH);
    rover.executeCommands([Move.RIGHT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.WEST);
  });

  test("if facing west, rotates right correctly, and points to North, without altering other values", () => {
    rover.setDirection(Direction.WEST);
    rover.executeCommands([Move.RIGHT]);
    expect(rover.x).toBe(INITIAL_X);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.direction).toBe(Direction.NORTH);
  });
});

describe("on a set of commands", () => {
  test("FORWARD FORWARD FORWARD", () => {
    rover.executeCommands([Move.FORWARD, Move.FORWARD, Move.FORWARD]);
    expect(rover.y).toBe(INITIAL_Y + 3);
  });
  test("FORWARD RIGHT FORWARD", () => {
    rover.executeCommands([Move.FORWARD, Move.RIGHT, Move.FORWARD]);
    expect(rover.y).toBe(INITIAL_Y + 1);
    expect(rover.y).toBe(INITIAL_X + 1);
  });
  test("FORWARD RIGHT FORWARD BACK LEFT BACK", () => {
    rover.executeCommands([
      Move.FORWARD,
      Move.RIGHT,
      Move.FORWARD,
      Move.BACKWARD,
      Move.LEFT,
      Move.BACKWARD,
    ]);
    expect(rover.y).toBe(INITIAL_Y);
    expect(rover.y).toBe(INITIAL_X);
  });
});

describe("wrapping edges", () => {
  test("if we move Forward 6 times we get to -5 on the y axis", () => {
    rover.executeCommands([
      Move.FORWARD,
      Move.FORWARD,
      Move.FORWARD,
      Move.FORWARD,
      Move.FORWARD,
      Move.FORWARD,
    ]);

    expect(rover.y).toBe(-5);
  });

  test("if we move BackWrad 6 times we get to 5 on the y axis", () => {
    rover.executeCommands([
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
    ]);

    expect(rover.y).toBe(5);
  });

  test("if we move BackWrad 6 times and forward once we get to -5 on the y axis", () => {
    rover.executeCommands([
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.BACKWARD,
      Move.FORWARD,
    ]);

    expect(rover.y).toBe(-5);
  });
});
