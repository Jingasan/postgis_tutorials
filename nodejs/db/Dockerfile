##### Production environment #####
FROM postgis/postgis:15-3.3 as releaser

# install necessary packages
RUN apt-get -y update --fix-missing --allow-releaseinfo-change && apt-get -y install tzdata && \
    apt-get -y install osm2pgsql curl && \
    rm -rf /var/lib/apt/list/*
