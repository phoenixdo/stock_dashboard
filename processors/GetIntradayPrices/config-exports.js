const config = {
    cognito_pool_id: "us-east-1_3pMvSxqD0",
    cognito_backend_client_id: "7nner5n071u914r0uhcluj63t0",
    cognito_backend_access_key: "stockDashboard/master/backend",
    appsync_endpoint_url: "https://cirf3p5wkrgx7acztbehwc5m5i.appsync-api.us-east-1.amazonaws.com/graphql",
    appsync_region: "us-east-1",
    data_feed_key: "stockDashboard/master/datafeed",
    feed_interval: "30min"
}

module.exports=config;
