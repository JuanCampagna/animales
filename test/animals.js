const assert  = require('assert')
const chai  = require('chai')
const spies = require('chai-spies')
const { expect } = chai

const animalesReales = [
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
      lista.animalesACargar(animalesReales)
      const perros = animalesReales.filter(animal => animal.tipo == 'perro')
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = [{
        nombre: 'Michi',
        tipo: 'gato'
      }]
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      const otros = [{
        nombre: 'Pegaso',
        tipo: 'escorpion'
      }]
      expect(lista.otros()).to.eql(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      expect(animales.filter).to.have.been.called()
    })
  })
})