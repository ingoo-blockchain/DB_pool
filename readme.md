# 실행방법

/etc/DB.sql 경로복사
> ex ) /home/ingoo/workspace/dbpool/etc/DB.sql  

```sh
# 리눅스기준
$ mysql -u[user] -p[password]
MYSQL > 
source /home/ingoo/workspace/dbpool/etc/DB.sql  
```

```
# 작업 디렉토리 설정
cd ~
mkdir git 
cd git
git clone https://github.com/ingoo-blockchain/DB_pool.git
cd DB_pool

npm install
```

**.env**
```
PORT=3000
DB_HOST=localhost
DB_USER=ingoo2
DB_PASSWORD=ingoo2
DB_DATABASE=homepage
```
