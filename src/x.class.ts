export class X {
    public shape: string = "box";

    constructor(shape: string) {
        this.shape = shape
    }

    public logShape() {
        console.log(this.shape);
        return this.shape;
    }
}