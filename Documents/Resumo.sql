create database Resumo
default character set utf8
default collate utf8_general_ci;

use  Resumo;

create table presentes (
	id int not null auto_increment,
    nome varchar(30) not null,
    preco decimal(6,2),
    id_tipo int,
    primary key(id)
) default charset utf8;

create table tipo_presente (
	id int not null auto_increment,
    tipo varchar(30) not null,
    primary key(id)
) default charset utf8;

alter table presentes
add foreign key(id_tipo)
references tipo_presente(id);

create table amigo(
	email varchar(30),
    nome varchar(30),
    logradouro varchar(30),
    numero varchar(30),
    cep varchar(15),
    id_tipo int,
    primary key(email)
) default charset utf8;

create table telefone(
	id int not null auto_increment,
    email_amigo varchar(30),
    telefone varchar(15),
    primary key(id)
) default charset utf8;

alter table telefone
add foreign key(email_amigo)
references amigo(email);

create table tipo_amigo (
	id int not null auto_increment,
    tipo varchar(30) not null,
    primary key(id)
) default charset utf8;

alter table amigo
add foreign key(id_tipo)
references tipo_amigo(id);

create table entrega(
	id int not null auto_increment,
	dat date,
    id_presente int,
    email_amigo varchar(30),
    primary key(id)
) default charset utf8;

alter table entrega
add foreign key(id_presente)
references presentes(id);

alter table entrega
add foreign key(email_amigo)
references amigo(email);




