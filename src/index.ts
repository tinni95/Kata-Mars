import { Move } from "./enums/Move.enum";
import { Direction } from "./enums/Direction.enum";
/**
 * WRAPPING EDGES:
 * We assume wrapping edges are 5 for x and 5 for y so 6 is -5 and -6 is 5
 */
export class Rover {
  x: number;
  y: number;
  direction: Direction;

  constructor(startX: number, startY: number, direction: Direction) {
    this.x = startX;
    this.y = startY;
    this.direction = direction;
  }

  incrementX() {
    if (this.x == 5) {
      this.x = -5;
      return;
    }
    this.x = this.x + 1;
  }

  decrementX() {
    if (this.x == -5) {
      this.x = 5;
      return;
    }
    this.x = this.x - 1;
  }

  incrementY() {
    if (this.y == 5) {
      this.y = -5;
      return;
    }
    this.y = this.y + 1;
  }

  decrementY() {
    if (this.y == -5) {
      this.y = 5;
      return;
    }
    this.y = this.y - 1;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
  }

  get() {
    console.log(this.x);
  }

  executeCommands(arr) {
    arr.forEach((c) => {
      switch (c) {
        case Move.FORWARD:
          if (this.direction == Direction.NORTH) {
            this.incrementY();
            break;
          }
          if (this.direction == Direction.SOUTH) {
            this.decrementY();
            break;
          }
          if (this.direction == Direction.EAST) {
            this.incrementX();
            break;
          }
          if (this.direction == Direction.WEST) {
            this.decrementX();
            break;
          }

        case Move.BACKWARD:
          if (this.direction == Direction.NORTH) {
            this.decrementY();
            break;
          }
          if (this.direction == Direction.SOUTH) {
            this.incrementY();
            break;
          }
          if (this.direction == Direction.EAST) {
            this.decrementX();
            break;
          }
          if (this.direction == Direction.WEST) {
            this.incrementX();
            break;
          }

        case Move.LEFT:
          if (this.direction == Direction.NORTH) {
            this.setDirection(Direction.WEST);
            break;
          }
          if (this.direction == Direction.SOUTH) {
            this.setDirection(Direction.EAST);
            break;
          }
          if (this.direction == Direction.EAST) {
            this.setDirection(Direction.NORTH);
            break;
          }
          if (this.direction == Direction.WEST) {
            this.setDirection(Direction.SOUTH);
            break;
          }

          break;

        case Move.RIGHT:
          if (this.direction == Direction.NORTH) {
            this.setDirection(Direction.EAST);
            break;
          }
          if (this.direction == Direction.SOUTH) {
            this.setDirection(Direction.WEST);
            break;
          }
          if (this.direction == Direction.EAST) {
            this.setDirection(Direction.SOUTH);
            break;
          }
          if (this.direction == Direction.WEST) {
            this.setDirection(Direction.NORTH);
            break;
          }
      }
    });
  }
}
