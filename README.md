## 필수 패키지 설치

```shell
> yarn add sequelize mariadb
> yarn global add sequelize-cli
```

## sequelize 초기화

```shell
> sequelize init

Sequelize CLI [Node: 14.14.0, CLI: 6.2.0, ORM: 6.3.5]

Created "config\config.json"
Successfully created models folder at "D:\workspace\test-sequelize\models".
Successfully created migrations folder at "D:\workspace\test-sequelize\migrations".
Successfully created seeders folder at "D:\workspace\test-sequelize\seeders".
```

## 테이블이름 뒤에 s가 붙는 이슈

models/tbuserinfo.js

```javascript
sequelize.define(
  /* 첫번째 인자: 테이블 이름 */
  "TB_USER_INFO",

  /* 두번째 인자: 컬럼 모델 */
  {
    // 시퀄라이즈는 기본적으로 id를 기본키로 연결하므로 id 컬럼은 적을 필요가 없음
    email: {
      type: DataTypes.STRING(100), // VARCHAR -> STRING
      allowNull: false, // NOT NULL -> allowNull
      unique: true, // UNIQUE -> unique
    },
    password: {
      type: DataTypes.STRING(512), // INT -> INTEGER
      allowNull: false,
    },
  },
  /* 세번째 인자: 테이블 옵션 */
  {
    timestamps: true, // true 시 시퀄라이즈는 자동으로 createdAt과 updateAt 컬럼 추가
    freezeTableName: true, // 테이블명 변경 방지
  }
);
```

## 타임존 설정

config/config.json

```json
"timezone": "+09:00",
"dialectOptions": {
  "dateStrings": true,
  "typeCast": true
}
```
