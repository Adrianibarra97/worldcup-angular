import { Injectable } from '@angular/core'
import { UserService } from './user.service'
import { User, FilterUserJSON, UserJSON } from 'src/app/domain/user'
import { userStubList } from './user.stub.list'
import { REST_SERVER_URL } from '../configurations'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
class UserServiceStub extends UserService {

  public activeUser: User = User.fromJSON(userStubList[0])

  async getAll(): Promise<User[]> {
    return userStubList.map((userJson: UserJSON) => User.fromJSON(userJson))
  }

  async getOneById(id: number): Promise<User> {
    const users: User[] = await this.getAll()
    if(id <= users.length) {
      return users[id]
    }
    throw("Error Code: 404 \nNo se encontro el usuario buscado!")
  }

  async getAllByTitle(searchText: string, filterJSON: FilterUserJSON): Promise<User[]> {
    return this.getAll()
  }

  async getFilterBy(filterJSON: FilterUserJSON): Promise<User[]> {
    return this.getAll()
  }

  async updateUser(updatedUser: User): Promise<void> {
    const users: User[] = await this.getAll()
    if(updatedUser.id <= users.length) {
      this.activeUser = updatedUser
    } else {
      throw("Error Code: 404 \nNo se encontro el usuario a actualizar!")
    }
	}

  getActiveUser(): User {
    this.activeUser.username = "juli2024"
    return this.activeUser
  }
}

export const userHttpClientSpy = jasmine.createSpyObj('HttpClient', [ 'get', 'put' ])
const userService: UserServiceStub = new UserServiceStub()

userHttpClientSpy.get.withArgs(`${REST_SERVER_URL}/usuarios`).and.returnValue(of(userStubList))

userHttpClientSpy.get.withArgs(`${REST_SERVER_URL}/usuarios/2`).and.returnValue(of(userStubList[2]))

userHttpClientSpy.get.withArgs(`${REST_SERVER_URL}/usuarios/0`).and.returnValue(of(userService.getActiveUser().toJSON()))

userHttpClientSpy.put.and.returnValue(of(userService.getActiveUser().toJSON()))