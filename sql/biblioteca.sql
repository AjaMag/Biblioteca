-- remove databases if exists
DROP DATABASE IF EXISTS biblioteca_db;
-- create the table
CREATE DATABASE biblioteca_db;

-- drop tables
use biblioteca_db;
drop table cartitems;
drop table carts;

use biblioteca_db;
drop table books;
drop table sections;
