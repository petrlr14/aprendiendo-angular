export class Zapatillas {
  /*private _name: string;
  private _price: number;
  private _marca: string;
  private _color: string;
  private _stock: boolean;


  constructor(name: string, price: number, marca: string, color: string, stock: boolean) {
    this._name = name;
    this._price = price;
    this._marca = marca;
    this._color = color;
    this._stock = stock;
  }*/

  /*se puede hacer así*/
  constructor(
    private _name: string,
    private _price: number,
    private _marca: string,
    private _color: string,
    private _stock: boolean
  ) {}/*forma mas sencilla */


  get name(): string {
    return this._name;
  }


  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get marca(): string {
    return this._marca;
  }

  set marca(value: string) {
    this._marca = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get stock(): boolean {
    return this._stock;
  }

  set stock(value: boolean) {
    this._stock = value;
  }
}
