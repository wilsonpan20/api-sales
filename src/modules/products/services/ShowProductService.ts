import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/ProductsRepositorys";
import Product from "../typeorm/entities/Product";
import AppError from "@shared/errors/AppError";


interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {

    const productsRepository = getCustomRepository(ProductRepository);


    const product = await productsRepository.findOne({ where: { id } });


    if (!product) {
      throw new AppError('Produto não encontrado');
    }


    return product;
  }
}

export default ShowProductService;
