drop database gamebible_test;
create database gamebible_test;
\c gamebible_test;
CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION "pgcrypto";