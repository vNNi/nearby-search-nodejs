import { orderRepository } from "../data-access/index.js";

import curryGetOrderById from "./get-order-id.js";

export const getOrderById = curryGetOrderById({ repository: orderRepository() });
