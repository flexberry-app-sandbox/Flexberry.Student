docker build --no-cache -f SQL\Dockerfile.PostgreSql -t student/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t student/app ../..
