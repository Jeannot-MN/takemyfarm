import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Order } from "../domain/entities/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

@Service()
export class OrderService {

    private orderRepository: OrderRepository;

    constructor(@InjectRepository() orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    public findById(id: number): Promise<Order | undefined> {
        return this.orderRepository.findById(id);
    }

    public findAll(): Promise<Order[]> {
        return this.orderRepository.findAll();
    }

    public query(q: string): Promise<Order[]> {
        return this.orderRepository.query(q);
    }

    public save(order: Order): Promise<Order> {
        return this.orderRepository.save(order);
    }

    // public search(q:string, first:number, after:number, sellerId: number): Promise<Paginate<Product>>{
    //     return this.orderRepository.search(q, first, after, sellerId);
    // }
}