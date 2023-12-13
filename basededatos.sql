create database biblioteca

use biblioteca

CREATE TABLE temas (
    id_tema INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE autores (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL
);

CREATE TABLE editoriales (
    id_editorial INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL
);


CREATE TABLE libros (
    id_libro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    edicion VARCHAR(50),
    fk_id_autor INT,
    fk_id_editorial INT,
    fk_id_tema INT,
    FOREIGN KEY (fk_id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (fk_id_editorial) REFERENCES editoriales(id_editorial), 
    FOREIGN KEY (fk_id_tema) REFERENCES temas(id_tema) 
);
