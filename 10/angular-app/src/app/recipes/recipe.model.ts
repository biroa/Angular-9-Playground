export class RecipeModel{
  public name: string;
  public description: string;
  public imagePath: string;

  /**
   * @param name Holds the name of the recipes.
   * @param desc Holds the description of the recipes.
   * @param imagePath Holds the path of the Image.
   */
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
