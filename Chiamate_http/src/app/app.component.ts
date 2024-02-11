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
 
}


