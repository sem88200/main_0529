create table join_member(
    id varchar(15) not null,
    pass varchar(15) not null,
    name varchar(10) not null,
    hp varchar(20) not null,
    email varchar(80),
    primary key(id)
)engine=innoDB charset=utf8;