class Rectangle {
  constructor(width, height) {
    this.w = width;
    this.h = height;
  }
  get width() {
    return this.w;
  }
  get height() {
    return this.h;
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
   getPerimeter() {
    return 4 * this.h;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());
window.Rectangle = Rectangle;
window.Square = Square;
