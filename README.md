# Satria Siliwangi Api

# Usage

1. Clone this repository

```markdown
https://github.com/Al-Ghozy03/satria-siliwangi-api.git
```

2. run `npm install`
3. Create `.env` file, and then copy this code below

```dotenv
PORT = 4000

DB_USERNAME = root
DB_PASSWORD =
DB_DEV = satria_siliwangi_basketball_dev
DB_TEST = satria_siliwangi_basketball_test
DB_PROD = satria_siliwangi_basketball_prod
DB_HOST = 127.0.0.1
DB_DIALECT = mysql

JWT_SIGN = [jwt_key]
```

4. run `npx sequelize db:seed:all`
5. run `npm run dev`

# Documentation

**BASE URL = http://localhost:4000**

## Admin

#### Login

```markdown
/admin/login
```

**Method : POST**

Body

|   Name   |  Status  |        |
| :------: | :------: | :----: |
|  email   | Required | String |
| password | Required | String |

## Orangtua

#### Add

```markdown
/orangtua/add
```

**Method : POST**

Body

|      Name       |  Status  |        |
| :-------------: | :------: | :----: |
|    nama_ayah    | Required | String |
| no_telepon_ayah | Required | String |
|    nama_ibu     | Required | String |
| no_telepon_ibu  | Required | String |
|     alamat      | Required | String |

#### Login

```markdown
/orangtua/login
```

**Method : POST**

Body

|    Name    |  Status  |         |
| :--------: | :------: | :-----: |
| no_telepon | Required | Integer |

#### List

```markdown
/orangtua
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Query

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |

#### Detail

```markdown
/orangtua/[id]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit

```markdown
/orangtua/edit/[id]
```

**Method : PUT**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|      Name       |  Status  |        |
| :-------------: | :------: | :----: |
|    nama_ayah    | Optional | String |
| no_telepon_ayah | Optional | String |
|    nama_ibu     | Optional | String |
| no_telepon_ibu  | Optional | String |
|     alamat      | Optional | String |

#### Delete

```markdown
/orangtua/delete/[id]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Siswa

#### Add

```markdown
/siswa/add
```

**Method : POST**

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Authorization | Required |       String        |
| Content-Type  | Required | multipart/form-data |

Body

|     Name      |  Status  |                          |
| :-----------: | :------: | :----------------------: |
|  no_induk_ss  | Required |          String          |
|   ku_genap    | Required |          String          |
|     nama      | Required |          String          |
| jenis_kelamin | Required | "laki-laki", "perempuan" |
|  foto_siswa   | Required |           File           |
| tempat_lahir  | Required |          String          |
| tanggal_lahir | Required |           Date           |
|   no_jersey   | Required |         Integer          |
|  id_orangtua  | Required |         Integer          |
|    sekolah    | Required |          String          |

#### List

```markdown
/siswa
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Query

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |
|   q   | Optional | String  |

#### Detail

```markdown
/siswa/[id]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit

```markdown
/siswa/edit/[id]
```

**Method : PUT**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|     Name      |  Status  |                          |
| :-----------: | :------: | :----------------------: |
|  no_induk_ss  | Optional |          String          |
|   ku_genap    | Optional |          String          |
|     nama      | Optional |          String          |
| jenis_kelamin | Optional | "laki-laki", "perempuan" |
|  foto_siswa   | Optional |           File           |
| tempat_lahir  | Optional |          String          |
| tanggal_lahir | Optional |           Date           |
|   no_jersey   | Optional |         Integer          |
|  id_orangtua  | Optional |         Integer          |
|    sekolah    | Optional |          String          |

#### Delete

```markdown
/siswa/delete/[id]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Absensi

#### Create

```markdown
/absensi/create
```

**Method : POST**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|   Name   |  Status  |                        |
| :------: | :------: | :--------------------: |
| id_siswa | Required |        Integer         |
| tanggal  | Required |          Date          |
|   jam    | Required |          Time          |
|  status  | Required | "hadir", "tidak hadir" |

#### List

```markdown
/absensi
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Query

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |
| date  | Optional |  Date   |
