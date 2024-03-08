import { Injectable } from '@angular/core'
import { FilterUserJSON, User } from 'src/app/domain/user'
import { BaseService } from '../baseService'

@Injectable({
  providedIn: 'root'
})
export abstract class UserService implements BaseService<User> {

  abstract getAll(): Promise<User[]>

  abstract getOneById(id: number): Promise<User>

  abstract getAllByTitle(searchText: string, filterJSON: FilterUserJSON): Promise<User[]>

  abstract getFilterBy(filterJSON: FilterUserJSON): Promise<User[]>

  abstract updateUser(updatedUser: User): Promise<void>
}
