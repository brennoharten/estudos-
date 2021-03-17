create database BrennoHarten;

use BrennoHarten;

create table ContaCorrente(
	Numero int,
    Digito int not null,
    Agencia_Codigo int,
    saldo decimal(10,2),
    primary key(Numero)
);

create table Agencia(
	Codigo int,
    Nome varchar(45),
    Locgradouro varchar(45),
    Numero varchar(45),
    Bairro varchar(45),
    UF varchar(2),
    CEP varchar(45),
    primary key(codigo)
);

alter table ContaCorrente
add foreign key(Agencia_Codigo)
references Agencia(Codigo); 

create table TelefonesAgencia (
	Telefone varchar(45),
    Agencia_Codigo int,
    primary key(Telefone)
);

alter table TelefonesAgencia
add foreign key(Agencia_Codigo)
references Agencia(Codigo); 

create table Correntista(
	CPF varchar(11),
    Nome varchar(45) not null,
    Logradouro varchar(45),
    Numero varchar(45),
	Bairro varchar(45),
    UF varchar(2),
    CEP varchar(45),
    DataNascimento date,
    RendaMensal decimal(10,2),
    primary key(CPF)
);

create table ContaCorrente_has_Correntista(
	ContaCorrente_Numero int,
    Correntista_CPF varchar(11)
);

alter table ContaCorrente_has_Correntista
add foreign key(ContaCorrente_Numero)
references ContaCorrente(Numero); 

alter table ContaCorrente_has_Correntista
add foreign key(Correntista_CPF)
references Correntista(CPF); 

create table TelefoneCorrentista(
	Telefone varchar(45),
    Correntista_CPF varchar(11),
    primary key(Telefone)
);


alter table TelefoneCorrentista
add foreign key(Correntista_CPF)
references Correntista(CPF); 

create table Dependente(
	IDDependente int,
    nome varchar(45) not null,
    Correntista_CPF varchar(11),
    primary key(IDDependente)
);

alter table Dependente
add foreign key(Correntista_CPF)
references Correntista(CPF); 


