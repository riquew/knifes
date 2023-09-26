CREATE DATABASE DOMFACONE;

USE DOMFACONE;

CREATE TABLE PRODUTOS(
	ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(500) NOT NULL,
    IMAGEM VARCHAR(5000) NOT NULL,
    QUANTIDADE INT NOT NULL,
    PRECO DECIMAL(15, 2) NOT NULL,
    DESCRICAO VARCHAR(5000) NOT NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE CLIENTE(
	ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(1000) NOT NULL,
    EMAIL VARCHAR(1000) NOT NULL,
    SENHA VARCHAR(100) NOT NULL,
    CEP VARCHAR(9) NOT NULL,
	LOGRADOURO VARCHAR(1000) NOT NULL,
    NUMERO SMALLINT NOT NULL,
    CIDADE VARCHAR(200) NOT NULL,
    ESTADO VARCHAR(2) NOT NULL,
    
    PRIMARY KEY(ID)
);

INSERT INTO PRODUTOS (NOME, IMAGEM, QUANTIDADE, PRECO, DESCRICAO)
VALUES ('Faca Century', 'https://reidacutelaria.vteximg.com.br/arquivos/ids/187292-2000-2000/24011-108.png?v=638211285312200000', 130, 70.55, 'As facas da linha Century Tramontina foram criadas para profissionais e para quem gosta de cozinhar. Por isso, têm precisão e alta durabilidade do fio. Afinal de contas, na hora de ir para cozinha, você merece a melhor companhia. A linha Century Tramontina tem garantia de 25 anos contra defeitos de fabricação, a partir data da compra e sob condições normas de uso.* Lâmina fabricada com aço inox de altíssima qualidade que, aliado ao eficiente tratamento térmico sub-zero, confere à faca uma grande resistência ao desgaste do fio.* Cabo de policarbonato com fibra de vidro, tem boa resistência a impactos.* Certificada pelo NSF, National Sanitation Foudation, organização reconhecida internacionalmente pelas práticas de consultoria, inspeção e treinamento, voltados à garantia da sanidade de alimentos, água, ar e ambiente.* Pode ir à máquina de lavar louças.* Permanece bonita por muito mais tempo.'); 

INSERT INTO PRODUTOS (NOME, IMAGEM, QUANTIDADE, PRECO, DESCRICAO)
VALUES ('Faca Chef Twin Fin II 8', 'https://reidacutelaria.vteximg.com.br/arquivos/ids/185268-2000-2000/30911-08.jpg?v=638106854058700000', 15, 840.00, 'A série TWIN FIN II combina design e engenharia alemães, artesanato japonês e tecnologia de aço inoxidável para uma coleção de facas requintadamente afiadas. Esta série apresenta um design moderno todo em metal que atrai os mais exigentes entusiastas de facas. Forjado em aço inoxidável N60 que se distingue pela sua combinação especial de cromo e carbono. Senta-se confortavelmente na mão com uma alça ergonomicamente projetada. A Faca do Chef é o burro de carga da cozinha. Seja cortando, fatiando ou cortando carne e legumes, a lâmina larga e robusta e o tamanho confortável e equilibrado rapidamente se tornarão a faca ideal para as tarefas diárias.'); 

SELECT * FROM PRODUTOS;
SELECT * FROM CLIENTE;

DELETE FROM PRODUTOS WHERE QUANTIDADE=1;

DROP TABLE PRODUTOS;
DROP TABLE CLIENTE;

DROP DATABASE DOMFACONE