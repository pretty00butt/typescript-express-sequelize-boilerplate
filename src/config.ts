export default {
    db: {
        host: "",
        database: "",
        username: "",
        password: "",
        dialect: "mysql",
        forceSync: false,
        alter: false
    },
    headers: {
        token: "x-access-token",
        page: "x-page",
        pageSize: "x-page-size",
        count: "x-count"
    },
    pagination: {
        pageSize: 10
    },
    jwt: {
        privateKey: "private-key-example",
        options: {}
    },
    password: {
        length: {
            min: 4
        }
    }
};
