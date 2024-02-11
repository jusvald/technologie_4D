import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'Chiamate_http';
  data: Object | undefined;
  loading: boolean | undefined;
  http: any;
  o: any;
 
  makeRequest(): void {
    //Notifichiamo che stiamo attendendo dei dati
    this.loading = true; 
    //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la 
    //risposta
    this.o.subscribe(this.getData);
  }
  //Il metodo che notifica la risposta (nota che usiamo una "arrow function")
  getData = (d : Object) =>
  {
    this.data = d; //Notifico l’oggetto ricevuto dal server
    this.loading = false;  // Notifico che ho ricevuto i dati
  }
  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe((data: Object | undefined) => {
        this.data = data;
        this.loading = false;
      });
  }
  styleUrls: ['./foo-component.component.css']
}
export class FooComponentComponent implements OnInit {
fooData : Foo[];
data: Object;
loading: boolean;
o: Observable<Object>;
oFoo : Observable<Foo[]>;
constructor(public http: HttpClient) { }
makeRequest(): void {
this.loading = true;
this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
this.o.subscribe(this.getData);
}
getData = (d: Object) => {
this.data = d;
this.loading = false;
}
//Nota bene, questo è un metodo alternativo al metodo makeRequest
makeCompactRequest(): void {
this.loading = true;
this.http
.get('https://jsonplaceholder.typicode.com/posts/1')
.subscribe(data => {
this.data = data;
this.loading = false;
});
}
//L'operazione di post necessita un parametro in più.
//Viene creata una stringa (JSON.strigify) a partire da un oggetto Typescript
makeCompactPost(): void {
this.loading = true;
this.http
.post('https://jsonplaceholder.typicode.com/posts',
JSON.stringify({
body: 'bar',
title: 'foo',
userId: 1
})
)
.subscribe(data => {
this.data = data;
this.loading = false;
});
}
makeTypedRequest() : void
{
//oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
this.oFoo.subscribe(data => {this.fooData = data;});
}

ngOnInit() {
}
}



