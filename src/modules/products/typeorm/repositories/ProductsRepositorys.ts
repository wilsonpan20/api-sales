import { Repository } from "typeorm";
import Product from "../entities/Product";





export class ProductRepository extends Repository<Product> {

  public async findByName(name: string): Promise<Product | undefined | null> {
    const product = await this.findOne({
      where: {
        name
      }
    });

    return product;
  }
}




