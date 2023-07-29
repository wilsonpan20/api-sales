import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/ProductsRepositorys";
import AppError from "@shared/errors/AppError";


interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {

    const productsRepository = getCustomRepository(ProductRepository);


    const product = await productsRepository.findOne({ where: { id } });


    if (!product) {
      throw new AppError('Produto não encontrado');
    }


   await productsRepository.remove(product);
  }
}

export default DeleteProductService;


