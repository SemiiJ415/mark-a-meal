DROP DATABASE IF EXISTS markaMeal;
CREATE DATABASE markaMeal;
USE markaMeal;


CREATE TABLE meal (
    meal_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    appetizer_id INT NOT NULL,
    protein_id INT NOT NULL,
    protein_to_seasoning INT NOT NULL,
    side1_id INT NOT NULL,
    side2_id INT NOT NULL,
    dessert_id INT NOT NULL,
    drink_id INT NOT NULL,
    CONSTRAINT pk_meal_id PRIMARY KEY (meal_id)
);

CREATE TABLE appetizer (
    appetizer_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    app VARCHAR(20) NOT NULL,
    price FLOAT(4, 2) NOT NULL,
    descript VARCHAR(100),
    app_img MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_appetizer_id PRIMARY KEY (appetizer_id)
);

CREATE TABLE protein (
    protein_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    protein VARCHAR(20) NOT NULL,
    price FLOAT(4, 2) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    protein_img MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_protein_id PRIMARY KEY (protein_id)
);

CREATE TABLE side (
    side_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    side VARCHAR(20) NOT NULL,
    price FLOAT(4, 2) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    side_img MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_side1_id PRIMARY KEY (side_id)
);

CREATE TABLE dessert (
    dessert_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    dessert VARCHAR(20) NOT NULL,
    price FLOAT(4, 2) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    dessert_img MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_dessert_id PRIMARY KEY (dessert_id)
);

CREATE TABLE drink (
    drink_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    drink VARCHAR(20) NOT NULL,
    price FLOAT (4, 2) NOT NULL,
    descript VARCHAR(100) NOT NULL,
    drink_img MEDIUMTEXT NOT NULL,
    CONSTRAINT pk_drink_id PRIMARY KEY (drink_id)
);

CREATE TABLE seasoning (
    seasoning_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    seasoning VARCHAR(20) NOT NULL,
    ingredients VARCHAR(100) NOT NULL,
    CONSTRAINT pk_seasoning_id PRIMARY KEY (seasoning_id)

);

CREATE TABLE protein_to_seasoning (
    protein_id INT UNSIGNED NOT NULL,
    seasoning_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_protein_id FOREIGN KEY (protein_id) REFERENCES protein (protein_id),
    CONSTRAINT fk_seasoning_id FOREIGN KEY (seasoning_id) REFERENCES seasoning (seasoning_id)
);

CREATE TABLE user (
    user_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(40) NOT NULL,
    lName VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    username VARCHAR(40) NOT NULL,
    password CHAR(20) NOT NULL,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

SET @num :=0;
UPDATE dessert SET dessert_id = @num := (@num+1);
ALTER TABLE dessert AUTO_INCREMENT = 1;

ALTER table side 
    MODIFY COLUMN price decimal(4, 2);