import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@WebSocketGateway(
  // {
  //   cors: {
  //     origin: '*',
  //   },
  // }
)
export class UsersGateway {
  
  @WebSocketServer() server: Server;

  constructor(private readonly usersService: UsersService) {}

  @SubscribeMessage('createUser')
  async createUser(client: Socket, @MessageBody() createUserDto: CreateUserDto){
    const user = await this.usersService.create(createUserDto);
    this.server.emit('userCreated', user)
  }

  @SubscribeMessage('getAllUsers')
  async getAllUsers(client: Socket) {
    const users = await this.usersService.findAll();
    //1: Envía un mensaje solo al cliente específico que inició la conexión o el evento (respuesta privada)
    // client.emit('users', users) 
    //2. Envía un mensaje a todos los clientes conectados al servidor ()
    this.server.emit('users', users); 
  }

  @SubscribeMessage('getUserById')
  async getUserById(client: Socket, @MessageBody() payload: { id: number }){
    const { id } = payload;
    const user = await this.usersService.findOne(id);
    this.server.emit('userFound', user);
  }
  

  @SubscribeMessage('updateUser')
  async updateUser(client: Socket, @MessageBody() payload: { id: number, updateUserDto: UpdateUserDto }) {
    const { id, updateUserDto } = payload;
    const updatedUser = await this.usersService.update(id, updateUserDto);
    this.server.emit('userUpdated', updatedUser);
  }

  @SubscribeMessage('deleteUser')
  async deleteUser(client: Socket, @MessageBody() payload: { id: number }) {
    const deletedUser = await this.usersService.delete(payload.id);
    this.server.emit('userDeleted', deletedUser);
  }
}
