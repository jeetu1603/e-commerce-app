**auth Route**
| Endpoint | Method | Description |
|--------------------|--------|---------------|
| /api/auth/register | POST | create a user |
| /api/auth/login | POST | login a user |

**users Route**
| Endpoint | Method | Description |
|-------------------------|--------|-----------------|
| /api/users/:userId | PUT | update a user |
| /api/users/:userId | DELETE | delete a user |
| /api/users/find/:userId | GET | get a user |
| /api/users/ | GET | get all users |
| /api/users/stats | GET | get users stats |

**products Route**
| Endpoint | Method | Description |
|-------------------------|--------|-----------------|
| /api/users/:userId | PUT | update a user |
| /api/users/:userId | DELETE | delete a user |
| /api/users/find/:userId | GET | get a user |
| /api/users/ | GET | get all users |
| /api/users/stats | GET | get users stats |

**carts Route**
| Endpoint | Method | Description |
|-------------------------|--------|-------------------|
| /api/carts | POST | create a cart |
| /api/carts/:cartId | PUT | update a cart |
| /api/carts/:cartId | DELETE | delete a cart |
| /api/carts/find/:cartId | GET | get a user's cart |
| /api/carts | GET | get all carts |

**orders Route**
| Endpoint | Method | Description |
|---------------------------|--------|--------------------|
| /api/orders | POST | create a order |
| /api/orders/:orderId | PUT | update a order |
| /api/orders/:orderId | DELETE | delete a order |
| /api/orders/find/:orderId | GET | get a user's order |
| /api/orders | GET | get all orders |
| /api/orders/incom | GET | get monthly income |
