export class Cat {
  name: string;
  constructor(name: string){
      this.name = name;
  }
  greet(){
      return "こんにちはご主人さま。私は" + this.name + "です。";
  }
}
