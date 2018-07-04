import {
    Table,
    Default,
    DataType,
    Column,
    Model,
    Comment,
    AllowNull,
    HasMany
} from "sequelize-typescript";

@Table({
    tableName: "PhoneCert"
})
export default class PhoneCert extends Model<PhoneCert> {
    @AllowNull(false)
    @Comment("Cert Code")
    @Column(DataType.STRING(36))
    certCode: string;

    @AllowNull(false)
    @Comment("Phone Number")
    @Column(DataType.STRING(14))
    phoneNumber: string;

    @Comment("Expire Date")
    @Column(DataType.DATE)
    expiredAt: Date;
}
