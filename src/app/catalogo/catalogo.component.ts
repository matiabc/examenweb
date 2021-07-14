import { Component, OnInit } from '@angular/core';
import {Libro} from '../clases'
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass']
})
export class CatalogoComponent implements OnInit {
  

    arreglo: Array<Libro> = [
    {id: 1,nombre: "Harry Potter", autor: "Jk Rowling", precio: 10000, desc: "El 1 de diciembre, coincidiendo con la fecha de la primera publicación en castellano, saldrán a la venta cuatro ediciones del primer tomo dedicadas a sendas casas de Hogwarts: Gryffindor, Hufflepuff, Ravenclaw y Slytherin.", portada: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" },
    {id: 2,nombre: "Harry Potter", autor: "Jk Rowling", precio: 10000, desc: "El 1 de diciembre, coincidiendo con la fecha de la primera publicación en castellano, saldrán a la venta cuatro ediciones del primer tomo dedicadas a sendas casas de Hogwarts: Gryffindor, Hufflepuff, Ravenclaw y Slytherin.", portada: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" },
    {id: 3,nombre: "Harry Potter", autor: "Jk Rowling", precio: 10000, desc: "El 1 de diciembre, coincidiendo con la fecha de la primera publicación en castellano, saldrán a la venta cuatro ediciones del primer tomo dedicadas a sendas casas de Hogwarts: Gryffindor, Hufflepuff, Ravenclaw y Slytherin.", portada: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" },
    {id: 4,nombre: "Alicia en el país de las maravillas", autor: "Lewis Carrol", precio: 9000, desc: "Alicia en el país de las maravillas de Lewis Carroll (seudónimo de Charles Lutwidge Dodgson) se ha convertido con el paso del tiempo en uno de los grandes clásicos de la literatura universal. En sus páginas repletas de personajes y situaciones insólitos en un mundo onírico, Carroll desafía la lógica y el lenguaje, y juega con el absurdo. Esta edición recupera las ilustraciones originales que John Tenniel creó para la primera edición del libro en 1865.", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/42/7f/427f18ddc9cb21b5d943a63517df875a.jpg" },
    {id: 5,nombre: "Despues", autor: "Stephen King", precio: 18000, desc: ".Jamie Conklin, el único hijo de una madre soltera, solo quiere tener una infancia normal. Sin embargo, desde que nació tiene una habilidad sobrenatural que su madre le insta a mantener en secreto: puede hacer hablar a los muertos. Después es Stephen King en estado puro, una novela inquietante y emotiva sobre la inocencia perdida y las pruebas que debemos superar para diferenciar el bien del mal. Deudora del gran clásico del autor It (Eso)", portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/72/05/7205de0f1693d11c234ea601532ce620.jpg" },
    {id: 6,nombre: "El manuscrito", autor: "John Grisham", precio: 12000, desc: "Cuando un huracán arrasa Camino Island, en la costa de Florida, una de las víctimas es el autor de thriller Nelson Kerr. El librero Bruce Cable sospecha que la tormenta no fue la causa de la muerte de Nelson y comienza a preguntarse si algunos oscuros personajes de las novelas de su amigo podrían ser más reales que ficticios. En algún lugar de su computador está el manuscrito de su nuevo libro, ¿podría encontrarse allí la clave del caso? Pero lo que esconden sus líneas es más impactante que cualquiera de los giros de las tramas de Nelson... y mucho más peligroso", portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/4d/b2/4db2ff123fe64d56dd6eade842e8a2a0.jpg" },
    ];
  
    //    {id: ,nombre: "", autor: "", precio: 9000, desc: "uwuwuwuwuwu", portada: "" },


  ngOnInit(): void {
  }

}

