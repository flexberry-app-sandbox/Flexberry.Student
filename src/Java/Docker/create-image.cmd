docker build --no-cache -f SQL\Dockerfile.PostgreSql -t student-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t student-java/app ../../..
