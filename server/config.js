ServiceConfiguration.configurations.upsert(
  { service: "github" },
  {
    $set: {
      clientId: "3decf535765cd7c312da",
      loginStyle: "popup",
      secret: "7880d1f51e61592765dee9c6e026224dd52a61b2"
    }
  }
);