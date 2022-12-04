/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    })

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Souza', 'Twitter', 'Brasil', 'Av. Paulista', '20', 'Sao Paulo', 'Sao Paulo', '11030000', '110000000', 'ana@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })


})
