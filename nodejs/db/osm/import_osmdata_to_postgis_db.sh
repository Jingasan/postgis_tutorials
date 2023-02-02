#!/bin/bash

# 引数チェック
if [ $# != 1 ]; then
    echo "Usage: $0 [import osm data path]"
    exit 1
fi
importdata=$1

# OSMデータのPostGIS DBインポート
osm2pgsql --create --database=osm --slim --style=./default.style -U postgres -H localhost ${importdata}
