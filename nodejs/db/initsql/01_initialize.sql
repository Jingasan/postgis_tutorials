-- DB作成
CREATE DATABASE osm;

-- 作成したDBに接続
\c osm

-- PostGISエクステンションを作成したDBに適応
create extension postgis;
