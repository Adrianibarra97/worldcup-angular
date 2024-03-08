import { REST_SERVER_URL } from "../configurations"
import { of } from "rxjs"
import { FigurineServiceStub } from "./figurine.stub.service"
import { FilterFigurineJSON } from "src/app/domain/figurine"

export const httpClientSpy= jasmine.createSpyObj("HttpClient", [ 'get', 'post' ])
export const figuritaServiceStub: FigurineServiceStub = new FigurineServiceStub()

httpClientSpy.get.withArgs(`${REST_SERVER_URL}/figuritas`).and.returnValue(of(figuritaServiceStub.getAll()))
httpClientSpy.get.withArgs(`${REST_SERVER_URL}/figuritas/1`).and.returnValue(of(figuritaServiceStub.getOneById(1)))
httpClientSpy.post.and.callFake(
  (_url: `${typeof REST_SERVER_URL}/figuritas/filterByName/1/all`, body: FilterFigurineJSON) => 
  of(new Promise((res,rej)=>{
    res(figuritaServiceStub.getAllByTitle("", body))
  })
))
