const assert  = require('assert')
const chai  = require('chai')
const spies = require('chai-spies')
const { expect } = chai

chai.use(spies)

const animales = [
  {
    nombre: 'Puchi',
    tipo: 'perro'
  },
  {
    nombre: 'Michi',
    tipo: 'gato'
  },
  {
    nombre: 'Pegaso',
    tipo: 'escorpion'
  },
]

const lista = {
  animalesACargar: function(arrayAnimales){
    return this.animales = arrayAnimales
  },
  perros: function(){
    return this.animales.filter(animal => animal.tipo == 'perro')
  },
  gatos: function(){
    return this.animales.filter(animal => animal.tipo == 'gato')
  },
  otros: function(){
    return this.animales.filter(animal => (animal.tipo != 'perro' && animal.tipo != 'gato'))
  }
}

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      lista.animalesACargar(animales)
      const perros = animales.filter(animal => animal.tipo == 'perro')
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      lista.animalesACargar(animales)
      const gatos = [{
        nombre: 'Michi',
        tipo: 'gato'
      }]
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      lista.animalesACargar(animales)
      const otros = [{
        nombre: 'Pegaso',
        tipo: 'escorpion'
      }]
      expect(lista.otros()).to.eql(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      chai.spy.on(animales, "filter");

      const perros = lista.perros()

      expect(animales.filter).to.have.been.called()
    })
  })
})