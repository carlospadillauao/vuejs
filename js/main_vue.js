//mostrar propiedades del modelo
const vue_1 = new Vue({
    el: 'main_vue', //el>> element 
    data: { // propiedades del modelo
        texto_vue_1: 'hola mundo xd vue 1',
        texto_vue_2: 'hola mundo xd vue 2',
        nombre_vue: 'nombre_v',
        apellido_vue: 'apellido_v',
        if_value: 5,
        for_array: [1 , 2, "cuatro" , 10],
        elemento_seleccionado: null,
        for_object:[
            {nombre: "x", valor: "6", variable: "r"},
            {nombre: "y", valor: "5", variable: "rf"},
            {nombre: "z", valor: "4", variable: "rgh"}
        ],
        for_object_object: {nombre: "x", valor: "6", variable: "r"},
        for_select: [{value: 4, text: "carro"},{value: 5, text: "moto"},{value: 8, text: "coche"}],
        new_element_array: null,
        resaltar_fondo: null
    },
    methods: {
        alerta1(){
            alert("boton1")
        },
        alerta2(){
            alert("boton2")
        },
        crear_elemento_for_array(){
            //alert(this.new_element_array) // this. >> buscar en este clase/metodo/elemento ... etc Vue
            this.for_array.unshift(this.new_element_array) // unshift >> añade elemento al inicio de una lista (append)
            this.new_element_array = null;
        },
        borrar_elemento_for_array(indice){
            this.for_array.splice(indice, 1) // splice >> eliminar elementos a partir de un indice
        },
        resaltar(indice){
            this.resaltar_fondo = indice
        }
    },
    computed: { // propiedad computada
        computada_1(){
            return this.nombre_vue + ' ' + this.apellido_vue
        },
        computada_2(){
            //return this.for_array;
            return this.for_array.sort(); // sort >> retorna un arreglo ordenado
        }
    }
});

const vue2 = new Vue({ //nueva instancia vue
    el: '#new_vue2',
    data: {
        texto: "texto vue 2"
    }
})