// 이전에 MariaDB에 users 테이블과 comments 테이블을 만들었으니
// 시퀄라이즈에 User 모델과 Comment 모델 생성 및 연결
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    /* 첫번째 인자: 테이블 이름 */
    "TB_USER_INFO",

    /* 두번째 인자: 컬럼 모델 */
    {
      // 시퀄라이즈는 기본적으로 id를 기본키로 연결하므로 id 컬럼은 적을 필요가 없음
      email: {
        type: DataTypes.STRING(100), // VARCHAR -> STRING
        allowNull: false, // NOT NULL -> allowNull
        unique: true, // UNIQUE -> unique
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(512), // INT -> INTEGER
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
      },
    },
    /* 세번째 인자: 테이블 옵션 */
    {
      timestamps: true, // true 시 시퀄라이즈는 자동으로 createdAt과 updateAt 컬럼 추가
      freezeTableName: true,
      indexes: [
        {
          unique: false,
          fields: ["type"],
        },
      ],
    }
  );
};
