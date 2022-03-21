import makeOrderRepository from "./orderRepository.js";

import db from "../infrastructure/database/connect.js";

export const orderRepository = () => makeOrderRepository({ db });
