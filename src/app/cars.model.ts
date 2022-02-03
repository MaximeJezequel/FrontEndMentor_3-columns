export class Car {
  public type!: string;
  public image!: string;
  public text!: string;
  public color!: string;

  constructor(type: string, image: string, text: string, color: string) {
    this.type = type;
    this.image = image;
    this.text = text;
    this.color = color;
  }
}
