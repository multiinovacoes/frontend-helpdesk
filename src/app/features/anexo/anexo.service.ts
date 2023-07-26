import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anexo } from 'src/app/core/models/anexo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnexoService {

  anexoUrl: string;

  constructor(private http: HttpClient) {
    this.anexoUrl = `${environment.apiUrl}/anexos`;
  }

  listar(codigoTicket: any): Promise<any> {
    let params = new HttpParams();
    params = params.set("codigoTicket", codigoTicket);

    return this.http
      .get<any>(`${this.anexoUrl}/listar?`, { params })
      .toPromise()
      .then((res) => <any>res)
      .then((data) => {
        return data.anexoDtoList;
      });
  }

  adicionar(anexo: Anexo): Promise<Anexo> {
    return this.http.post<Anexo>(`${this.anexoUrl}`, anexo).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http
      .delete(`${this.anexoUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }


  download(fileName: string): Promise<any> {
    return this.http
      .get<Blob>(`${this.anexoUrl}/file/${fileName}`, { responseType: 'blob' as 'json' }) 
      .toPromise().then((response) => {
      return response;
      });
    }  
}
