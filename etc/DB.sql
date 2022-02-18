use homepage;

CREATE TABLE user(
    userid VARCHAR(15) NOT NULL PRIMARY KEY,
    userpw VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    register_date timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
) DEFAULT CHARSET=utf8mb4;
 
CREATE TABLE board(
    idx int auto_increment primary key,
    title varchar(40) not null,
    content text not null,
    date timestamp not null,
    hit int not null
);