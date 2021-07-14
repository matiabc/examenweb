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
    {id: 4,nombre: "Alicia en el país de las maravillas", autor: "Lewis Carrol", precio: 9000, desc: "Alicia en el país de las maravillas de Lewis Carroll (seudónimo de Charles Lutwidge Dodgson) se ha convertido con el paso del tiempo en uno de los grandes clásicos de la literatura universal. En sus páginas repletas de personajes y situaciones insólitos en un mundo onírico, Carroll desafía la lógica y el lenguaje, y juega con el absurdo. Esta edición recupera las ilustraciones originales que John Tenniel creó para la primera edición del libro en 1865.", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/42/7f/427f18ddc9cb21b5d943a63517df875a.jpg" },
    {id: 5,nombre: "Despues", autor: "Stephen King", precio: 18000, desc: ".Jamie Conklin, el único hijo de una madre soltera, solo quiere tener una infancia normal. Sin embargo, desde que nació tiene una habilidad sobrenatural que su madre le insta a mantener en secreto: puede hacer hablar a los muertos. Después es Stephen King en estado puro, una novela inquietante y emotiva sobre la inocencia perdida y las pruebas que debemos superar para diferenciar el bien del mal. Deudora del gran clásico del autor It (Eso)", portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/72/05/7205de0f1693d11c234ea601532ce620.jpg" },
    {id: 6,nombre: "El manuscrito", autor: "John Grisham", precio: 12000, desc: "Cuando un huracán arrasa Camino Island, en la costa de Florida, una de las víctimas es el autor de thriller Nelson Kerr. El librero Bruce Cable sospecha que la tormenta no fue la causa de la muerte de Nelson y comienza a preguntarse si algunos oscuros personajes de las novelas de su amigo podrían ser más reales que ficticios. En algún lugar de su computador está el manuscrito de su nuevo libro, ¿podría encontrarse allí la clave del caso? Pero lo que esconden sus líneas es más impactante que cualquiera de los giros de las tramas de Nelson... y mucho más peligroso", portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/4d/b2/4db2ff123fe64d56dd6eade842e8a2a0.jpg" },
    {id:2 ,nombre: "Tu Mejor Versión ", autor: "Angelica castro", precio: 7000, desc: "Quisiera tener los ojos de tal actriz, o las piernas de tal modelo, o el desplante de tal cantante, o la personalidad de tal artista…» ¿Cuántas veces nos descubrimos queriendo ser como alguien más? En una sociedad tan exigente y perfeccionista como la que nos rodea, no resulta extraño sentimos presionadas a más no poder. Entonces, empezamos a mirar hacia el lado y compararnos con otras mujeres, intentando cumplir estándares que son imposibles de alcanzar. Angélica Castro nos invita a cambiar nuestro espejo interior para que refleje a la persona más importante de nuestras vidas: ¡nosotras! ", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/b2/27/b227e12162e5f3560bfde4b5a30d90d2.jpg" },
    {id: 3,nombre: "El señor de los anillos", autor: "JRR Tolkien", precio: 17000, desc: "Los Anillos del Poder fueron forjados en antiguos tiempos por los herreros Elfos, y Sauron, el Señor Oscuro, forjó el Anillo Unico para gobernarlos a todos. Un anillo para encontrarlos. Un Anillo para atraerlos a todos y atarlos en las tinieblas...). Pero en una ocasión se lo quitaron, y aunque lo buscó por toda la Tierra Media nunca pudo encontrarlo. Al cabo de muchos años fue a caer casualmente en manos de Bilbo Bolsón.", portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/d6/5f/d65ff0ec308b898e9820831f97c20037.jpg" },
    {id: 7,nombre: "El martillo de dios", autor: "Arthur C. Clarke ", precio: 15000, desc: "Un maravilloso libro de ciencia ficción y ficción científica de la mano de un gran maestro, Arthur C. Clarke. En el siglo XXII, los humanos habitan la Luna y Marte. Una veterana de guerra ha fundado Crislam, doctrina religiosa impartida a través de módulos de realidad virtual. Aunque no queda comida natural, reciclando desechos se consigue cualquier plato. La ingeniería genética es capaz de todo, pero el Papa se opone a cada nuevo avance... La aparición de un asteroide que amenaza con caer sobre la Tierra desencadenará una crisis de consecuencias imprevisibles.", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/0d/a0/0da0bab28c33b6238e85a8b98ad0bfcc.jpg" },
    {id: 8,nombre: "El jardin de los inocentes", autor: "Carlos pinto", precio: 14000, desc: "Un estudiante de medicina que realiza abortos clandestinos se ve involucrado en la muerte de una muchacha embarazada que fallece en una de sus intervenciones. Al ser acusado de robar implementos desde su universidad, aprovecha ese delito menor para pasar una breve temporada en prisión y así eludir la investigación por la muerte de la joven. Desobedeciendo sus advertencias, su novia decide continuar con el macabro negocio a pesar de no tener mayores conocimientos. ", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/15/c8/15c88c74bb310126514fbd9a6d2b639a.jpg" },
    {id: 9,nombre: "De Chincol a Jote ", autor: "Rodrigo Verdugo", precio: 19000, desc: "De chincol a jote: 200 aves chilenas imprescindibles es un paseo visual por ilustraciones naturalistas de especies que pueden avistarse a lo largo de nuestro país, clasificadas por zonas geográficas, ambientes y características. No están todas, pero sí las que creemos más representativas que habitan o visitan el territorio, y algunas que no son tan fáciles de ver. Está dedicado a quienes desean conocer y reconocer a las aves que vemos a través de las ventanas y en las incursiones a la naturaleza.    ", portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/b5/f7/b5f78a466288c4c1e62e8dc292c2c2c3.jpg" },
    {id: 10,nombre: "Otro palo al agua", autor: "Ernesto Castro", precio: 15300, desc: "En esta colección de ensayos, el joven filósofo español Ernesto Castro emprende una cruzada contra la crítica, los artistas y las instituciones culturales hegemónicas, intentando desentrañar las coordenadas ideológicas del presente. Aquí se deslizan preguntas sobre la identidad personal en internet, la muerte y la función del arte, la estética gamer del Estado Islámico, los límites de la comedia o el auge y caída de YouTube. En este libro, Ernesto Castro transita el límite entre la erudición académica y un pensamiento insurrecto que emerge sin moldes preestablecidos. Es, por encima de todo, una combinación única de la escolástica tradicional con una visión nihilista y burlesca de las maquinaciones realizadas en nombre del mundillo del arte, las élites culturales y eso que algunos llaman «progreso»", portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/6e/22/6e2230a8ffb6e153fb998b4f2ad39c30.jpg" }

  ];
  
    //    {id: ,nombre: "", autor: "", precio: 9000, desc: "uwuwuwuwuwu", portada: "" },


  ngOnInit(): void {
  }

}

