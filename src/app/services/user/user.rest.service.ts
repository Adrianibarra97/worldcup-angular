import { AuthService } from 'src/app/services/auth/auth.service'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UserService } from './user.service'
import { User, FilterUserJSON, UserJSON } from 'src/app/domain/user'
import { REST_SERVER_URL } from '../configurations'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserServiceRest extends UserService {

	constructor(private http: HttpClient, private authService: AuthService) {
		super()
	}

	async getAll(): Promise<User[]> {
		const usersJSON$ = this.http.get<UserJSON[]>(REST_SERVER_URL + "/usuarios")
		const users = await lastValueFrom(usersJSON$)
		return users.map(userJSON => User.fromJSON(userJSON))
	}

	async getOneById(id: number): Promise<User> {
		const userJSON$ = this.http.get<UserJSON>(REST_SERVER_URL + "/usuarios/" + id)
    const user = await lastValueFrom(userJSON$)
    return User.fromJSON(user)
	}

	async getAllByTitle(searchText: string, filterJSON: FilterUserJSON): Promise<User[]> {
		return this.getAll()
	}

	async getFilterBy(filterJSON: FilterUserJSON): Promise<User[]> {
		return this.getAll()
	}

	async updateUser(updatedUser: User): Promise<void> {
		const userId = this.authService.getActiveUserId()
		updatedUser.id = parseInt(userId)

		const updatedUserJSON = updatedUser.toJSON()
		const day = updatedUser.birthOfDate.getDate() + 1
		const month = updatedUser.birthOfDate.getMonth() + 1
		updatedUserJSON.fechaNacimiento = 
			updatedUser.birthOfDate.getFullYear() + '-' +
			month + '-' +
			day

		const updateUser$ = this.http.put<void>(REST_SERVER_URL + "/usuarios", updatedUserJSON)
		await lastValueFrom(updateUser$)
	}
}